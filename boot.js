const config = Object.freeze(globalThis.bubbleConfig);
let platformSignals = () => {};

function timed(value, ms = 5000) {
  let timer;
  return Promise.race([
    Promise.resolve(value),
    new Promise((_, reject) => { timer = setTimeout(() => reject(new Error("Timeout")), ms); })
  ]).finally(() => clearTimeout(timer));
}

function bestEffort(action) {
  try { Promise.resolve(action()).catch(() => {}); } catch {}
}

function platformDefaults() {
  return {
    language: null, paused: false, muted: false, storageAvailable: false,
    init: async () => {}, ready() {}, gameplay() {}, level() {}, progress() {},
    track() {}, canShowAd: () => false, showAd: async () => "unavailable",
    load: async () => null, save: async () => { throw new Error("Storage unavailable"); },
    offers: async () => [], purchases: async () => [],
    buy: async () => false, canRate: () => false, rate: async () => false
  };
}

function browserStorage() {
  const storage = globalThis.localStorage;
  return {
    load: key => storage.getItem(key),
    save: (key, value) => storage.setItem(key, value)
  };
}

function adSession(register, request) {
  return new Promise(resolve => {
    let stopped = false;
    let started = false;
    let timeout = setTimeout(() => stop("unavailable"), 12000);
    let cleanup = () => {};
    const stop = result => {
      if (stopped) return;
      stopped = true;
      clearTimeout(timeout);
      bestEffort(cleanup);
      resolve(result);
    };
    const start = () => {
      if (started || stopped) return;
      started = true;
      clearTimeout(timeout);
      timeout = setTimeout(() => stop("unavailable"), 120000);
    };
    try {
      cleanup = register(start, stop) ?? cleanup;
      Promise.resolve(request()).catch(() => stop("unavailable"));
    } catch {
      stop("unavailable");
    }
  });
}
;
const platform = platformDefaults();
platform.init = async () => {
  try {
    Object.assign(platform, browserStorage(), { storageAvailable: true });
  } catch {}
};
;
const persistentKeys = new Set([
  "bp_campaign_progress", "bp_campaign_completed_random_level", "bp_campaign_release_completed",
  "bp_campaign_finale_pending", "bp_chest_progress", "bp_bonus_inventory", "bp_player_profile",
  "bp_lang", "bp_sound", "bp_completed_campaign_deck", "bp_completed_campaign_index",
  "bp_completed_campaign_last"
]);
const savedKey = key => persistentKeys.has(key) || key.startsWith("bp_tutorial_");
let savedValues = Object.create(null);
let lastRevision = null;
let revision = 0;
let committedRevision = 0;
let loaded = false;
let saveConflict = false;
let pendingSave;
let saveTimer;
let retries = 0;

function savedSnapshot(raw) {
  if (raw == null) return { revision: null, values: {} };
  const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
  if (parsed?.schema !== 1 || typeof parsed.revision !== "string" ||
      !parsed.values || typeof parsed.values !== "object" || Array.isArray(parsed.values)) {
    throw new Error("Unsupported snapshot");
  }
  return parsed;
}

async function loadGameSave() {
  if (!platform.storageAvailable) return;
  try {
    const data = savedSnapshot(await timed(platform.load(config.saveKey), 3500));
    lastRevision = data.revision;
    savedValues = Object.assign(Object.create(null), Object.fromEntries(
      Object.entries(data.values).filter(([key, value]) => savedKey(key) && typeof value === "string")
    ));
    loaded = true;
  } catch {
    // A failed read must never overwrite an existing save with a fresh session.
    loaded = false;
  }
}

function queueSave(delay = 100) {
  if (!loaded || saveConflict || pendingSave || revision === committedRevision) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(flushGameSave, delay);
}

async function flushGameSave() {
  clearTimeout(saveTimer);
  if (!loaded || saveConflict || pendingSave || revision === committedRevision) return pendingSave;
  const write = async () => {
    const stored = savedSnapshot(await platform.load(config.saveKey));
    if (stored.revision !== lastRevision) {
      saveConflict = true;
      document.dispatchEvent(new Event("bubble-save-conflict"));
      return;
    }
    const draftRevision = revision;
    const nextRevision = globalThis.crypto?.randomUUID?.() ?? Date.now() + "-" + Math.random();
    const values = Object.fromEntries(Object.entries(savedValues).filter(([key]) => savedKey(key)));
    // One value commits progression, chest inventory, and the active replay together.
    await platform.save(config.saveKey, JSON.stringify({ schema: 1, revision: nextRevision, values }));
    lastRevision = nextRevision;
    committedRevision = draftRevision;
    retries = 0;
  };
  pendingSave = Promise.resolve().then(() => {
    if (navigator.locks) return navigator.locks.request(config.saveKey, write);
    return write();
  }).catch(() => { retries++; }).finally(() => {
    pendingSave = null;
    queueSave(retries ? Math.min(30000, 500 * 2 ** retries) : 100);
  });
  return pendingSave;
}

const gameStorage = {
  getItem(key) { return savedValues[key] ?? null; },
  setItems(values) {
    let changed = false;
    for (const [key, value] of Object.entries(values)) {
      const next = value == null ? undefined : String(value);
      if (savedValues[key] === next) continue;
      if (next === undefined) delete savedValues[key];
      else savedValues[key] = next;
      changed ||= savedKey(key);
    }
    if (changed) {
      revision++;
      queueSave();
    }
  },
  setItem(key, value) { this.setItems({ [key]: value }); },
  removeItem(key) { this.setItems({ [key]: null }); }
};

addEventListener("pagehide", () => { void flushGameSave(); });
document.addEventListener("visibilitychange", () => {
  if (document.hidden) void flushGameSave();
});
;
function localeFor(value) {
  const primary = String(value ?? "").toLowerCase().split(/[-_]/)[0];
  if (primary === "pt") return "pt-BR";
  if (primary === "zh") return "zh-CN";
  return Object.hasOwn(config.loadingCopy, primary) ? primary : "en";
}

function startupLocale() {
  return localeFor(gameStorage.getItem("bp_lang") || platform.language || navigator.language);
}

async function startBubbleDart() {
  try {
    await platform.init();
  } catch {
    // A blocked or failed SDK leaves the session playable.
  }
  const assetUrl = name => `${name}?v=${encodeURIComponent(config.version)}`;
  const loadScene = async () => {
    const response = await fetch(assetUrl("scene.html"));
    if (!response.ok) throw new Error("Game assets unavailable");
    return response.text();
  };
  const stylesheet = new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = assetUrl("game.css");
    link.onload = resolve;
    link.onerror = reject;
    document.head.append(link);
  });
  const game = document.createElement("script");
  game.src = assetUrl("game.js");
  // Start downloading the shared code while the scene and save are loaded.
  const preload = document.createElement("link");
  preload.rel = "preload";
  preload.as = "script";
  preload.href = game.src;
  document.head.append(preload);
  const [scene] = await Promise.all([loadScene(), stylesheet, loadGameSave()]);
  const locale = startupLocale();
  document.documentElement.lang = locale;
  document.getElementById("releaseLoading").setAttribute("aria-label", config.loadingCopy[locale].loading);
  document.body.insertAdjacentHTML("beforeend", scene);
  await new Promise((resolve, reject) => {
    game.onload = resolve;
    game.onerror = reject;
    document.body.append(game);
  });
}

function showStartupRetry() {
  const loading = document.getElementById("releaseLoading");
  document.getElementById("releaseSplash").classList.add("splash-ready");
  loading.removeAttribute("role");
  loading.removeAttribute("aria-label");
  loading.dataset.loadFailed = "";
  const retry = document.createElement("button");
  retry.type = "button";
  retry.textContent = "↻";
  retry.setAttribute("aria-label", config.loadingCopy[startupLocale()].reloadGame);
  retry.addEventListener("click", () => location.reload());
  loading.replaceChildren(retry);
}

startBubbleDart().catch(showStartupRetry);