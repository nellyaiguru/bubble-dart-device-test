const localeNames = {"en": "English", "ru": "Русский", "es": "Español", "pt-BR": "Português (Brasil)", "fr": "Français", "de": "Deutsch", "tr": "Türkçe", "id": "Bahasa Indonesia", "it": "Italiano", "pl": "Polski", "ja": "日本語", "ko": "한국어", "zh-CN": "简体中文"};
const messages = {"en":{"cosmetic_A1":"Bunny","cosmetic_A2":"Calico cat","cosmetic_A3":"Corgi","cosmetic_A4":"Hedgehog","cosmetic_PA1":"Otter","cosmetic_PA2":"Fennec fox","cosmetic_PA3":"Raccoon","cosmetic_PA4":"Gecko","cosmetic_CA1":"Red panda","cosmetic_CA2":"Magician cat","cosmetic_SA1":"Arctic fox","cosmetic_SA2":"Axolotl","cosmetic_R1":"Tangerine","cosmetic_R2":"Lemon","cosmetic_R3":"Cherry","cosmetic_R4":"Pink","cosmetic_R5":"Violet","cosmetic_R6":"Blue","cosmetic_R7":"Turquoise","cosmetic_R8":"Green","cosmetic_R9":"Pearl","cosmetic_R10":"Graphite","cosmetic_PR1":"Ginger fur","cosmetic_PR2":"Gray fur","cosmetic_PR3":"Rose gold","cosmetic_PR4":"Starry silver","cosmetic_CF1":"Golden paw","reward_hint":"+1 hint","reward_hints":"+2 hints","reward_heart":"+1 spare life","reward_route":"+1 route hint","noHints":"No hints left.","hintReady":"The highlighted arrow has a clear path.","noHint":"No arrow has a clear path right now.","wait":"Wait for the arrow to land.","lifeAdded":"One extra life for this attempt.","tapHighlighted":"Tap the highlighted arrow.","arrowError":"The arrow could not launch. Try again.","badMove":"Wrong move. You lost one life.","flying":"Arrow in flight…","flyingMany":"Arrows in flight…","animationError":"The move was saved despite an animation issue.","moveDone":"Ready for the next shot.","noUndo":"No move to undo.","undone":"Last move undone.","restarted":"Level restarted.","victory_0":"Well done!","victory_1":"Congratulations!","victory_2":"Hooray!","victory_3":"Amazing!","defeat_0":"Out of attempts","defeat_1":"No attempts left","victoryPet":"Happy kitten","defeatPet":"Sad kitten","watchHint":"Watch an ad for 1 hint","adLoading":"Loading video…","rewardHint":"You received 1 hint.","adUnavailable":"No reward this time. You can keep playing.","chests":"Chests","chestEarned":"Chest for 10 wins!","chestProgress":"Wins toward the next chest: {count}/10","claimReward":"Claim reward","continueGame":"Continue","prizeBonus":"Your bonus is ready to use in a level.","prizeAvatar":"Find your new avatar in your profile.","prizeFrame":"Find your new frame in your profile.","reward":"Reward","noRewards":"No rewards yet","finaleTitle":"All levels cleared","finaleInvite":"Thanks for playing!","finaleReplay":"Rate the game and stay tuned for new levels!","playRandom":"Play random levels","rateGame":"Rate the game","reviewThanks":"Thanks for rating!","reviewUnavailable":"Rating is unavailable right now.","lesson_arrow":"Tap an arrow to pop matching bubbles along its path.","lesson_lives":"A collision or a missed shot costs one life.","lesson_hint":"Tap the bulb to highlight an arrow with a clear path.","lesson_hint_empty":"The bulb shows a valid move. Chests can contain more hints.","lesson_bounce":"This is a reflector. It turns the arrow 90°.","lesson_splitter":"The splitter sends the arrow in two directions.","lesson_shell":"The first matching arrow breaks the ice. The second pops the bubble.","lesson_triple":"The triple splitter fires sideways and backward.","lesson_quad":"The splitter fires in all four directions.","lesson_bonus-heart":"The golden heart adds one spare life for this attempt.","lesson_bonus-route":"Tap the button to see the arrow’s path and all its branches.","gameHud":"Game controls","gameBoard":"Game board","loading":"Loading game","reloadGame":"Reload the game","pickArrow":"Pick an arrow to make a move.","close":"Close","back":"Back to settings","done":"Done","language":"Language","chooseLanguage":"Choose the game language","confirm":"Confirm","settings":"Settings","settingsLabel":"Open settings","sound":"Sound","soundOn":"Sound on","soundOff":"Sound off","level":"Level {count}","continueLevel":"Continue from level {count}","cell":"Cell {count}","livesCount":"Lives remaining: {count}","home":"Main menu","next":"Next level","retry":"Try again","invalid":"Wrong move","gotIt":"Got it","hintCount":"Hints remaining: {count}","hint":"Hint","heart":"Spare life","route":"Route hint","splitTile":"Two-way splitter","tripleTile":"Triple splitter","quadTile":"Four-way splitter","frozenTile":"Frozen bubble","profile":"Profile","edit":"Edit name","playerName":"Player name","player":"Player","avatar":"Avatar","frame":"Frame","previousPage":"Previous page","nextPage":"Next page","premium":"Premium","fromChest":"From a chest","purchaseOnly":"Purchase only","buy":"Buy","purchaseOffer":"Unlock this item for your profile.","purchaseOwned":"You can now select this item.","purchaseFailed":"Purchase was not completed.","saveConflict":"This game is open elsewhere. Reload to use the latest save."},"ru":{"cosmetic_A1":"Крольчиха","cosmetic_A2":"Трёхцветная кошка","cosmetic_A3":"Корги","cosmetic_A4":"Ёжик","cosmetic_PA1":"Выдра","cosmetic_PA2":"Фенек","cosmetic_PA3":"Енот","cosmetic_PA4":"Геккон","cosmetic_CA1":"Красная панда","cosmetic_CA2":"Кот-фокусник","cosmetic_SA1":"Песец","cosmetic_SA2":"Аксолотль","cosmetic_R1":"Мандариновая","cosmetic_R2":"Лимонная","cosmetic_R3":"Вишнёвая","cosmetic_R4":"Розовая","cosmetic_R5":"Фиолетовая","cosmetic_R6":"Синяя","cosmetic_R7":"Бирюзовая","cosmetic_R8":"Зелёная","cosmetic_R9":"Жемчужная","cosmetic_R10":"Графитовая","cosmetic_PR1":"Рыжая шерсть","cosmetic_PR2":"Серая шерсть","cosmetic_PR3":"Розовое золото","cosmetic_PR4":"Звёздное серебро","cosmetic_CF1":"Золотая лапка","reward_hint":"+1 подсказка","reward_hints":"+2 подсказки","reward_heart":"+1 запасная жизнь","reward_route":"+1 подсказка маршрута","noHints":"Подсказки закончились.","hintReady":"Подсвеченная стрелка может пройти без препятствий.","noHint":"Сейчас ни одна стрелка не может пройти без столкновения.","wait":"Дождитесь окончания полёта стрелы.","lifeAdded":"Добавлена одна жизнь на эту попытку.","tapHighlighted":"Нажмите на подсвеченную стрелку.","arrowError":"Не удалось запустить стрелку. Попробуйте ещё раз.","badMove":"Неправильный ход. Потеряна одна жизнь.","flying":"Стрела летит…","flyingMany":"Стрелы летят…","animationError":"Ход сохранился после ошибки анимации.","moveDone":"Можно запускать следующую стрелку.","noUndo":"Нет ходов для отмены.","undone":"Последний ход отменён.","restarted":"Уровень перезапущен.","victory_0":"Молодец!","victory_1":"Поздравляем!","victory_2":"Ура!","victory_3":"Потрясающе!","defeat_0":"Попытки закончились","defeat_1":"Больше нет попыток","victoryPet":"Радостный котёнок","defeatPet":"Грустный котёнок","watchHint":"Смотреть рекламу за 1 подсказку","adLoading":"Загружаем видео…","rewardHint":"Получена 1 подсказка.","adUnavailable":"В этот раз награда не получена. Можно продолжить игру.","chests":"Сундуки","chestEarned":"Сундук за 10 побед!","chestProgress":"Побед на пути к сундуку: {count}/10","claimReward":"Получить награду","continueGame":"Продолжить","prizeBonus":"Бонус уже доступен на игровом поле.","prizeAvatar":"Новый аватар доступен в профиле.","prizeFrame":"Новая рамка доступна в профиле.","reward":"Награда","noRewards":"Наград пока нет","finaleTitle":"Все уровни пройдены","finaleInvite":"Спасибо за игру!","finaleReplay":"Оцените игру и ждите новых уровней!","playRandom":"Играть в случайные уровни","rateGame":"Оценить игру","reviewThanks":"Спасибо за оценку!","reviewUnavailable":"Сейчас оценка недоступна.","lesson_arrow":"Нажмите на стрелку. Она лопнет шарики своего цвета по пути.","lesson_lives":"Столкновение или промах отнимает одну жизнь.","lesson_hint":"Нажмите на лампочку, чтобы подсветить стрелку со свободным путём.","lesson_hint_empty":"Лампочка подсказывает верный ход. Подсказки могут выпасть из сундуков.","lesson_bounce":"Это отражатель. Он поворачивает стрелку на 90°.","lesson_splitter":"Разделитель пускает стрелку в две стороны.","lesson_shell":"Первая стрелка того же цвета разбивает лёд. Вторая лопает шарик.","lesson_triple":"Тройник направляет стрелки вбок и назад.","lesson_quad":"Разделитель пускает стрелки во все четыре стороны.","lesson_bonus-heart":"Золотое сердце даёт одну запасную жизнь на эту попытку.","lesson_bonus-route":"Нажмите на кнопку, чтобы увидеть маршрут стрелки и все ответвления.","gameHud":"Управление игрой","gameBoard":"Игровое поле","loading":"Загрузка игры","reloadGame":"Перезагрузить игру","pickArrow":"Выберите стрелку, чтобы сделать ход.","close":"Закрыть","back":"Назад в настройки","done":"Готово","language":"Язык","chooseLanguage":"Выберите язык игры","confirm":"Подтвердить","settings":"Настройки","settingsLabel":"Открыть настройки","sound":"Звук","soundOn":"Звук включён","soundOff":"Звук выключен","level":"Уровень {count}","continueLevel":"Продолжить с уровня {count}","cell":"Клетка {count}","livesCount":"Осталось жизней: {count}","home":"На главный экран","next":"Следующий уровень","retry":"Попробовать заново","invalid":"Неправильный ход","gotIt":"Понятно","hintCount":"Осталось подсказок: {count}","hint":"Подсказка","heart":"Запасная жизнь","route":"Подсказка маршрута","splitTile":"Двойной разделитель","tripleTile":"Тройной разделитель","quadTile":"Четверной разделитель","frozenTile":"Замороженный шарик","profile":"Профиль","edit":"Изменить имя","playerName":"Имя игрока","player":"Игрок","avatar":"Аватар","frame":"Рамка","previousPage":"Предыдущая страница","nextPage":"Следующая страница","premium":"Премиум","fromChest":"Из сундука","purchaseOnly":"Только покупка","buy":"Купить","purchaseOffer":"Откройте этот предмет для профиля.","purchaseOwned":"Теперь предмет можно выбрать.","purchaseFailed":"Покупка не завершена.","saveConflict":"Игра открыта в другом окне. Перезагрузите страницу, чтобы взять последнее сохранение."},"es":{"cosmetic_A1":"Conejita","cosmetic_A2":"Gata tricolor","cosmetic_A3":"Corgi","cosmetic_A4":"Erizo","cosmetic_PA1":"Nutria","cosmetic_PA2":"Fénec","cosmetic_PA3":"Mapache","cosmetic_PA4":"Geco","cosmetic_CA1":"Panda rojo","cosmetic_CA2":"Gato mago","cosmetic_SA1":"Zorro ártico","cosmetic_SA2":"Ajolote","cosmetic_R1":"Mandarina","cosmetic_R2":"Limón","cosmetic_R3":"Cereza","cosmetic_R4":"Rosa","cosmetic_R5":"Violeta","cosmetic_R6":"Azul","cosmetic_R7":"Turquesa","cosmetic_R8":"Verde","cosmetic_R9":"Perla","cosmetic_R10":"Grafito","cosmetic_PR1":"Pelaje pelirrojo","cosmetic_PR2":"Pelaje gris","cosmetic_PR3":"Oro rosa","cosmetic_PR4":"Plata estrellada","cosmetic_CF1":"Pata dorada","reward_hint":"+1 pista","reward_hints":"+2 pistas","reward_heart":"+1 vida extra","reward_route":"+1 pista de trayectoria","noHints":"No quedan pistas.","hintReady":"La flecha resaltada tiene el camino libre.","noHint":"Ahora mismo ninguna flecha tiene el camino libre.","wait":"Espera a que termine el disparo.","lifeAdded":"Una vida extra para este intento.","tapHighlighted":"Toca la flecha resaltada.","arrowError":"No se pudo disparar la flecha. Inténtalo de nuevo.","badMove":"Movimiento incorrecto. Has perdido una vida.","flying":"Flecha en vuelo…","flyingMany":"Flechas en vuelo…","animationError":"La jugada se guardó pese a un error de animación.","moveDone":"Ya puedes disparar otra flecha.","noUndo":"No hay jugadas que deshacer.","undone":"Última jugada deshecha.","restarted":"Nivel reiniciado.","victory_0":"¡Bien hecho!","victory_1":"¡Enhorabuena!","victory_2":"¡Hurra!","victory_3":"¡Genial!","defeat_0":"Se acabaron los intentos","defeat_1":"No quedan intentos","victoryPet":"Gatito feliz","defeatPet":"Gatito triste","watchHint":"Ver un anuncio por 1 pista","adLoading":"Cargando vídeo…","rewardHint":"Has recibido 1 pista.","adUnavailable":"Esta vez no hay premio. Puedes seguir jugando.","chests":"Cofres","chestEarned":"¡Cofre por 10 victorias!","chestProgress":"Victorias para el próximo cofre: {count}/10","claimReward":"Recoger recompensa","continueGame":"Continuar","prizeBonus":"Ya puedes usar el extra en un nivel.","prizeAvatar":"Tu nuevo avatar está en tu perfil.","prizeFrame":"Tu nuevo marco está en tu perfil.","reward":"Recompensa","noRewards":"Aún no hay recompensas","finaleTitle":"Todos los niveles completados","finaleInvite":"¡Gracias por jugar!","finaleReplay":"¡Valora el juego y no te pierdas los nuevos niveles!","playRandom":"Jugar niveles al azar","rateGame":"Valorar el juego","reviewThanks":"¡Gracias por valorar!","reviewUnavailable":"La valoración no está disponible ahora.","lesson_arrow":"Pulsa una flecha. Hará estallar las burbujas de su color que encuentre.","lesson_lives":"Un choque o un disparo fallido cuesta una vida.","lesson_hint":"Pulsa la bombilla para resaltar una flecha con el camino libre.","lesson_hint_empty":"La bombilla indica una jugada válida. Los cofres pueden traer más pistas.","lesson_bounce":"Este es un reflector. Desvía la flecha 90°.","lesson_splitter":"El divisor envía la flecha en dos direcciones.","lesson_shell":"La primera flecha del mismo color rompe el hielo. La segunda hace estallar la burbuja.","lesson_triple":"El divisor triple envía la flecha hacia los lados y hacia atrás.","lesson_quad":"El divisor cuádruple envía la flecha en las cuatro direcciones.","lesson_bonus-heart":"El corazón dorado añade una vida extra para este intento.","lesson_bonus-route":"Pulsa el botón para ver la trayectoria de la flecha y todos sus desvíos.","gameHud":"Controles del juego","gameBoard":"Tablero","loading":"Cargando el juego","reloadGame":"Volver a cargar el juego","pickArrow":"Elige una flecha para hacer una jugada.","close":"Cerrar","back":"Volver a los ajustes","done":"Listo","language":"Idioma","chooseLanguage":"Elige el idioma del juego","confirm":"Confirmar","settings":"Ajustes","settingsLabel":"Abrir ajustes","sound":"Sonido","soundOn":"Sonido activado","soundOff":"Sonido desactivado","level":"Nivel {count}","continueLevel":"Continuar desde el nivel {count}","cell":"Casilla {count}","livesCount":"Vidas restantes: {count}","home":"Menú principal","next":"Siguiente nivel","retry":"Reintentar","invalid":"Movimiento incorrecto","gotIt":"Entendido","hintCount":"Pistas restantes: {count}","hint":"Pista","heart":"Vida extra","route":"Pista de trayectoria","splitTile":"Divisor doble","tripleTile":"Divisor triple","quadTile":"Divisor cuádruple","frozenTile":"Burbuja congelada","profile":"Perfil","edit":"Editar nombre","playerName":"Nombre del jugador","player":"Jugador","avatar":"Avatar","frame":"Marco","previousPage":"Página anterior","nextPage":"Página siguiente","premium":"Prémium","fromChest":"De un cofre","purchaseOnly":"Solo por compra","buy":"Comprar","purchaseOffer":"Desbloquea este objeto para tu perfil.","purchaseOwned":"Ya puedes elegir este objeto.","purchaseFailed":"La compra no se completó.","saveConflict":"La partida está abierta en otro lugar. Recarga para usar el último guardado."},"pt-BR":{"cosmetic_A1":"Coelhinha","cosmetic_A2":"Gata tricolor","cosmetic_A3":"Corgi","cosmetic_A4":"Ouriço","cosmetic_PA1":"Lontra","cosmetic_PA2":"Feneco","cosmetic_PA3":"Guaxinim","cosmetic_PA4":"Lagartixa","cosmetic_CA1":"Panda-vermelho","cosmetic_CA2":"Gato mágico","cosmetic_SA1":"Raposa-do-ártico","cosmetic_SA2":"Axolote","cosmetic_R1":"Tangerina","cosmetic_R2":"Limão","cosmetic_R3":"Cereja","cosmetic_R4":"Rosa","cosmetic_R5":"Violeta","cosmetic_R6":"Azul","cosmetic_R7":"Turquesa","cosmetic_R8":"Verde","cosmetic_R9":"Pérola","cosmetic_R10":"Grafite","cosmetic_PR1":"Pelo ruivo","cosmetic_PR2":"Pelo cinza","cosmetic_PR3":"Ouro rosé","cosmetic_PR4":"Prata estrelada","cosmetic_CF1":"Patinha dourada","reward_hint":"+1 dica","reward_hints":"+2 dicas","reward_heart":"+1 vida extra","reward_route":"+1 dica de trajeto","noHints":"Sem dicas restantes.","hintReady":"A seta destacada tem o caminho livre.","noHint":"Nenhuma seta tem o caminho livre agora.","wait":"Aguarde o fim do disparo.","lifeAdded":"Uma vida extra para esta tentativa.","tapHighlighted":"Toque na seta destacada.","arrowError":"Não foi possível disparar a seta. Tente novamente.","badMove":"Jogada inválida. Você perdeu uma vida.","flying":"Seta em voo…","flyingMany":"Setas em voo…","animationError":"A jogada foi salva apesar de um erro de animação.","moveDone":"Tudo pronto para o próximo disparo.","noUndo":"Não há jogadas para desfazer.","undone":"Última jogada desfeita.","restarted":"Fase reiniciada.","victory_0":"Muito bem!","victory_1":"Parabéns!","victory_2":"Viva!","victory_3":"Incrível!","defeat_0":"Tentativas esgotadas","defeat_1":"Não restam tentativas","victoryPet":"Gatinho feliz","defeatPet":"Gatinho triste","watchHint":"Ver anúncio por 1 dica","adLoading":"Carregando vídeo…","rewardHint":"Você ganhou 1 dica.","adUnavailable":"Desta vez não houve recompensa. Você pode continuar jogando.","chests":"Baús","chestEarned":"Baú por 10 vitórias!","chestProgress":"Vitórias para o próximo baú: {count}/10","claimReward":"Receber recompensa","continueGame":"Continuar","prizeBonus":"O bônus já está disponível durante a fase.","prizeAvatar":"Seu novo avatar está no perfil.","prizeFrame":"Sua nova moldura está no perfil.","reward":"Recompensa","noRewards":"Ainda não há recompensas","finaleTitle":"Todas as fases concluídas","finaleInvite":"Obrigado por jogar!","finaleReplay":"Avalie o jogo e fique de olho nas próximas fases!","playRandom":"Jogar fases aleatórias","rateGame":"Avaliar o jogo","reviewThanks":"Valeu pela avaliação!","reviewUnavailable":"A avaliação não está disponível agora.","lesson_arrow":"Toque em uma seta para estourar as bolhas da mesma cor no caminho.","lesson_lives":"Uma colisão ou um disparo errado custa uma vida.","lesson_hint":"Toque na lâmpada para destacar uma seta com o caminho livre.","lesson_hint_empty":"A lâmpada indica uma jogada válida. Os baús podem trazer mais dicas.","lesson_bounce":"Este é um refletor. Ele desvia a seta em 90°.","lesson_splitter":"O divisor manda a seta em duas direções.","lesson_shell":"A primeira seta da mesma cor quebra o gelo. A segunda estoura a bolha.","lesson_triple":"O divisor triplo dispara para os lados e para trás.","lesson_quad":"O divisor dispara nas quatro direções.","lesson_bonus-heart":"O coração dourado dá uma vida extra nesta tentativa.","lesson_bonus-route":"Toque no botão para ver a trajetória da seta e suas ramificações.","gameHud":"Controles do jogo","gameBoard":"Tabuleiro","loading":"Carregando o jogo","reloadGame":"Recarregar o jogo","pickArrow":"Escolha uma seta para jogar.","close":"Fechar","back":"Voltar às configurações","done":"Pronto","language":"Idioma","chooseLanguage":"Escolha o idioma do jogo","confirm":"Confirmar","settings":"Configurações","settingsLabel":"Abrir configurações","sound":"Som","soundOn":"Som ligado","soundOff":"Som desligado","level":"Fase {count}","continueLevel":"Continuar da fase {count}","cell":"Casa {count}","livesCount":"Vidas restantes: {count}","home":"Menu principal","next":"Próxima fase","retry":"Tentar de novo","invalid":"Jogada inválida","gotIt":"Entendi","hintCount":"Dicas restantes: {count}","hint":"Dica","heart":"Vida extra","route":"Dica de trajeto","splitTile":"Divisor duplo","tripleTile":"Divisor triplo","quadTile":"Divisor quádruplo","frozenTile":"Bolha congelada","profile":"Perfil","edit":"Editar nome","playerName":"Nome do jogador","player":"Jogador","avatar":"Avatar","frame":"Moldura","previousPage":"Página anterior","nextPage":"Próxima página","premium":"Premium","fromChest":"De um baú","purchaseOnly":"Somente por compra","buy":"Comprar","purchaseOffer":"Desbloqueie este item para seu perfil.","purchaseOwned":"Agora você pode escolher este item.","purchaseFailed":"A compra não foi concluída.","saveConflict":"O jogo está aberto em outra janela. Recarregue para usar o último salvamento."},"fr":{"cosmetic_A1":"Lapine","cosmetic_A2":"Chatte tricolore","cosmetic_A3":"Corgi","cosmetic_A4":"Hérisson","cosmetic_PA1":"Loutre","cosmetic_PA2":"Fennec","cosmetic_PA3":"Raton laveur","cosmetic_PA4":"Gecko","cosmetic_CA1":"Panda roux","cosmetic_CA2":"Chat magicien","cosmetic_SA1":"Renard polaire","cosmetic_SA2":"Axolotl","cosmetic_R1":"Mandarine","cosmetic_R2":"Citron","cosmetic_R3":"Cerise","cosmetic_R4":"Rose","cosmetic_R5":"Violet","cosmetic_R6":"Bleu","cosmetic_R7":"Turquoise","cosmetic_R8":"Vert","cosmetic_R9":"Nacre","cosmetic_R10":"Graphite","cosmetic_PR1":"Fourrure rousse","cosmetic_PR2":"Fourrure grise","cosmetic_PR3":"Or rose","cosmetic_PR4":"Argent étoilé","cosmetic_CF1":"Patte dorée","reward_hint":"+1 indice","reward_hints":"+2 indices","reward_heart":"+1 vie de réserve","reward_route":"+1 indice de trajectoire","noHints":"Plus d’indices.","hintReady":"La flèche indiquée a la voie libre.","noHint":"Aucune flèche n’a la voie libre pour l’instant.","wait":"Attendez la fin du tir.","lifeAdded":"Une vie en plus pour cet essai.","tapHighlighted":"Touchez la flèche indiquée.","arrowError":"Le tir a échoué. Réessayez.","badMove":"Coup invalide. Vous perdez une vie.","flying":"Flèche en vol…","flyingMany":"Flèches en vol…","animationError":"Le coup a été sauvegardé malgré un problème d’animation.","moveDone":"Le prochain tir est prêt.","noUndo":"Aucun coup à annuler.","undone":"Dernier coup annulé.","restarted":"Niveau relancé.","victory_0":"Bravo !","victory_1":"Félicitations !","victory_2":"Hourra !","victory_3":"Génial !","defeat_0":"Essais épuisés","defeat_1":"Plus aucun essai","victoryPet":"Chaton heureux","defeatPet":"Chaton triste","watchHint":"Regarder une pub pour 1 indice","adLoading":"Chargement de la vidéo…","rewardHint":"Vous avez reçu 1 indice.","adUnavailable":"Pas de récompense cette fois. Vous pouvez continuer.","chests":"Coffres","chestEarned":"Un coffre pour 10 victoires !","chestProgress":"Victoires vers le prochain coffre : {count}/10","claimReward":"Récupérer la récompense","continueGame":"Continuer","prizeBonus":"Vous pouvez utiliser ce bonus en jouant.","prizeAvatar":"Votre nouvel avatar se trouve dans votre profil.","prizeFrame":"Votre nouveau cadre se trouve dans votre profil.","reward":"Récompense","noRewards":"Aucune récompense pour l’instant","finaleTitle":"Tous les niveaux terminés","finaleInvite":"Merci d’avoir joué !","finaleReplay":"Notez le jeu et restez à l’affût des prochains niveaux !","playRandom":"Jouer en mode aléatoire","rateGame":"Évaluer le jeu","reviewThanks":"Merci pour votre note !","reviewUnavailable":"La notation est indisponible pour l’instant.","lesson_arrow":"Touchez une flèche pour faire éclater les bulles de la même couleur sur son trajet.","lesson_lives":"Une collision ou un tir manqué coûte une vie.","lesson_hint":"Touchez l’ampoule pour indiquer une flèche à la voie libre.","lesson_hint_empty":"L’ampoule indique un coup valable. Les coffres peuvent contenir des indices.","lesson_bounce":"Voici un réflecteur. Il dévie la flèche de 90°.","lesson_splitter":"Le diviseur envoie la flèche dans deux directions.","lesson_shell":"La première flèche de la bonne couleur brise la glace. La deuxième éclate la bulle.","lesson_triple":"Le diviseur triple tire sur les côtés et en arrière.","lesson_quad":"Le diviseur tire dans les quatre directions.","lesson_bonus-heart":"Le cœur doré ajoute une vie pour cet essai.","lesson_bonus-route":"Touchez le bouton pour voir le trajet de la flèche et ses embranchements.","gameHud":"Commandes du jeu","gameBoard":"Plateau de jeu","loading":"Chargement du jeu","reloadGame":"Recharger le jeu","pickArrow":"Choisissez une flèche pour jouer.","close":"Fermer","back":"Retour aux paramètres","done":"Terminé","language":"Langue","chooseLanguage":"Choisissez la langue du jeu","confirm":"Confirmer","settings":"Paramètres","settingsLabel":"Ouvrir les paramètres","sound":"Son","soundOn":"Son activé","soundOff":"Son coupé","level":"Niveau {count}","continueLevel":"Reprendre au niveau {count}","cell":"Case {count}","livesCount":"Vies restantes : {count}","home":"Menu principal","next":"Niveau suivant","retry":"Réessayer","invalid":"Coup invalide","gotIt":"Compris","hintCount":"Indices restants : {count}","hint":"Indice","heart":"Vie de réserve","route":"Indice de trajectoire","splitTile":"Diviseur double","tripleTile":"Diviseur triple","quadTile":"Diviseur à quatre voies","frozenTile":"Bulle gelée","profile":"Profil","edit":"Modifier le nom","playerName":"Nom du joueur","player":"Joueur","avatar":"Avatar","frame":"Cadre","previousPage":"Page précédente","nextPage":"Page suivante","premium":"Premium","fromChest":"Dans un coffre","purchaseOnly":"Achat uniquement","buy":"Acheter","purchaseOffer":"Débloquez cet objet pour votre profil.","purchaseOwned":"Vous pouvez maintenant choisir cet objet.","purchaseFailed":"L’achat a échoué.","saveConflict":"Le jeu est ouvert ailleurs. Actualisez pour utiliser la dernière sauvegarde."},"de":{"cosmetic_A1":"Häschen","cosmetic_A2":"Dreifarbige Katze","cosmetic_A3":"Corgi","cosmetic_A4":"Igel","cosmetic_PA1":"Otter","cosmetic_PA2":"Fennek","cosmetic_PA3":"Waschbär","cosmetic_PA4":"Gecko","cosmetic_CA1":"Roter Panda","cosmetic_CA2":"Zauberkater","cosmetic_SA1":"Polarfuchs","cosmetic_SA2":"Axolotl","cosmetic_R1":"Mandarine","cosmetic_R2":"Zitrone","cosmetic_R3":"Kirsche","cosmetic_R4":"Rosa","cosmetic_R5":"Violett","cosmetic_R6":"Blau","cosmetic_R7":"Türkis","cosmetic_R8":"Grün","cosmetic_R9":"Perlmutt","cosmetic_R10":"Graphit","cosmetic_PR1":"Rotes Fell","cosmetic_PR2":"Graues Fell","cosmetic_PR3":"Roségold","cosmetic_PR4":"Sternensilber","cosmetic_CF1":"Goldene Pfote","reward_hint":"+1 Hinweis","reward_hints":"+2 Hinweise","reward_heart":"+1 Zusatzleben","reward_route":"+1 Flugbahn-Hinweis","noHints":"Keine Hinweise übrig.","hintReady":"Die markierte Pfeilbahn ist frei.","noHint":"Gerade hat kein Pfeil freie Bahn.","wait":"Warte, bis der Schuss beendet ist.","lifeAdded":"Ein Zusatzleben für diesen Versuch.","tapHighlighted":"Tippe auf den markierten Pfeil.","arrowError":"Der Pfeil konnte nicht starten. Versuche es erneut.","badMove":"Ungültiger Zug. Du verlierst ein Leben.","flying":"Pfeil unterwegs…","flyingMany":"Pfeile unterwegs…","animationError":"Der Zug wurde trotz eines Animationsfehlers gespeichert.","moveDone":"Bereit für den nächsten Schuss.","noUndo":"Kein Zug zum Rückgängigmachen.","undone":"Letzter Zug rückgängig gemacht.","restarted":"Level neu gestartet.","victory_0":"Gut gemacht!","victory_1":"Glückwunsch!","victory_2":"Hurra!","victory_3":"Großartig!","defeat_0":"Versuche aufgebraucht","defeat_1":"Keine Versuche übrig","victoryPet":"Fröhliches Kätzchen","defeatPet":"Trauriges Kätzchen","watchHint":"Werbung für 1 Hinweis ansehen","adLoading":"Video wird geladen…","rewardHint":"Du hast 1 Hinweis erhalten.","adUnavailable":"Diesmal gibt es keine Belohnung. Du kannst weiterspielen.","chests":"Truhen","chestEarned":"Truhe für 10 Siege!","chestProgress":"Siege bis zur nächsten Truhe: {count}/10","claimReward":"Belohnung abholen","continueGame":"Weiter","prizeBonus":"Der Bonus ist im Level verfügbar.","prizeAvatar":"Dein neuer Avatar ist im Profil verfügbar.","prizeFrame":"Dein neuer Rahmen ist im Profil verfügbar.","reward":"Belohnung","noRewards":"Noch keine Belohnungen","finaleTitle":"Alle Level geschafft","finaleInvite":"Danke fürs Spielen!","finaleReplay":"Bewerte das Spiel und freu dich auf neue Level!","playRandom":"Zufällige Level spielen","rateGame":"Spiel bewerten","reviewThanks":"Danke für deine Bewertung!","reviewUnavailable":"Bewertung derzeit nicht verfügbar.","lesson_arrow":"Tippe auf einen Pfeil. Er lässt gleichfarbige Blasen auf seinem Weg platzen.","lesson_lives":"Ein Zusammenstoß oder Fehlschuss kostet ein Leben.","lesson_hint":"Tippe auf die Glühbirne, um einen Pfeil mit freier Bahn zu markieren.","lesson_hint_empty":"Die Glühbirne zeigt einen gültigen Zug. Truhen können Hinweise enthalten.","lesson_bounce":"Das ist ein Reflektor. Er lenkt den Pfeil um 90° um.","lesson_splitter":"Der Teiler lenkt den Pfeil in zwei Richtungen.","lesson_shell":"Der erste Pfeil in derselben Farbe bricht das Eis. Der zweite lässt die Blase platzen.","lesson_triple":"Der Dreifach-Teiler schießt seitwärts und zurück.","lesson_quad":"Der Teiler schießt in alle vier Richtungen.","lesson_bonus-heart":"Das goldene Herz gibt dir ein Zusatzleben für diesen Versuch.","lesson_bonus-route":"Tippe auf die Taste, um die Flugbahn und ihre Abzweigungen zu sehen.","gameHud":"Spielsteuerung","gameBoard":"Spielfeld","loading":"Spiel wird geladen","reloadGame":"Spiel neu laden","pickArrow":"Wähle einen Pfeil für deinen Zug.","close":"Schließen","back":"Zurück zu den Einstellungen","done":"Fertig","language":"Sprache","chooseLanguage":"Wähle die Spielsprache","confirm":"Bestätigen","settings":"Einstellungen","settingsLabel":"Einstellungen öffnen","sound":"Ton","soundOn":"Ton an","soundOff":"Ton aus","level":"Level {count}","continueLevel":"Bei Level {count} weiterspielen","cell":"Feld {count}","livesCount":"Verbleibende Leben: {count}","home":"Hauptmenü","next":"Nächstes Level","retry":"Erneut versuchen","invalid":"Ungültiger Zug","gotIt":"Verstanden","hintCount":"Verbleibende Hinweise: {count}","hint":"Hinweis","heart":"Zusatzleben","route":"Flugbahnhinweis","splitTile":"Zweifach-Teiler","tripleTile":"Dreifach-Teiler","quadTile":"Vierfach-Teiler","frozenTile":"Gefrorene Blase","profile":"Profil","edit":"Namen bearbeiten","playerName":"Spielername","player":"Spieler","avatar":"Avatar","frame":"Rahmen","previousPage":"Vorherige Seite","nextPage":"Nächste Seite","premium":"Premium","fromChest":"Aus einer Truhe","purchaseOnly":"Nur durch Kauf","buy":"Kaufen","purchaseOffer":"Schalte diesen Gegenstand für dein Profil frei.","purchaseOwned":"Du kannst den Gegenstand jetzt auswählen.","purchaseFailed":"Der Kauf wurde nicht abgeschlossen.","saveConflict":"Das Spiel ist woanders geöffnet. Lade neu, um den letzten Spielstand zu verwenden."},"tr":{"cosmetic_A1":"Tavşan","cosmetic_A2":"Üç renkli kedi","cosmetic_A3":"Corgi","cosmetic_A4":"Kirpi","cosmetic_PA1":"Su samuru","cosmetic_PA2":"Çöl tilkisi","cosmetic_PA3":"Rakun","cosmetic_PA4":"Geko","cosmetic_CA1":"Kızıl panda","cosmetic_CA2":"Sihirbaz kedi","cosmetic_SA1":"Kutup tilkisi","cosmetic_SA2":"Aksolotl","cosmetic_R1":"Mandalina","cosmetic_R2":"Limon","cosmetic_R3":"Kiraz","cosmetic_R4":"Pembe","cosmetic_R5":"Mor","cosmetic_R6":"Mavi","cosmetic_R7":"Turkuaz","cosmetic_R8":"Yeşil","cosmetic_R9":"İnci","cosmetic_R10":"Grafit","cosmetic_PR1":"Kızıl kürk","cosmetic_PR2":"Gri kürk","cosmetic_PR3":"Pembe altın","cosmetic_PR4":"Yıldızlı gümüş","cosmetic_CF1":"Altın pati","reward_hint":"+1 ipucu","reward_hints":"+2 ipucu","reward_heart":"+1 ek can","reward_route":"+1 rota ipucu","noHints":"İpucu kalmadı.","hintReady":"Vurgulanan okun yolu açık.","noHint":"Şu anda hiçbir okun yolu açık değil.","wait":"Atış bitene kadar bekle.","lifeAdded":"Bu deneme için bir ek can.","tapHighlighted":"Vurgulanan oka dokun.","arrowError":"Ok fırlatılamadı. Tekrar dene.","badMove":"Geçersiz hamle. Bir can kaybettin.","flying":"Ok havada…","flyingMany":"Oklar havada…","animationError":"Animasyon hatasına rağmen hamle kaydedildi.","moveDone":"Sıradaki atışa hazır.","noUndo":"Geri alınacak hamle yok.","undone":"Son hamle geri alındı.","restarted":"Bölüm yeniden başladı.","victory_0":"Aferin!","victory_1":"Tebrikler!","victory_2":"Yaşasın!","victory_3":"Harika!","defeat_0":"Denemeler tükendi","defeat_1":"Deneme kalmadı","victoryPet":"Mutlu yavru kedi","defeatPet":"Üzgün yavru kedi","watchHint":"1 ipucu için reklam izle","adLoading":"Video yükleniyor…","rewardHint":"1 ipucu kazandın.","adUnavailable":"Bu kez ödül yok. Oynamaya devam edebilirsin.","chests":"Sandıklar","chestEarned":"10 galibiyete sandık!","chestProgress":"Sonraki sandık için galibiyet: {count}/10","claimReward":"Ödülü al","continueGame":"Devam et","prizeBonus":"Bonusu bölümde kullanabilirsin.","prizeAvatar":"Yeni avatarın profilinde.","prizeFrame":"Yeni çerçeven profilinde.","reward":"Ödül","noRewards":"Henüz ödül yok","finaleTitle":"Tüm bölümler tamamlandı","finaleInvite":"Oynadığın için teşekkürler!","finaleReplay":"Oyunu değerlendir ve yeni bölümleri bekle!","playRandom":"Rastgele bölüm oyna","rateGame":"Oyunu değerlendir","reviewThanks":"Değerlendirmen için teşekkürler!","reviewUnavailable":"Şu anda değerlendirme yapılamıyor.","lesson_arrow":"Bir oka dokun. Ok, yolundaki aynı renk baloncukları patlatır.","lesson_lives":"Çarpışma veya boşa atış bir can götürür.","lesson_hint":"Yolu açık bir oku vurgulamak için ampule dokun.","lesson_hint_empty":"Ampul geçerli bir hamle gösterir. Sandıklardan ipucu çıkabilir.","lesson_bounce":"Bu bir yansıtıcı. Oku 90° döndürür.","lesson_splitter":"Ayırıcı oku iki yöne gönderir.","lesson_shell":"Aynı renkteki ilk ok buzu kırar. İkincisi baloncuğu patlatır.","lesson_triple":"Üçlü ayırıcı okları yanlara ve geriye gönderir.","lesson_quad":"Ayırıcı dört yöne de ok gönderir.","lesson_bonus-heart":"Altın kalp bu denemeye bir ek can verir.","lesson_bonus-route":"Okun yolunu ve tüm dallarını görmek için düğmeye dokun.","gameHud":"Oyun kontrolleri","gameBoard":"Oyun tahtası","loading":"Oyun yükleniyor","reloadGame":"Oyunu yeniden yükle","pickArrow":"Hamle yapmak için bir ok seç.","close":"Kapat","back":"Ayarlara dön","done":"Tamam","language":"Dil","chooseLanguage":"Oyun dilini seç","confirm":"Onayla","settings":"Ayarlar","settingsLabel":"Ayarları aç","sound":"Ses","soundOn":"Ses açık","soundOff":"Ses kapalı","level":"Bölüm {count}","continueLevel":"{count}. bölümden devam et","cell":"Hücre {count}","livesCount":"Kalan can: {count}","home":"Ana menü","next":"Sonraki bölüm","retry":"Tekrar dene","invalid":"Geçersiz hamle","gotIt":"Anladım","hintCount":"Kalan ipucu: {count}","hint":"İpucu","heart":"Ek can","route":"Rota ipucu","splitTile":"İkili ayırıcı","tripleTile":"Üçlü ayırıcı","quadTile":"Dörtlü ayırıcı","frozenTile":"Donmuş baloncuk","profile":"Profil","edit":"Adı düzenle","playerName":"Oyuncu adı","player":"Oyuncu","avatar":"Avatar","frame":"Çerçeve","previousPage":"Önceki sayfa","nextPage":"Sonraki sayfa","premium":"Premium","fromChest":"Sandıktan","purchaseOnly":"Yalnızca satın alınabilir","buy":"Satın al","purchaseOffer":"Profilin için bu öğenin kilidini aç.","purchaseOwned":"Artık bu öğeyi seçebilirsin.","purchaseFailed":"Satın alma tamamlanmadı.","saveConflict":"Oyun başka bir yerde açık. Son kaydı kullanmak için yenile."},"id":{"cosmetic_A1":"Kelinci","cosmetic_A2":"Kucing belang tiga","cosmetic_A3":"Korgi","cosmetic_A4":"Landak mini","cosmetic_PA1":"Berang-berang","cosmetic_PA2":"Rubah fennec","cosmetic_PA3":"Rakun","cosmetic_PA4":"Tokek","cosmetic_CA1":"Panda merah","cosmetic_CA2":"Kucing pesulap","cosmetic_SA1":"Rubah Arktik","cosmetic_SA2":"Aksolotl","cosmetic_R1":"Jingga","cosmetic_R2":"Lemon","cosmetic_R3":"Ceri","cosmetic_R4":"Merah muda","cosmetic_R5":"Ungu","cosmetic_R6":"Biru","cosmetic_R7":"Pirus","cosmetic_R8":"Hijau","cosmetic_R9":"Mutiara","cosmetic_R10":"Grafit","cosmetic_PR1":"Bulu jingga","cosmetic_PR2":"Bulu abu-abu","cosmetic_PR3":"Emas merah muda","cosmetic_PR4":"Perak berbintang","cosmetic_CF1":"Cakar emas","reward_hint":"+1 petunjuk","reward_hints":"+2 petunjuk","reward_heart":"+1 nyawa cadangan","reward_route":"+1 petunjuk lintasan","noHints":"Petunjuk habis.","hintReady":"Jalur panah yang disorot bebas.","noHint":"Saat ini tidak ada panah dengan jalur bebas.","wait":"Tunggu hingga panah selesai melesat.","lifeAdded":"Satu nyawa tambahan untuk percobaan ini.","tapHighlighted":"Ketuk panah yang disorot.","arrowError":"Panah gagal melesat. Coba lagi.","badMove":"Langkah salah. Kamu kehilangan satu nyawa.","flying":"Panah sedang melesat…","flyingMany":"Panah-panah sedang melesat…","animationError":"Langkah tersimpan meski animasi bermasalah.","moveDone":"Siap untuk tembakan berikutnya.","noUndo":"Tidak ada langkah untuk dibatalkan.","undone":"Langkah terakhir dibatalkan.","restarted":"Level dimulai ulang.","victory_0":"Bagus!","victory_1":"Selamat!","victory_2":"Hore!","victory_3":"Hebat!","defeat_0":"Percobaan habis","defeat_1":"Tidak ada percobaan tersisa","victoryPet":"Anak kucing gembira","defeatPet":"Anak kucing sedih","watchHint":"Tonton iklan untuk 1 petunjuk","adLoading":"Memuat video…","rewardHint":"Kamu mendapat 1 petunjuk.","adUnavailable":"Belum ada hadiah. Kamu bisa lanjut bermain.","chests":"Peti","chestEarned":"Peti untuk 10 kemenangan!","chestProgress":"Kemenangan menuju peti berikutnya: {count}/10","claimReward":"Ambil hadiah","continueGame":"Lanjut","prizeBonus":"Bonus bisa dipakai saat bermain.","prizeAvatar":"Avatar barumu ada di profil.","prizeFrame":"Bingkai barumu ada di profil.","reward":"Hadiah","noRewards":"Belum ada hadiah","finaleTitle":"Semua level selesai","finaleInvite":"Terima kasih sudah bermain!","finaleReplay":"Beri rating untuk game ini dan nantikan level baru!","playRandom":"Main level acak","rateGame":"Beri nilai game","reviewThanks":"Terima kasih atas penilaiannya!","reviewUnavailable":"Penilaian belum tersedia saat ini.","lesson_arrow":"Ketuk panah untuk memecahkan gelembung sewarna di jalurnya.","lesson_lives":"Tabrakan atau tembakan meleset mengurangi satu nyawa.","lesson_hint":"Ketuk lampu untuk menyorot panah dengan jalur bebas.","lesson_hint_empty":"Lampu menunjukkan langkah yang valid. Peti bisa berisi petunjuk tambahan.","lesson_bounce":"Ini pemantul. Arah panah dibelokkan 90°.","lesson_splitter":"Pembagi mengarahkan panah ke dua arah.","lesson_shell":"Panah sewarna pertama memecah es. Panah kedua meletuskan gelembung.","lesson_triple":"Pembagi tiga arah menembak ke samping dan belakang.","lesson_quad":"Pembagi menembak ke empat arah.","lesson_bonus-heart":"Hati emas menambah satu nyawa untuk percobaan ini.","lesson_bonus-route":"Ketuk tombol untuk melihat lintasan panah beserta cabangnya.","gameHud":"Kontrol permainan","gameBoard":"Papan permainan","loading":"Memuat permainan","reloadGame":"Muat ulang permainan","pickArrow":"Pilih panah untuk mulai bermain.","close":"Tutup","back":"Kembali ke pengaturan","done":"Selesai","language":"Bahasa","chooseLanguage":"Pilih bahasa permainan","confirm":"Konfirmasi","settings":"Pengaturan","settingsLabel":"Buka pengaturan","sound":"Suara","soundOn":"Suara aktif","soundOff":"Suara nonaktif","level":"Level {count}","continueLevel":"Lanjut dari level {count}","cell":"Kotak {count}","livesCount":"Nyawa tersisa: {count}","home":"Menu utama","next":"Level berikutnya","retry":"Coba lagi","invalid":"Langkah salah","gotIt":"Mengerti","hintCount":"Petunjuk tersisa: {count}","hint":"Petunjuk","heart":"Nyawa cadangan","route":"Petunjuk lintasan","splitTile":"Pembagi dua arah","tripleTile":"Pembagi tiga arah","quadTile":"Pembagi empat arah","frozenTile":"Gelembung beku","profile":"Profil","edit":"Ubah nama","playerName":"Nama pemain","player":"Pemain","avatar":"Avatar","frame":"Bingkai","previousPage":"Halaman sebelumnya","nextPage":"Halaman berikutnya","premium":"Premium","fromChest":"Dari peti","purchaseOnly":"Hanya bisa dibeli","buy":"Beli","purchaseOffer":"Buka item ini untuk profilmu.","purchaseOwned":"Kini item ini bisa dipilih.","purchaseFailed":"Pembelian tidak selesai.","saveConflict":"Game terbuka di tempat lain. Muat ulang untuk memakai simpanan terbaru."},"it":{"cosmetic_A1":"Coniglietta","cosmetic_A2":"Gatta tricolore","cosmetic_A3":"Corgi","cosmetic_A4":"Riccio","cosmetic_PA1":"Lontra","cosmetic_PA2":"Fennec","cosmetic_PA3":"Procione","cosmetic_PA4":"Geco","cosmetic_CA1":"Panda rosso","cosmetic_CA2":"Gatto mago","cosmetic_SA1":"Volpe artica","cosmetic_SA2":"Axolotl","cosmetic_R1":"Mandarino","cosmetic_R2":"Limone","cosmetic_R3":"Ciliegia","cosmetic_R4":"Rosa","cosmetic_R5":"Viola","cosmetic_R6":"Blu","cosmetic_R7":"Turchese","cosmetic_R8":"Verde","cosmetic_R9":"Perla","cosmetic_R10":"Grafite","cosmetic_PR1":"Pelliccia fulva","cosmetic_PR2":"Pelliccia grigia","cosmetic_PR3":"Oro rosa","cosmetic_PR4":"Argento stellato","cosmetic_CF1":"Zampa dorata","reward_hint":"+1 aiuto","reward_hints":"+2 aiuti","reward_heart":"+1 vita extra","reward_route":"+1 aiuto traiettoria","noHints":"Aiuti esauriti.","hintReady":"La freccia evidenziata ha la strada libera.","noHint":"Nessuna freccia ha la strada libera per ora.","wait":"Aspetta che il tiro finisca.","lifeAdded":"Una vita in più per questo tentativo.","tapHighlighted":"Tocca la freccia evidenziata.","arrowError":"Impossibile lanciare la freccia. Riprova.","badMove":"Mossa non valida. Hai perso una vita.","flying":"Freccia in volo…","flyingMany":"Frecce in volo…","animationError":"La mossa è stata salvata anche con un errore di animazione.","moveDone":"Pronto per il prossimo tiro.","noUndo":"Non ci sono mosse da annullare.","undone":"Ultima mossa annullata.","restarted":"Livello riavviato.","victory_0":"Ben fatto!","victory_1":"Congratulazioni!","victory_2":"Evviva!","victory_3":"Fantastico!","defeat_0":"Tentativi esauriti","defeat_1":"Nessun tentativo rimasto","victoryPet":"Gattino felice","defeatPet":"Gattino triste","watchHint":"Guarda un annuncio per 1 aiuto","adLoading":"Caricamento del video…","rewardHint":"Hai ricevuto 1 aiuto.","adUnavailable":"Nessun premio stavolta. Puoi continuare a giocare.","chests":"Forzieri","chestEarned":"Un forziere per 10 vittorie!","chestProgress":"Vittorie per il prossimo forziere: {count}/10","claimReward":"Ritira la ricompensa","continueGame":"Continua","prizeBonus":"Il bonus è disponibile durante il livello.","prizeAvatar":"Il nuovo avatar è nel tuo profilo.","prizeFrame":"La nuova cornice è nel tuo profilo.","reward":"Ricompensa","noRewards":"Nessuna ricompensa per ora","finaleTitle":"Tutti i livelli completati","finaleInvite":"Grazie per aver giocato!","finaleReplay":"Lascia una valutazione e preparati ai nuovi livelli!","playRandom":"Gioca livelli casuali","rateGame":"Valuta il gioco","reviewThanks":"Grazie per la valutazione!","reviewUnavailable":"Al momento non è possibile valutare il gioco.","lesson_arrow":"Tocca una freccia per far scoppiare le bolle dello stesso colore lungo il percorso.","lesson_lives":"Una collisione o un tiro mancato costa una vita.","lesson_hint":"Tocca la lampadina per evidenziare una freccia con la strada libera.","lesson_hint_empty":"La lampadina indica una mossa valida. Nei forzieri puoi trovare altri aiuti.","lesson_bounce":"Questo è un riflettore. Devia la freccia di 90°.","lesson_splitter":"Il divisore manda la freccia in due direzioni.","lesson_shell":"La prima freccia dello stesso colore rompe il ghiaccio. La seconda fa scoppiare la bolla.","lesson_triple":"Il divisore triplo spara di lato e all’indietro.","lesson_quad":"Il divisore spara in tutte e quattro le direzioni.","lesson_bonus-heart":"Il cuore dorato aggiunge una vita per questo tentativo.","lesson_bonus-route":"Tocca il pulsante per vedere il percorso della freccia e le diramazioni.","gameHud":"Comandi di gioco","gameBoard":"Tabellone","loading":"Caricamento del gioco","reloadGame":"Ricarica il gioco","pickArrow":"Scegli una freccia per fare una mossa.","close":"Chiudi","back":"Torna alle impostazioni","done":"Fatto","language":"Lingua","chooseLanguage":"Scegli la lingua del gioco","confirm":"Conferma","settings":"Impostazioni","settingsLabel":"Apri impostazioni","sound":"Audio","soundOn":"Audio attivo","soundOff":"Audio disattivato","level":"Livello {count}","continueLevel":"Continua dal livello {count}","cell":"Casella {count}","livesCount":"Vite rimaste: {count}","home":"Menu principale","next":"Livello successivo","retry":"Riprova","invalid":"Mossa non valida","gotIt":"Capito","hintCount":"Aiuti rimasti: {count}","hint":"Aiuto","heart":"Vita extra","route":"Aiuto per la traiettoria","splitTile":"Divisore doppio","tripleTile":"Divisore triplo","quadTile":"Divisore quadruplo","frozenTile":"Bolla congelata","profile":"Profilo","edit":"Modifica nome","playerName":"Nome del giocatore","player":"Giocatore","avatar":"Avatar","frame":"Cornice","previousPage":"Pagina precedente","nextPage":"Pagina successiva","premium":"Premium","fromChest":"Da un forziere","purchaseOnly":"Solo acquistabile","buy":"Acquista","purchaseOffer":"Sblocca questo oggetto per il tuo profilo.","purchaseOwned":"Ora puoi scegliere questo oggetto.","purchaseFailed":"L’acquisto non è stato completato.","saveConflict":"Il gioco è aperto altrove. Ricarica per usare il salvataggio più recente."},"pl":{"cosmetic_A1":"Króliczka","cosmetic_A2":"Trójkolorowa kotka","cosmetic_A3":"Corgi","cosmetic_A4":"Jeż","cosmetic_PA1":"Wydra","cosmetic_PA2":"Fenek","cosmetic_PA3":"Szop","cosmetic_PA4":"Gekon","cosmetic_CA1":"Panda czerwona","cosmetic_CA2":"Kot magik","cosmetic_SA1":"Lis polarny","cosmetic_SA2":"Aksolotl","cosmetic_R1":"Mandarynkowa","cosmetic_R2":"Cytrynowa","cosmetic_R3":"Wiśniowa","cosmetic_R4":"Różowa","cosmetic_R5":"Fioletowa","cosmetic_R6":"Niebieska","cosmetic_R7":"Turkusowa","cosmetic_R8":"Zielona","cosmetic_R9":"Perłowa","cosmetic_R10":"Grafitowa","cosmetic_PR1":"Rude futro","cosmetic_PR2":"Szare futro","cosmetic_PR3":"Różowe złoto","cosmetic_PR4":"Gwiaździste srebro","cosmetic_CF1":"Złota łapka","reward_hint":"+1 podpowiedź","reward_hints":"+2 podpowiedzi","reward_heart":"+1 dodatkowe życie","reward_route":"+1 podpowiedź trasy","noHints":"Brak podpowiedzi.","hintReady":"Podświetlona strzałka ma wolną drogę.","noHint":"Żadna strzałka nie ma teraz wolnej drogi.","wait":"Poczekaj, aż strzałka zakończy lot.","lifeAdded":"Jedno dodatkowe życie w tej próbie.","tapHighlighted":"Dotknij podświetlonej strzałki.","arrowError":"Nie udało się wystrzelić strzałki. Spróbuj ponownie.","badMove":"Nieprawidłowy ruch. Tracisz jedno życie.","flying":"Strzałka w locie…","flyingMany":"Strzałki w locie…","animationError":"Ruch zapisano mimo błędu animacji.","moveDone":"Czas na kolejny strzał.","noUndo":"Brak ruchów do cofnięcia.","undone":"Cofnięto ostatni ruch.","restarted":"Poziom uruchomiono ponownie.","victory_0":"Świetnie!","victory_1":"Gratulacje!","victory_2":"Hurra!","victory_3":"Wspaniale!","defeat_0":"Koniec prób","defeat_1":"Nie ma już prób","victoryPet":"Wesoły kotek","defeatPet":"Smutny kotek","watchHint":"Obejrzyj reklamę za 1 podpowiedź","adLoading":"Wczytywanie filmu…","rewardHint":"Otrzymujesz 1 podpowiedź.","adUnavailable":"Tym razem bez nagrody. Możesz grać dalej.","chests":"Skrzynie","chestEarned":"Skrzynia za 10 zwycięstw!","chestProgress":"Postęp do kolejnej skrzyni: {count}/10","claimReward":"Odbierz nagrodę","continueGame":"Kontynuuj","prizeBonus":"Bonusu możesz użyć podczas gry.","prizeAvatar":"Nowy awatar znajdziesz w profilu.","prizeFrame":"Nową ramkę znajdziesz w profilu.","reward":"Nagroda","noRewards":"Na razie brak nagród","finaleTitle":"Wszystkie poziomy ukończone","finaleInvite":"Dzięki za grę!","finaleReplay":"Oceń grę i czekaj na nowe poziomy!","playRandom":"Graj w losowe poziomy","rateGame":"Oceń grę","reviewThanks":"Dzięki za ocenę!","reviewUnavailable":"Ocena jest teraz niedostępna.","lesson_arrow":"Dotknij strzałki, aby przebić bańki w tym samym kolorze na jej drodze.","lesson_lives":"Zderzenie lub chybienie kosztuje jedno życie.","lesson_hint":"Dotknij żarówki, aby wskazać strzałkę z wolną drogą.","lesson_hint_empty":"Żarówka wskazuje poprawny ruch. W skrzyniach mogą być podpowiedzi.","lesson_bounce":"To odbijacz. Zmienia kierunek strzałki o 90°.","lesson_splitter":"Rozdzielacz kieruje strzałkę w dwie strony.","lesson_shell":"Pierwsza strzałka w tym samym kolorze kruszy lód. Druga przebija bańkę.","lesson_triple":"Rozdzielacz trójkierunkowy strzela w boki i w tył.","lesson_quad":"Rozdzielacz strzela we wszystkich czterech kierunkach.","lesson_bonus-heart":"Złote serce daje dodatkowe życie w tej próbie.","lesson_bonus-route":"Dotknij przycisku, aby zobaczyć trasę strzałki i odgałęzienia.","gameHud":"Sterowanie grą","gameBoard":"Plansza","loading":"Wczytywanie gry","reloadGame":"Wczytaj grę ponownie","pickArrow":"Wybierz strzałkę, aby wykonać ruch.","close":"Zamknij","back":"Wróć do ustawień","done":"Gotowe","language":"Język","chooseLanguage":"Wybierz język gry","confirm":"Potwierdź","settings":"Ustawienia","settingsLabel":"Otwórz ustawienia","sound":"Dźwięk","soundOn":"Dźwięk włączony","soundOff":"Dźwięk wyłączony","level":"Poziom {count}","continueLevel":"Kontynuuj od poziomu {count}","cell":"Pole {count}","livesCount":"Pozostałe życia: {count}","home":"Menu główne","next":"Następny poziom","retry":"Spróbuj ponownie","invalid":"Nieprawidłowy ruch","gotIt":"Rozumiem","hintCount":"Pozostałe podpowiedzi: {count}","hint":"Podpowiedź","heart":"Dodatkowe życie","route":"Podpowiedź trasy","splitTile":"Rozdzielacz dwukierunkowy","tripleTile":"Rozdzielacz trójkierunkowy","quadTile":"Rozdzielacz czterokierunkowy","frozenTile":"Zamarznięta bańka","profile":"Profil","edit":"Zmień nazwę","playerName":"Nazwa gracza","player":"Gracz","avatar":"Awatar","frame":"Ramka","previousPage":"Poprzednia strona","nextPage":"Następna strona","premium":"Premium","fromChest":"Ze skrzyni","purchaseOnly":"Tylko zakup","buy":"Kup","purchaseOffer":"Odblokuj ten przedmiot do profilu.","purchaseOwned":"Możesz teraz wybrać ten przedmiot.","purchaseFailed":"Zakup nie został ukończony.","saveConflict":"Gra jest otwarta gdzie indziej. Odśwież stronę, aby wczytać ostatni zapis."},"ja":{"cosmetic_A1":"ウサギ","cosmetic_A2":"三毛猫","cosmetic_A3":"コーギー","cosmetic_A4":"ハリネズミ","cosmetic_PA1":"カワウソ","cosmetic_PA2":"フェネック","cosmetic_PA3":"アライグマ","cosmetic_PA4":"ヤモリ","cosmetic_CA1":"レッサーパンダ","cosmetic_CA2":"手品師の猫","cosmetic_SA1":"ホッキョクギツネ","cosmetic_SA2":"ウーパールーパー","cosmetic_R1":"タンジェリン","cosmetic_R2":"レモン","cosmetic_R3":"チェリー","cosmetic_R4":"ピンク","cosmetic_R5":"バイオレット","cosmetic_R6":"ブルー","cosmetic_R7":"ターコイズ","cosmetic_R8":"グリーン","cosmetic_R9":"パール","cosmetic_R10":"グラファイト","cosmetic_PR1":"茶トラの毛並み","cosmetic_PR2":"灰色の毛並み","cosmetic_PR3":"ローズゴールド","cosmetic_PR4":"星のシルバー","cosmetic_CF1":"金の肉球","reward_hint":"ヒント＋1","reward_hints":"ヒント＋2","reward_heart":"予備ライフ＋1","reward_route":"軌道ヒント＋1","noHints":"ヒントがありません。","hintReady":"光っている矢の道は空いています。","noHint":"今は安全に飛ばせる矢がありません。","wait":"矢が飛び終わるまでお待ちください。","lifeAdded":"今回の挑戦にライフが１つ追加されました。","tapHighlighted":"光っている矢をタップ。","arrowError":"矢を発射できませんでした。もう一度お試しください。","badMove":"無効な手です。ライフが１つ減りました。","flying":"矢が飛んでいます…","flyingMany":"矢が同時に飛んでいます…","animationError":"アニメーションに問題がありましたが、手は確定しました。","moveDone":"次の矢を発射できます。","noUndo":"取り消せる手がありません。","undone":"最後の手を取り消しました。","restarted":"レベルをやり直します。","victory_0":"お見事！","victory_1":"おめでとう！","victory_2":"やったね！","victory_3":"すばらしい！","defeat_0":"挑戦回数を使い切りました","defeat_1":"残りの挑戦回数はありません","victoryPet":"喜ぶ子猫","defeatPet":"悲しむ子猫","watchHint":"広告を見てヒントを１つ獲得","adLoading":"動画を読み込み中…","rewardHint":"ヒントを１つ獲得しました。","adUnavailable":"今回は報酬を獲得できませんでした。ゲームは続けられます。","chests":"宝箱","chestEarned":"10勝で宝箱獲得！","chestProgress":"次の宝箱までの勝利数：{count}/10","claimReward":"報酬を受け取る","continueGame":"続ける","prizeBonus":"レベル内でボーナスを使えます。","prizeAvatar":"新しいアバターはプロフィールで選べます。","prizeFrame":"新しいフレームはプロフィールで選べます。","reward":"報酬","noRewards":"まだ報酬はありません","finaleTitle":"全レベルクリア","finaleInvite":"プレイありがとう！","finaleReplay":"ゲームを評価して、新しいレベルをお楽しみに！","playRandom":"ランダムで遊ぶ","rateGame":"ゲームを評価","reviewThanks":"評価ありがとうございます！","reviewUnavailable":"現在は評価できません。","lesson_arrow":"矢をタップ。同じ色のバブルを通り道で割ります。","lesson_lives":"衝突や空振りでライフが１つ減ります。","lesson_hint":"電球をタップすると、道が空いている矢が光ります。","lesson_hint_empty":"電球は有効な手を示します。宝箱でヒントが手に入ることもあります。","lesson_bounce":"反射板に当たると、矢が90度曲がります。","lesson_splitter":"分岐で二方向に飛びます。","lesson_shell":"同じ色の矢が最初に氷を割り、次の矢がバブルを割ります。","lesson_triple":"三方向分岐は左右と後ろに飛ばします。","lesson_quad":"四方向分岐はすべての方向に飛ばします。","lesson_bonus-heart":"金のハートは今回の挑戦にライフを１つ追加します。","lesson_bonus-route":"ボタンをタップすると矢の軌道と分岐が表示されます。","gameHud":"ゲーム操作","gameBoard":"ゲーム盤","loading":"読み込み中","reloadGame":"もう一度","pickArrow":"矢をタップして発射します。","close":"閉じる","back":"設定に戻る","done":"完了","language":"言語","chooseLanguage":"ゲームの言語を選択","confirm":"決定","settings":"設定","settingsLabel":"設定を開く","sound":"サウンド","soundOn":"サウンドオン","soundOff":"サウンドオフ","level":"レベル {count}","continueLevel":"レベル {count} から再開","cell":"マス {count}","livesCount":"残りライフ：{count}","home":"メインメニュー","next":"次のレベル","retry":"もう一度","invalid":"無効な手","gotIt":"わかった","hintCount":"残りヒント：{count}","hint":"ヒント","heart":"予備ライフ","route":"軌道ヒント","splitTile":"二方向分岐","tripleTile":"三方向分岐","quadTile":"四方向分岐","frozenTile":"凍ったバブル","profile":"プロフィール","edit":"名前を編集","playerName":"プレイヤー名","player":"プレイヤー","avatar":"アバター","frame":"フレーム","previousPage":"前のページ","nextPage":"次のページ","premium":"プレミアム","fromChest":"宝箱から入手","purchaseOnly":"購入限定","buy":"購入","purchaseOffer":"プロフィール用アイテムを解放します。","purchaseOwned":"このアイテムを選べるようになりました。","purchaseFailed":"購入が完了しませんでした。","saveConflict":"別の場所でゲームが開いています。最新のセーブを使うには再読み込みしてください。"},"ko":{"cosmetic_A1":"토끼","cosmetic_A2":"삼색 고양이","cosmetic_A3":"코기","cosmetic_A4":"고슴도치","cosmetic_PA1":"수달","cosmetic_PA2":"사막여우","cosmetic_PA3":"너구리","cosmetic_PA4":"도마뱀붙이","cosmetic_CA1":"레서판다","cosmetic_CA2":"마술사 고양이","cosmetic_SA1":"북극여우","cosmetic_SA2":"아홀로틀","cosmetic_R1":"귤빛","cosmetic_R2":"레몬빛","cosmetic_R3":"체리빛","cosmetic_R4":"분홍색","cosmetic_R5":"보라색","cosmetic_R6":"파란색","cosmetic_R7":"청록색","cosmetic_R8":"초록색","cosmetic_R9":"진주빛","cosmetic_R10":"흑연빛","cosmetic_PR1":"주황 털","cosmetic_PR2":"회색 털","cosmetic_PR3":"로즈 골드","cosmetic_PR4":"별빛 은색","cosmetic_CF1":"황금 발바닥","reward_hint":"힌트 +1","reward_hints":"힌트 +2","reward_heart":"추가 목숨 +1","reward_route":"경로 힌트 +1","noHints":"힌트를 다 썼어요.","hintReady":"강조된 화살표의 길이 열려 있어요.","noHint":"지금은 안전하게 쏠 화살표가 없어요.","wait":"화살표가 날아갈 때까지 기다리세요.","lifeAdded":"이번 시도에 목숨 하나가 추가됐어요.","tapHighlighted":"강조된 화살표를 누르세요.","arrowError":"화살표를 쏘지 못했어요. 다시 시도하세요.","badMove":"잘못된 수예요. 목숨 하나를 잃었어요.","flying":"화살표가 날아가는 중…","flyingMany":"화살표들이 날아가는 중…","animationError":"애니메이션 오류가 발생했지만 수는 저장됐어요.","moveDone":"다음 화살표를 쏠 수 있어요.","noUndo":"되돌릴 수가 없어요.","undone":"마지막 수를 되돌렸어요.","restarted":"스테이지를 다시 시작했어요.","victory_0":"잘했어요!","victory_1":"축하해요!","victory_2":"만세!","victory_3":"대단해요!","defeat_0":"시도 횟수를 다 썼어요","defeat_1":"남은 시도가 없어요","victoryPet":"기뻐하는 아기 고양이","defeatPet":"슬퍼하는 아기 고양이","watchHint":"광고 보고 힌트 1개 받기","adLoading":"동영상을 불러오는 중…","rewardHint":"힌트 1개를 받았어요.","adUnavailable":"이번에는 보상을 받지 못했어요. 계속 플레이할 수 있어요.","chests":"상자","chestEarned":"10승 보상 상자!","chestProgress":"다음 상자까지 승리: {count}/10","claimReward":"보상 받기","continueGame":"계속하기","prizeBonus":"스테이지에서 보너스를 사용할 수 있어요.","prizeAvatar":"프로필에서 새 아바타를 선택할 수 있어요.","prizeFrame":"프로필에서 새 테두리를 선택할 수 있어요.","reward":"보상","noRewards":"아직 보상이 없어요","finaleTitle":"모든 스테이지 완료","finaleInvite":"플레이해 주셔서 감사해요!","finaleReplay":"게임을 평가하고 새 스테이지를 기다려 주세요!","playRandom":"무작위 스테이지","rateGame":"게임 평가","reviewThanks":"평가해 주셔서 감사해요!","reviewUnavailable":"지금은 평가할 수 없어요.","lesson_arrow":"화살표를 누르세요. 경로에 있는 같은 색 버블을 터뜨려요.","lesson_lives":"부딪히거나 빗나가면 목숨 하나를 잃어요.","lesson_hint":"전구를 누르면 길이 열린 화살표가 강조돼요.","lesson_hint_empty":"전구는 가능한 수를 알려줘요. 상자에서 힌트를 얻을 수 있어요.","lesson_bounce":"반사판에 닿은 화살표는 90도 꺾여요.","lesson_splitter":"분기기가 두 방향으로 보내요..","lesson_shell":"같은 색 첫 화살표는 얼음을 깨고, 두 번째는 버블을 터뜨려요.","lesson_triple":"삼방향 분기기는 양옆과 뒤로 쏴요.","lesson_quad":"분기기가 네 방향 모두로 쏴요.","lesson_bonus-heart":"황금 하트는 이번 시도에 목숨 하나를 더해요.","lesson_bonus-route":"버튼을 누르면 화살표의 경로와 모든 갈래가 보여요.","gameHud":"게임 조작","gameBoard":"게임판","loading":"게임 불러오는 중","reloadGame":"다시 시도","pickArrow":"화살표를 누르세요.","close":"닫기","back":"설정으로 돌아가기","done":"완료","language":"언어","chooseLanguage":"게임 언어 선택","confirm":"확인","settings":"설정","settingsLabel":"설정 열기","sound":"소리","soundOn":"소리 켜짐","soundOff":"소리 꺼짐","level":"스테이지 {count}","continueLevel":"스테이지 {count}부터 계속","cell":"칸 {count}","livesCount":"남은 목숨: {count}","home":"메인 메뉴","next":"다음 스테이지","retry":"다시 시도","invalid":"잘못된 수","gotIt":"알겠어요","hintCount":"남은 힌트: {count}","hint":"힌트","heart":"추가 목숨","route":"경로 힌트","splitTile":"양방향 분기기","tripleTile":"삼방향 분기기","quadTile":"사방향 분기기","frozenTile":"얼어붙은 버블","profile":"프로필","edit":"이름 변경","playerName":"플레이어 이름","player":"플레이어","avatar":"아바타","frame":"프레임","previousPage":"이전 페이지","nextPage":"다음 페이지","premium":"프리미엄","fromChest":"상자에서 획득","purchaseOnly":"구매 전용","buy":"구매","purchaseOffer":"프로필용 아이템을 잠금 해제하세요.","purchaseOwned":"이제 이 아이템을 선택할 수 있어요.","purchaseFailed":"구매가 완료되지 않았어요.","saveConflict":"게임이 다른 창에서 열려 있어요. 최신 저장을 불러오려면 새로고침하세요."},"zh-CN":{"cosmetic_A1":"小兔子","cosmetic_A2":"三花猫","cosmetic_A3":"柯基","cosmetic_A4":"刺猬","cosmetic_PA1":"水獭","cosmetic_PA2":"耳廓狐","cosmetic_PA3":"浣熊","cosmetic_PA4":"壁虎","cosmetic_CA1":"小熊猫","cosmetic_CA2":"魔术师猫","cosmetic_SA1":"北极狐","cosmetic_SA2":"美西螈","cosmetic_R1":"橘色","cosmetic_R2":"柠檬色","cosmetic_R3":"樱桃色","cosmetic_R4":"粉色","cosmetic_R5":"紫色","cosmetic_R6":"蓝色","cosmetic_R7":"蓝绿色","cosmetic_R8":"绿色","cosmetic_R9":"珍珠色","cosmetic_R10":"石墨色","cosmetic_PR1":"橘色绒毛","cosmetic_PR2":"灰色绒毛","cosmetic_PR3":"玫瑰金","cosmetic_PR4":"星光银","cosmetic_CF1":"金色爪印","reward_hint":"提示 +1","reward_hints":"提示 +2","reward_heart":"备用生命 +1","reward_route":"路线提示 +1","noHints":"提示已用完。","hintReady":"高亮箭头的路线畅通。","noHint":"目前没有路线畅通的箭头。","wait":"请等箭头飞行结束。","lifeAdded":"本次尝试增加了一条生命。","tapHighlighted":"点击高亮箭头。","arrowError":"无法发射箭头。请重试。","badMove":"操作无效。你失去了一条生命。","flying":"箭头飞行中…","flyingMany":"多支箭头飞行中…","animationError":"动画出错，但本次操作已保存。","moveDone":"可以发射下一支箭头了。","noUndo":"没有可撤销的操作。","undone":"已撤销上一步。","restarted":"关卡已重新开始。","victory_0":"干得好！","victory_1":"恭喜！","victory_2":"太棒了！","victory_3":"真厉害！","defeat_0":"尝试次数已用完","defeat_1":"没有剩余尝试机会","victoryPet":"开心的小猫","defeatPet":"伤心的小猫","watchHint":"观看广告获得 1 条提示","adLoading":"正在加载视频…","rewardHint":"已获得 1 条提示。","adUnavailable":"本次未获得奖励。你可以继续游戏。","chests":"宝箱","chestEarned":"赢得 10 场，获得宝箱！","chestProgress":"下一个宝箱进度：{count}/10","claimReward":"领取奖励","continueGame":"继续","prizeBonus":"可在关卡中使用此奖励。","prizeAvatar":"可在个人资料中更换新头像。","prizeFrame":"可在个人资料中更换新边框。","reward":"奖励","noRewards":"暂无奖励","finaleTitle":"已通关所有关卡","finaleInvite":"感谢游玩！","finaleReplay":"欢迎为游戏评分，敬请期待新关卡！","playRandom":"随机挑战","rateGame":"评价游戏","reviewThanks":"感谢你的评价！","reviewUnavailable":"暂时无法评价。","lesson_arrow":"点击箭头。它会击破沿途同色的气泡。","lesson_lives":"碰撞或射空会消耗一条生命。","lesson_hint":"点击灯泡会高亮一支路线畅通的箭头。","lesson_hint_empty":"灯泡会提示可行的操作。宝箱中可能含有更多提示。","lesson_bounce":"这是反射器。它会让箭头转向 90°。","lesson_splitter":"分流器会将它分成两个方向。","lesson_shell":"第一支同色箭头击碎冰层，第二支击破气泡。","lesson_triple":"三向分流器向两侧和后方发射。","lesson_quad":"分流器向四个方向发射。","lesson_bonus-heart":"金色爱心为本次尝试增加一条生命。","lesson_bonus-route":"点击按钮查看箭头路线和所有分支。","gameHud":"游戏操作","gameBoard":"游戏棋盘","loading":"正在加载游戏","reloadGame":"重试","pickArrow":"点击箭头发射。","close":"关闭","back":"返回设置","done":"完成","language":"语言","chooseLanguage":"选择游戏语言","confirm":"确认","settings":"设置","settingsLabel":"打开设置","sound":"声音","soundOn":"声音已开启","soundOff":"声音已关闭","level":"第 {count} 关","continueLevel":"从第 {count} 关继续","cell":"第 {count} 格","livesCount":"剩余生命：{count}","home":"主菜单","next":"下一关","retry":"重试","invalid":"无效操作","gotIt":"知道了","hintCount":"剩余提示：{count}","hint":"提示","heart":"备用生命","route":"路线提示","splitTile":"双向分流器","tripleTile":"三向分流器","quadTile":"四向分流器","frozenTile":"冰冻气泡","profile":"个人资料","edit":"编辑名字","playerName":"玩家名字","player":"玩家","avatar":"头像","frame":"边框","previousPage":"上一页","nextPage":"下一页","premium":"高级","fromChest":"从宝箱获得","purchaseOnly":"仅限购买","buy":"购买","purchaseOffer":"解锁此个人资料物品。","purchaseOwned":"现在可以选择此物品了。","purchaseFailed":"购买未完成。","saveConflict":"游戏已在其他位置打开。请刷新以使用最新存档。"}};

(() => {
  const assets = {
    "clouds.png": "assets/2165ffc04fd9776be2034960.webp",
    "ball-blue.png": "assets/41f55338c87ec2fad77f05c7.png",
    "ball-red.png": "assets/c7e7fb481c8476c5253819f4.png",
    "ball-orange.png": "assets/8a71053eb2eda0bff01955a6.png",
    "ball-yellow.png": "assets/8560ab1b86ba8266ecf332b0.png",
    "ball-pink.png": "assets/5ffa2e4c99cc4ece959d580a.png"
};

  const themes = {
    clouds: {
      title: 'Солнечное небо',
      decor: [
        { portrait: [88, 12, 88, -16], wide: [91, 10, 52, -16], opacity: .88 },
        { portrait: [8, 34, 73, 11], wide: [8, 36, 44, 11], opacity: .77, mirror: true },
        { portrait: [50, 95, 164, -5], wide: [58, 97, 124, -5] },
        { portrait: [0, 97, 100, 7], wide: [3, 91, 70, 7], mirror: true },
      ],
      // Color, x and y in percent, diameter in percent of the short side.
      balls: [
        ['blue', 1, 9, 37], ['red', 100, 3, 35], ['yellow', 32, 3, 13],
        ['pink', 14, 18, 12], ['green', 87, 18, 14], ['orange', 96, 31, 12],
        ['purple', 8, 31, 13], ['yellow', 21, 26, 5], ['blue', 76, 30, 5],
        ['green', 2, 43, 24], ['purple', 95, 42, 25], ['red', 16, 47, 9],
        ['orange', 86, 54, 8], ['pink', 7, 58, 14], ['blue', 98, 59, 17],
        ['yellow', 27, 62, 5], ['red', 85, 66, 7], ['orange', 9, 74, 22],
        ['green', 96, 76, 26], ['purple', 16, 83, 9], ['pink', 74, 80, 7],
        ['red', -2, 95, 44], ['yellow', 33, 95, 13], ['blue', 64, 91, 19],
        ['purple', 99, 96, 48], ['orange', 50, 102, 29],
      ],
    },
  };

  function makeDecoration(id, part) {
    const image = document.createElement('img');
    image.className = 'bp-decor';
    image.src = assets[`${id}.png`];
    image.alt = '';
    const values = ['x', 'y', 'width', 'angle'];
    for (const [index, name] of values.entries()) {
      const unit = name === 'angle' ? 'deg' : name === 'width' ? 'cqw' : '%';
      image.style.setProperty(`--${name}`, `${part.portrait[index]}${unit}`);
      image.style.setProperty(`--wide-${name}`, `${part.wide[index]}${unit}`);
    }
    image.style.setProperty('--mirror', part.mirror ? '-1' : '1');
    image.style.opacity = part.opacity ?? 1;
    return image;
  }

  function makeBall([color, x, y, size]) {
    const ball = document.createElement('img');
    ball.className = `bp-marble bp-marble--${color}`;
    // The original blue artwork is reused for the two tinted colors.
    const sprite = ['green', 'purple'].includes(color) ? 'blue' : color;
    ball.src = assets[`ball-${sprite}.png`];
    ball.alt = '';
    ball.style.setProperty('--x', `${x}%`);
    ball.style.setProperty('--y', `${y}%`);
    ball.style.setProperty('--diameter', `${size}cqmin`);
    if (size < 9) ball.classList.add('bp-marble--distant');
    return ball;
  }

  function mount(host, id) {
    const themeId = Object.hasOwn(themes, id) ? id : 'clouds';
    const theme = themes[themeId];
    const backdrop = document.createElement('div');
    backdrop.className = 'bp-backdrop';
    backdrop.dataset.theme = themeId;
    backdrop.setAttribute('aria-hidden', 'true');

    const atmosphere = document.createElement('div');
    atmosphere.className = 'bp-atmosphere';
    backdrop.append(atmosphere, ...theme.decor.map(part => makeDecoration(themeId, part)), ...theme.balls.map(makeBall));

    const previous = host.querySelector(':scope > .bp-backdrop');
    if (previous) previous.replaceWith(backdrop);
    else host.prepend(backdrop);
    return backdrop;
  }

  mount(document.body, 'clouds');
})();

;

"use strict";

const menuLogo = document.querySelector(".hp-logo").src;
document.querySelectorAll(".bp-screen .bp-logo").forEach(logo => { logo.src = menuLogo; });

const COLORS = {
  "orange": "#ff963e",
  "blue": "#4ca9ed",
  "green": "#65ce54",
  "purple": "#b55cdd",
  "red": "#f04b54",
  "yellow": "#ffca30",
  "pink": "#e86ac5",
  "teal": "#169e99",
  "indigo": "#425ac2",
  "lime": "#a5c829",
  "coral": "#fa795f",
  "cocoa": "#a76a45",
  "aqua": "#27c6e4",
  "magenta": "#db409d",
  "mint": "#50d6a1"
};

const DIRS = {
  right: [1, 0, "➜"],
  left: [-1, 0, "⬅"],
  up: [0, -1, "⬆"],
  down: [0, 1, "⬇"]
};

const B = color => ({ type: "ball", color });
const A = (color, dir) => ({ type: "arrow", color, dir });

// ВАЖНО: белые специальные элементы по умолчанию ПЕРЕНАПРАВЛЯЮТ стрелу,
// а не блокируют её. Это исправляет ошибку с синей стрелкой на уровне 29.
const R = (slash = "/", mode = "turn") => ({
  type: "rope",
  slash,
  mode
});

// Fallback outside the curated range.
function generatedLevel(n) {
  const colors = Object.keys(COLORS);
  const g = Array(36).fill(null);

  // Белые диагональные элементы остаются в верхней и нижней буферных строках
  // и не перекрывают траектории цветных стрел.
  g[0] = R("\\");
  g[2] = R("/");
  g[3] = R("\\");
  g[5] = R("/");
  g[31] = R("/");
  g[32] = R("\\");
  g[33] = R("/");
  g[34] = R("\\");

  for (let y = 1; y < 5; y++) {
    const color = colors[(n + y * 2) % colors.length];
    const direction = (n + y) % 2 === 0 ? "right" : "left";

    if (direction === "right") {
      g[y * 6] = A(color, "right");
      for (let x = 1; x < 6; x++) g[y * 6 + x] = B(color);
    } else {
      g[y * 6 + 5] = A(color, "left");
      for (let x = 0; x < 5; x++) g[y * 6 + x] = B(color);
    }
  }

  return g;
}

const S = axis => ({ type: "rope", mode: "split", axis });
const MAX_BOARD_SIZE = 12;

const SPLITTER_TOKENS = { "|": "vertical", "-": "horizontal", "3": "triple", "4": "quad" };

function isPersistentSplitter(axis) {
  return axis === "triple" || axis === "quad";
}

function splitDirections(cell, incoming) {
  const directions = ["up", "down", "left", "right"];
  if (cell.axis === "quad") return directions;
  if (cell.axis === "triple") return directions.filter(dir => dir !== incoming);
  const axis = cell.axis ?? (incoming === "left" || incoming === "right" ? "vertical" : "horizontal");
  return axis === "vertical" ? ["up", "down"] : ["left", "right"];
}

function decodeCampaignRows(rows, colors) {
  return rows.flatMap(row => row.split(" ").map(token => {
    if (token === ".") return null;
    if (Object.hasOwn(SPLITTER_TOKENS, token)) return S(SPLITTER_TOKENS[token]);
    if (token === "/" || token === "\\") return R(token);
    const color = colors[token[0]];
    const mark = token.slice(1);
    const direction = { ">": "right", "v": "down", "<": "left", "^": "up" }[mark];
    if (!color) throw new Error("Unknown campaign tile: " + token);
    if (direction) return A(color, direction);
    if (!mark) return B(color);
    if (mark === "!") return { ...B(color), shell: true };
    throw new Error("Unknown campaign tile: " + token);
  }));
}

const CAMPAIGN_LEVELS = [
  [". r .", ". r .", ". r^ ."],
  ["t> t t", ". . cv", ". . c"],
  [". . iv .", "y> y i y", ". . i .", ". i> . i"],
  ["l l l< .", ". . lv .", ". lv l .", "h> l l h"],
  ["y> iv y y", "t t t t<", "y i y y<", "t> i t t"],
  ["b> b hv b h", "k k k k k<", "b b h b< h", ". . h . h", "b> b h . h^"],
  ["r> r r r r", ". . b . .", ". . b . .", ". . b . .", ". . b^ . ."],
  ["r . . . bv", "r . . . b", "r g> g g b", "r . . . b", "r^ . . . b"],
  ["kv k k bv k< y", "y y y y y y<", "k . k> k k y", "k bv . b . y", "y y y b y< y^", "k b . b . ."],
  ["t tv t t l t", "t t t t l t", "i t i i< l t", "p p p p< l^ t^", "t^ t t^ t^ l l<", "i> t i i i i"],
  [". . . . t .", "tv . . . . .", "t . tv . t tv", "t tv . . . t", "h> t t h t t", "t t t . t^ t"],
  ["r> r r . . .", ". . b> b b .", ". . . . g> g", ". . . . y .", ". . . . y .", ". . . . y^ ."],
  ["t> t t t i t", "t t< yv p> p bv", ". pv y . i .", ". p y . i^ .", ". p y . . b", ". p y t> t t"],
  ["i i i g i< r", "r ov g g rv r", "y y y g r y<", "r o o> o o o", "r^ o g g^ r r", "g> o g^ g r r^"],
  [". . . . p .", "r> . r \\ p^ .", ". . . r . .", ". g> g r g .", ". . . r . .", ". . . . . ."],
  [". . . iv tv .", "i . . i t .", ". i> . . i .", "i . . . . .", "i t t i / .", "i^ . . i . ."],
  ["o b b b< . .", "o / i i bv i", "o i^ . . b .", "o^ ov . . b .", ". \\ . o o .", ". . . . b ."],
  ["r> r r r \\ p", ". y> y y r p", ". g . . r p", ". g b> b r p", ". g . . r p", ". g^ o> o r p^"],
  ["r gv r r r r r<", "k g g rv g< g k", "g g g g \\ g k", "k^ g gv r g^ g^ k", "r r r / . . k^", "r r g r r< . .", ". g g . . . ."],
  ["t t> t iv t t t", "t c p i p p p<", "p> c p i p p p", "t c / / l l l<", "t c i \\ l l l", "t^ c^ i c c c c<", "c> c i c c c c"],
  ["c / l . l l l", "c l . l . . .", "c^ l . l . . .", "c c c l c c c<", ". l . l^ . . .", "cv c> c c c c \\", "c l^ . . . . c"],
  [". rv . g . r .", ". r y> y y r .", ". r . g^ . r .", ". r b b b< r .", ". r . . . r .", ". \\ r r r / .", ". . . . . . ."],
  [". . t . t p tv", "yv p> t^ \\ t p t", "y . . p t p t", "t t t< p t p t", "y . . p t p t", "y . . p t p t", "y p p / t^ p^ t"],
  ["iv o> g o o o o", "y y g rv y y y<", "i r y> r y \\ i", "i i> i i \\ y i", "i r g r i y i", "i r g r i y i", "i r^ g^ r i y i^"],
  [". tv i> i i i i i", ". t i> i i i i i", ". t . . . . . .", ". \\ t t t t t t", "i> i i i i i i \\", "iv p p p p p p p<", "i . t> t t t t t", "i . . . . . . i"],
  [". . / g g \\ . .", ". . g . . g . .", "g> g / . . g . .", ". . r> r r g . .", ". . . . . \\ g \\", ". . . b b b< . g", ". . y> y y y . g", ". . . . . . . g"],
  ["l l l l l l l< .", "i i i . i \\ . .", "l l l l l l l< .", ". iv l> l l l l l", ". i . . . i . .", "l> i l l l l l l", ". i i> i iv / . .", ". i . . i . . ."],
  ["c t> t c t t t t", "y> y y c y i y p", "c pv / b< iv i i p", "c p b c i i i p", "c p b c i i i p", "b b / \\ c< i^ i p^", "c^ p p> p p p i p", "y> p y y y y i^ y"],
  ["k . . . k pv k .", "k p p p< p p p p<", "k . k> k / k k k<", "o> o o ov k p o o", "k^ . / / k p k gv", "g g o g g g< k g", ". p> o p k p k p", ". . o . k p k^ g"],
  ["\\ c t t t t t t<", "/ i< pv p p p p p<", "\\ i i i i i i i", "l c l l l l l< tv", "i> c p i i i i t", "l> c p l l l l t", "c> c^ p c c c c c", "l l p l l l l< t"],
  [". h . . . . b h", ". h bv . . bv b h", "h h^ h h h b b h<", ". . b . . b b^ h", "h> h b h h b h /", ". . b h> h h h h", ". . b . . b . .", ". . b . h> h \\ ."],
  [". . . / y \\ . . .", ". / y / . \\ y \\ .", ". y . . pv . . y .", "y> / . . p . . \\ y", ". . . . p . . . .", ". bv t> t p t p . bv", ". b . . p . p . b", ". b . . \\ p / . b", ". b . . . . . . b"],
  [". t . . t> t t t t", "y y y y< . . yv . .", ". t p> p p p p p p", ". t . . t> t t t t", ". t . . . . y . .", "p p p p p p< y . .", "p t p p p p p p< .", ". t^ . . . . y . .", "y y y y y . / . ."],
  ["o o o o o o o \\ iv", "o o k o< o> o iv / i", "rv y k y y y i y y<", "r g g g g g i g< i", "r o> k o o o i o o", "g g \\ k k k i k< i", "r k g k k k k k< i", "r y> g y y y i y i", "r y g^ y y y y y< i"],
  ["t p p p t . t> t t", "t p p p t iv . . .", "t p p p \\ t t t t<", "t p p^ p^ . i . . .", ". \\ p p< . i . . .", "i i i i i< i . . .", "t . . . . i . . .", "t^ p p p p p p p p<", "i . i i i / . . ."],
  ["/ o o o< . . . . .", "o . . / o o o o \\", "o . . o . . . . o", "o i> i o . . . . o", "o . . o . . / o /", "\\ o o / / k o . .", ". . . . k . \\ o o", ". . . . k^ . . . .", "g g g g< . . . . ."],
  [". k> k k k k \\ . hv", ". . . . . kv k . h", "h h h h< . k k . h", "h h h h h k h h< h", "kv / h kv h k k \\ h", "k h . k . k . h h", "k h . k . k . h h", "k h^ . k . . . h h", "k . . k . k k h h"],
  ["y c h> h h l h y i", "y c bv p p l p p< i", "y c b t> t l t t t", "y t b t t t t< y i", "y p b p p p p p< i", "b b / l l< l cv y i", "y^ \\ c c c< l c y i^", "t> t t t t l^ t y t", "t> t l t t t c y^ t"],
  ["k k k pv g k k rv k< k", "o o o p g o< . r . k", ". p> p p g p p r p p", "p p p p g \\ . r . k", "o o o o g p o o o< k", ". o> o o \\ \\ p p< . k", ". g> g g g g g r g k", "g> g g g o \\ g< r . k", ". . p> p o g p r p k^", "o> o o o o g o r o o"],
  [". . t . .", ". . t . cv", "t> t | . c", ". . t . c", "y> y t y ."],
  ["o o - o i", ". . o^ . i", "o o o o< i", "b> b b b .", ". . . . i^"],
  ["y y y tv t y<", "t . . . . .", "t . pv t t .", "| . p . . t<", "t . p t t .", ". . p t t^ ."],
  ["yv o o y - o", "y . . y o i", "i i< . y . i", ". . . y o^ i", ". . . y^ i> |", "r r r r r< i"],
  ["t t p t t t< .", "i i< p pv l . .", "i i p i l - i", ". . p^ p l i^ .", "p . p - l p p", "i> i i lv i i i", ". . . l l^ . ."],
  [". . . p . . .", ". y> y p y . .", ". . . p . r .", "p> p p | . r .", ". . . p . r .", "b b b< p . r .", ". . . p . r^ ."],
  ["g y> y y p y p y y", "g g g gv p g g g< .", "g . o> g p o o y o", "o o o o p o o - o", "o o pv o o< g> p^ o^ g", "p p p g p p p y p<", "g g g g g - g g .", "g^ . p g p^ g^ . y^ .", ". . p g . . . . ."],
  [". . p . . . bv .", "r> r p r r . b .", ". . p . . . b .", "p> p | . . . b .", ". . p . . . b .", ". y p y y - b y", ". . p . . y . .", ". . . . . y^ . ."],
  ["rv g g> g r g ov g g p", "t g t - t t o t t t", "o | g< o o o - o o .", "p g p t^ p p p p p< p", "r g g g g g g g< rv p", "r g . t r g> g g g p", "r g g> g r g g g g g", "r g . t> r t t t t p^", "r g . t^ r^ . . . r .", "r . o> o o o o o r o"],
  [". t p tv r y y . . .", "t t t - t t t t . .", "p> t p t r p p p p p", "t t p t r y t t t t<", "p p p t p p p p< tv .", "t> p> | | r y y> y t y", "r r p t r^ r r< tv t .", "r t p t r y r r r< .", ". t^ p t . y y^ t t .", ". . . t r> y^ r t t r"],
  ["o r> tv r r r r r r tv", "o p> t r p p p p p t", "r> ov r | r< pv r r r t", "o o t r r p r r r< t", "o o p> r p p p p p p", "o o t r . \\ p \\ . t", "o^ o t \\ r r r p r .", ". p> p p p p p p ov t", "o o o o o o o o - o", ". o t . . . . p . t"]
];
const CONTINUATION_LEVELS = [
  ["c> c c c c c c c c \\", "c / y y y y y y yv c", "c y / p p p p \\ y c", "c y p t> t \\ . p y c", "c y p . . t . p y c", "c y p t t - t p y c", "c y p . . . . p y c", "c y p> p p p p / y c", "c \\ y y y y y y / c", "\\ c c c c c c c c /"],
  ["ov g> g g t y o g g", "o r o tv t y o . tv", "o r o t t y | o< t", "o r o \\ t t o t t", "o r o gv t \\ o rv y<", "o r o g t / r - r", "o r y> y y r o y t", "r r^ r r< t^ r o . t", "o t> o^ g t r o t t"],
  [". . y> y k gv y y y", "y y ov y y g y< k k", ". . o> y \\ g k< k k", "k - k y k k k k k", "k k^ k y o g k< k k^", "o o / y o y \\ k .", ". . y> | o g y k^ .", ". . y y o g y . .", ". . y y o g y^ . ."],
  ["y y r y rv y o y y<", "o r r g r o< o rv .", ". r g> g r \\ o r .", "o o r g \\ r o r r", "o> o r g / \\ o g g", "gv r r o> | k< | r kv", "o r^ r^ g k k o o o<", "g . . g k k . r k", "k> k k g^ k k . r k"],
  ["kv o g . . . . . y", "k o g . . kv g> kv g", "o> | g / k / g g g", "k o g k . g yv k y", "k o g k / o o o o", "k o \\ k o g< o> k o", "y> y y k o g y y y", "k o . o> | g y k y", "k o o k o g^ o o< y^"],
  ["k k k k k ov k< k . .", "o o ov o o - o o o .", "b k o k k k k k< kv ov", "b t> o kv t bv t k t t", "b b b b \\ b yv k k o", "b ov o k \\ / \\ k k y", "b^ o o k o> y y k^ k o", "y y y k y y^ - y . .", "t> t o k t t t t k t", ". o o k . . . . k o"],
  [". . . . . bv r . .", ". . . / r b | . .", "g \\ . r . b r . .", "r> g r / . \\ b \\ .", ". g . . . . . b .", ". \\ g \\ . / k b k<", ". . . g . k . \\ b", ". . / k k / . . .", ". . k g^ . . . . ."],
  ["t t t t t t t . g t<", "k> k kv kv t k k . k k", "k k k - k k \\ o g .", "o> o k o t o k o g o", "g g g \\ t / / o g tv", "o k t> \\ t k g g< g^ t", "o^ k^ k t | . t< o . t", ". t k k> t . k o k t", "g> t k t t . g | o o<", ". t^ k t . . . o . t"],
  ["g> g g y p o rv y . g", "y y yv y y o r y r y<", ". . y y p o r y r .", "o o y y o o \\ y r r", ". . \\ / p o> / g r g<", "p> gv ov gv p o g y r p", "g g g - g o g g g .", "p p p p p^ o^ g y^ r p<", "g g o g g g< g r> | .", "y> g o y y y g y r y"],
  [". . bv . rv . p", ". . b . r . p", "b> b b! b b b b", ". . b . r . p", "g> g b g r g g", ". . b . r . p", "o o b o r o< p^"],
  ["r r r k r r r< k .", ". . l k . kv . k .", "t t t t t k t t t<", ". . l k / l l l l", ". . l k^ l k . k .", "l> l l! l / \\ k k k", "t> t l^ t t t t t t", ". r> r r r r r k r", ". . . k> k k k k^ k"],
  ["k g gv g y k g g< .", "k g g! g< y k yv . .", "t t g t y t t< . .", "k k g . tv k^ y . .", "k k k> k t k k \\ .", "k k g / - t t . .", "k k^ g t y . y k .", "k^ . g t y . y k .", "t t t / \\ y y! y< ."],
  ["y t y y y y y< p tv", "t t tv h t p t p t", "y t y y y p y y y<", "h h h h! h h - h h", "t t t h t p h^ p t", "t t t h t p t p t", "t t! t h t p t p t", "t t tv h^ t p t p t", "t^ \\ / . t^ p^ t^ p^ t"],
  ["t> t t t t t t \\", ". . y y y y y< t", "/ t t t t t t /", "t k> k k k k \\ .", "\\ t t t t t t \\", ". g g g g g g< t", "/ t! t t t t t /", "t t^ o o o o< k ."],
  [". p . p t gv o t .", ". p . p t g o t gv", "p p! p p t g p p< g", "g g ov | p< / h h h", "t t t p \\ t t< t g", ". p! p / h / g< t^ g", "ov p o h t g o^ . g", "p p! o h^ t^ p p p p<", "o p^ o o> o g o o g"],
  ["i> nv i i / o o i o", "i n i i o i i< i r", "r r r r r r r< i r", "rv n i i o i< . i r", "r n . . o . . i r", "r o> o o o^ o o i o", "r n r r r r r< i^ r", "n n! n - n n n r> /", "k k! k! n^ k k< k k k<"],
  ["r r t> t t t t / \\", "r r pv l av r> r t t", "r> r r l r rv r t t", "t t t l t t t< t^ pv", "r t> l> | t r t t p", "r r p l a \\ r r r", "r^ r^ r> l r r r r p", ". . a> l a! a a a p", "t> t t> . t t! t t! p"],
  ["m> m m m m m m \\", ". o> o o o o o m", "/ m m m m \\ m> m!", "m . / m . m . m", "m l> m l l m . m", "m . \\ m m / . m", "m b b b b b b< m", "\\ m m m m m m /"],
  ["y> y y o> o o o o y o", "kv . tv tv / ov k k k k", "y kv y y k^ o y y< y tv", "k k t y> g o y kv y t", "\\ k k k g o k k y k", "g k g g g! g g g< y t", "k! / k k k k k - k .", "k . y> y g o y yv y^ t", "k^ y y y y y y - y .", ". . t t \\ o g g< . t"],
  ["y b p> p y b yv p p p", "g> b g g g g g g g g", "p b p p y b y p p p<", "p> b p p p p y p p p", "r r r r \\ y y y y \\", "y \\ b b r b b< . . y", "p> p p p r b y p p y", "y! y y r> | b y y y< y^", "y . p> p r b^ y p p p", "y^ . . . r . y . . ."],
  ["p . / o o o o o i o", "p p o pv p p g p i p<", "p av o^ p . o g . | i<", "p a . p . o g . i .", "o> o o o o o g ov i o", "p a o p o o g o i o<", "p a! a p a a g o i a<", "p^ g g g g g \\ g i \\", "p> a p p p o g> g i /", ". a . p . o^ g^ o . ."],
  ["k> k k rv r k k l k k", "nv i kv r r kv i< l k rv", "n . k r r k lv l k r", "r rv r r r r r r r /", "n \\ r r / k> l k / .", "n . k r . k \\ l! l l", "n i k r rv k i l i i<", "n! n k n r k n l n n<", "r r r r - r r l r .", "n r> k r r k r l^ r r"],
  ["y y y y y k y< k r k", ". . y> y y k y y y y", "r r r r r k r< k r k", "y y y y tv y y< k r k", "t t t t t! k^ t< k^ r^ k^", "r> r r b> \\ t t t kv t", "b b b b - b \\ . k .", ". k> k k! \\ r b r r r", "y> y y k^ y y b y k y", ". . . . k . . . k ."],
  ["av . . . . . / a \\ .", "a tv p> p p p a . a .", "a t / a \\ . a . a .", "a t a . a y a yv a .", "a t a . a y a y a .", "a t a . a \\ a / a .", "\\ a / . \\ a / . a .", ". . . rv . . . . a .", ". r r r! r r r r< a .", ". . . . . . . . . ."],
  ["t> t! . t t m c b t t", "y t . . bv m c b / \\", "y^ t . yv b m c b y y", ". c> t c b m c! c \\ y", "bv t t y b m c b c y", "b t t y b m c b c y", "y y t / m m! m m m y^", "b t^ t m b c> / b b b", "b y | m^ t m^ t< b^ c y<", "b y> t y t> t b^ t t t"],
  ["rv . b> t b! r rv b b b", "r . y t b r r rv . .", "t> t t t! b t t r t t", "k> rv k k k k k k k k", "r r y^ t b r r r kv kv", "r! / rv | \\ b b r b b<", "r . r t> / r r r k k", "y y y t y r y r y y<", "r . r t . r r r k k", "r . r t . r^ r r k k"],
  ["b . hv o / m o o o o<", "b hv h o o m / b b b", "b h m> o tv m! b m b b", "t t t t t | m< t b t<", "b h h! o t m b h< b b", "b^ h! / o o m b^ o o o", "t t o^ t / m o o b o<", ". t> t o o m t t b t", "o o o o^ o . o o< b^ b^", "o h o o o . o o< . ."],
  [". . . / y \\ . . . .", "/ \\ . y . y . / \\ .", "y y . y . y . y y .", "y \\ y / . \\ y / y .", "y . . . rv . . . y .", "y . . . r . . . y .", "y^ n> n n n n n n y .", ". t t t t t t! t t< .", ". . . . . . t^ . . .", ". . . . . . . . . ."],
  ["p p t p p p p p< . t t .", "b> b t o> o o o \\ . t t bv", "b b b b b b b o t b< t b", "t> t t t ov t tv o t! t t t", "p p t p< \\ o o o o o o o", "t> t / o o o< t lv t t t b", "o> o o! o o o t l t t t o", "b b o b b b b l t t b b<", "/ b o b b< . t l t t t b", "l l l l l - l l! t l . .", "b l o l l l^ l / | t^ t^ b", "b o> o o o o t t^ t o o b"],
  ["o g g gv g g< . b b .", "o g bv g / b k b b b", "o g b g b . k b b .", "o g g / b i k i i i", "o g> g i b^ g k g g g", "t> t t i gv t k t b t", "o g b i g . k b b .", "o^ g b i^ g . 3 k< k .", "t> g t t \\ g k g b g", "t g^ t t / . . b^ b^ ."],
  ["k . b> b b i i b b b", "b> b b b b i b b b b", "o ov o o< k> k k k b k", "i> i i i gv i / o o o", "k o / o o \\ o i b^ i<", "o o o o o / o . . .", "k^ o o^ / g b b 3 b b", "g g g g - g g g . .", "t> o t b t t o b^ t t", "k> o k b k k o^ b k k"],
  [". i / y< \\ \\ / n n o", ". i y> y y o y y y y", "/ i< y i i< o 3 n< n o", "i i> i i i o^ i i i o", "i i y . . ov n . o o", "p p p p p - n p . o", "r r y r r p n r r< o", "i i y o o p^ n o< o o^", "i i^ y o o o . o o o<", "o o o o o / . o o^ o<"],
  ["kv / tv k< i r r r b yv", "b \\ t k i k k k k k", "b b t b i b b r b< y", "r b r r r r r< r b y", "i b t i> 3 r r | r< y", "b> / t k< i r^ r r b y", "t t / t> i t r r b t", "k b b b i b r^ r b< y", "k k . r> . r r . b r", "k y y y . y y . b^ y<"],
  [". . . h . y . . . .", ". . . h^ p y^ . . . .", "/ p \\ . pv . / p \\ .", "p . p . p . p . p .", "p . \\ p 3 p / . p .", "p . . . tv . . . p .", "p . . . t . . . p .", "\\ p \\ . t . / p / .", ". . p . t . p . . .", ". . . . . . . . . ."],
  ["r o r r \\ / b b o b", "o o o o o b^ o o< ov .", "g o g g r! g g g< o kv", "k o k k k k k< o 3 o", ". b b b \\ r r< r \\ k", ". b b> b 3 r . r> / gv", ". o k> o b k k g k k", "o> o^ o o . o o g o o", "t t t t t - t t . .", "r> r r o^ t> / g g^ g< g"],
  ["g> gv a r g k r . / g", "/ \\ g g g g g y g g", "r> r av r gv r r y g r", "g g^ a r g k r y g rv", "a a 3 a a a . y g .", "g p p p g p p< y g r", "g g g g / k r^ y g^ r", "g r r r r k y> | r r<", "g r r r^ r k r y r r<", "g r r r r k^ r . r< r"],
  ["g g g g b p i g< y y<", "p i> bv i b p i! i i i", "r r b r b r< i gv . pv", "p^ / r r r \\ p p \\ p", "bv r^ b g> b r i g p g", "b p b p b yv p p< p^ p", "y y y y y / | i< p p", "p p p p b^ p< i y y< p", "b p b p> p 3 i g . p", "b p p p p< \\ . p p ."],
  [". . . . . . . . . .", ". . / a a a a a a< .", ". . a . k> k k k . .", ". . a . . o . . . .", ". . a . . ov . . . .", ". o a o o 3 o o o .", ". . a . . . . . . .", ". . a p p p p< . . .", ". . \\ a a a a a a .", ". . . . . . . . . ."],
  ["i / l p t i< iv \\ o o o \\", "i t lv t t t t t< i i< k o^", "l l 3 l l l l l . . k l!", "i t t> t 3 o i i> i t k l", "i p p p t p p p p t k p<", "i o o p t o o o o< t k l", "i^ i pv p t o^ i k> k k / l", "i> i i p t i i i i t i l", ". i p p^ . . i l> l t l /", "k i k k . k i k< t t t t<", "k i k k . k i k k t k< .", "p i / i i i i i i t^ i i<"],
  ["/ i> \\ i iv / / b b . .", "r r i r i r b r r n r<", "i iv i i i i b r y n .", "i k i k i k b k k< n .", "i^ i i i i i b r y n .", ". i i i b> b | r y n .", ". . . . . . . . n 4 n", "kv i i i^ i i b r^ y n .", "\\ k k k i k . k k n^ k", ". i r> r r r r r r n r", "i i i i i i^ . i y^ . i<"],
  ["p t y p rv g p p g p p<", "/ \\ t \\ r g . r g g r", "b^ b y t r g . r g g r", "g b g t r 4 g g . . .", "g b g> t r / g g g g g", "r b r r / r r r g r r<", ". b y t r g . r^ | g< r", ". b y t r g y> y g y y", "g b y t^ r g^ g g g g g<", "b / y r r r r r r r r<", "g g y^ g g g g g< g g^ r^"],
  ["g> g g y> y y gv y kv y y", ". . o> o o o g o k o y", "i i i i - i i . k . .", "yv . iv o> i o o o k o o", "y o> o o o \\ g gv k . y", "y o> \\ i / \\ o g o o o", "k> k k k \\ g g / \\ k k", ". . a a a g g 4 a< a y", "y k k k k g g a a k< y", "y y> y y y g y y y y y^", "y . o y> k g g a a y y"],
  ["ov o> t o . p o o o o o", "o pv t tv p pv r> r r tv ov", "i i t i p p i i i t i<", "o p t t p> p p rv p t p", "i i t i p p i r i< t o", ". g t g g g g g g - g", "/ r r r< t t tv t g> / o", "r . t p 4 / i i< . . o", "r p t^ p> p i p p p p p", "r p . t p \\ i i i i i", "t t t t t t / r . . o"],
  [". . . . . . . . . . .", ". . a . . . . . . . .", ". . a . . / a a a a .", ". . a . . a . . . . .", ". . a . . a . . . . .", ". . \\ a> a 4 a a \\ . .", ". r> r r r a r r a r .", ". . . . . a . . a . .", ". a a a a / . . a . .", ". . . . . . . . a . .", ". . . . . . . . . . ."],
  [". b> b i tv i b b b b b", "t t b i t t t t! t< t t<", "ov . \\ i b b b< i i i i<", "o t> t t \\ t t t t t t", "o . b> i t i b gv b b b", "o \\ . \\ t i i g i< / m", "o b g> g ov i g g g m g", "o b^ . . o i . g . mv .", "o o o bv / . . m m 4 m", "o g g< b> . b b g b m b", "g> g g b . i^ g \\ g m g"],
  [". . p . . . . . y . .", ". . p . . . . . y . .", "p p> 4 p p . . . . . .", ". . p . . y> y y | . .", ". . p . cv . . t y . .", ". . . c> c! c . t . . .", "g g< . . c . . t y . .", ". . . . . t t> 3 . . .", "r> r r r \\ . . t . . .", ". . . . r . . t . . .", ". . . . . . . . . . ."],
  ["r r \\ r t i> i r i i t", "p! / / r t r r< r y r t", "g r g g g g g< r y r^ t", "p^ r i> r t i i i i i i", "p r r r t r p r y t t", "p r^ r r t . y r 4 y t", "\\ p< p p p p p p p< t^ t", "g g g r g< r p r^ y^ . t^", "t t r r^ t^ r^ p^ t< y . .", ". . r . i> i i i y i i", "g g r g g< r r r< . . ."],
  ["p i> . i i y h pv g . g g", "p / k k iv y k k< g i g g", "y \\ k k \\ i i i i i g i", "p y y / iv y h! yv h i g h", "p y i i< y y y - y y y y", "p \\ y< h i y 4 h h< i g h", "p . y h i y^ h p g i g g", "p^ iv y h i i h p g^ i g^ g", "y y yv h i i . p y< i y g^", ". i y h^ y> i y y y y / g", ". y 4 y i \\ i i i< 3 i< i", "k k y k i . . k k i k< g^"],
  ["k k k k k k i k< i i k g", "y y g y g iv i y< g g g< g", "gv y g y< g i i rv i i k g", "g . g . g i i r i i k g", "g . g gv g \\ / i< i^ i^ k g", "k k k \\ \\ g g g< k k> 4 k", "g iv g k g / i o< . / o o", "g i g kv g g> i g g o g g", ". k k 3 k o \\ i i i i i", "y i y y y o . y< . o k g^", "g i g^ . g o . r o> o^ k o", "g i o o< r> o r r! r r r r"],
  ["r r . r i r< / g g g g g<", "i> i o> o o o g r o o o t", "g> g . g o> o g o o o o o", "gv r o r i r rv r r r r< t", "g iv o . i . r r k . t> /", "g i o o o tv o o o< tv i tv", "g i 3 o i t r r o o o< o", "g i r r r t / r^ o o o< t", "t i t t t / o t k t i t", "g i o . i k o k 4 k< k k", "g i . o i^ o / g< k t i t", "g g g g g g / t^ k t i^ t"]
];
const CAMPAIGN_COLORS = {"o": "orange", "b": "blue", "g": "green", "p": "purple", "r": "red", "y": "yellow", "k": "pink", "t": "teal", "i": "indigo", "l": "lime", "c": "coral", "h": "cocoa", "a": "aqua", "m": "magenta", "n": "mint"};
const CAMPAIGN_LEVEL_COUNT = CAMPAIGN_LEVELS.length + CONTINUATION_LEVELS.length;

function getLevelRows(number) {
  return CAMPAIGN_LEVELS[number - 1] ?? CONTINUATION_LEVELS[number - CAMPAIGN_LEVELS.length - 1];
}

function getLevelSize(number) {
  return getLevelRows(number)?.length ?? 6;
}

function getLevel(number) {
  const rows = getLevelRows(number);
  if (!rows) return generatedLevel(number);
  return decodeCampaignRows(rows, CAMPAIGN_COLORS);
}

const clone = value => JSON.parse(JSON.stringify(value));

const GAME_VERSION = "3.53-international.8";
const CAMPAIGN_LEVEL_KEY = "bp_campaign_progress";
const RANDOM_LEVEL_KEY = "bp_campaign_completed_random_level";
const COMPLETED_LEVELS_KEY = "bp_campaign_release_completed";
const victoryDeckFallback = {};

let campaignLevel = restoreCampaignLevel();
let { number: levelNumber, mode: levelMode } = savedLevel();
saveCampaignLevel();
let boardSize = getLevelSize(levelNumber);
let grid = getLevel(levelNumber);
let initial = clone(grid);
let lives = 3;
let undoStack = [];
let hintIndex = -1;
let isAnimating = false;
let activeMoveCount = 0;
let levelCompleted = false;
let pendingGameOver = false;
const STEP_MS = 155;
const POP_MS = 260;

const board = document.getElementById("board");
board.addEventListener("click", event => {
  const button = event.target.closest(".cell");
  if (button?.parentElement !== board) return;
  const index = Number(button.dataset.i);
  if (!platformBlocksGame()) launchArrow(index);
});
function previewSelectedArrow(event) {
  const button = event.target.closest(".cell[data-arrow]");
  if (button?.parentElement === board) previewTripleSplitters(routeHint?.index ?? Number(button.dataset.i), true);
}
board.addEventListener("pointerover", previewSelectedArrow);
board.addEventListener("pointerdown", previewSelectedArrow);
board.addEventListener("focusin", previewSelectedArrow);
board.addEventListener("pointerleave", () => {
  const preferred = tutorialAction?.dataset.i;
  previewTripleSplitters(routeHint?.index ?? (preferred === undefined ? hintIndex : Number(preferred)));
});
const fxLayer = document.getElementById("fxLayer");
const boardWrap = document.querySelector(".board-wrap");
let onHomeScreen = false;
let deferredResult = null;
let darkMode = false;
document.body.classList.remove("dark");

let language = startupLocale();
let pendingLanguageChoice = language;
let numberFormat = new Intl.NumberFormat(language);
let currentMessage = { key: "pickArrow", args: {} };
const formatNumber = value => numberFormat.format(value);

function local(key, lang = language, args = {}) {
  const value = messages[lang][key];
  if (value === undefined) throw new Error(`Missing interface text: ${lang}/${key}`);
  return value.replace(/\{(\w+)\}/g, (_, name) => typeof args[name] === "number"
    ? new Intl.NumberFormat(lang).format(args[name]) : String(args[name] ?? ""));
}

function t(key, args) { return local(key, language, args); }

function setLocalizedText(element, key) {
  element.dataset.l10n = key;
  element.textContent = t(key);
}

function setMessage(key, args = {}) {
  currentMessage = { key, args };
  document.getElementById("message").textContent = t(key, args);
}

function setLanguage(next, remember = true) {
  language = localeFor(next);
  numberFormat = new Intl.NumberFormat(language);
  if (remember) gameStorage.setItem("bp_lang", language);
  applyLanguage();
  if (!isAnimating) render();
  else if (!tutorial.hidden) localizeTutorial(tutorialLesson);
}

function applyLanguage() {
  document.documentElement.lang = language;
  for (const element of document.querySelectorAll("[data-l10n]")) element.textContent = t(element.dataset.l10n);
  for (const element of document.querySelectorAll("[data-l10n-label]")) {
    element.setAttribute("aria-label", t(element.dataset.l10nLabel));
    if (element.hasAttribute("title")) element.title = t(element.dataset.l10nLabel);
  }
  const current = document.getElementById("languageCurrent");
  current.lang = language;
  current.textContent = localeNames[language];
  setMessage(currentMessage.key, currentMessage.args);
  updateLevelLabels();
  updateLanguageChoices();
  updateSoundButton();
  updateChestControls();
  document.getElementById("hearts").setAttribute("aria-label", t("livesCount", { count: lives }));
  if (chestDialog.open) localizeChest(chestDialog.dataset.state,
    chestRewards.find(item => item.id === chestDialog.dataset.reward));
  const pet = document.getElementById("victoryPet");
  pet.alt = t(pet.dataset.poseType === "defeat" ? "defeatPet" : "victoryPet");
  updateRewardOffer();
}

function updateIllustratedLanguagePicker() {
  const picker = document.getElementById("languageOverlay");
  for (const option of picker.querySelectorAll("[data-language]")) {
    const selected = option.dataset.language === pendingLanguageChoice;
    option.setAttribute("aria-checked", String(selected));
    option.tabIndex = selected ? 0 : -1;
  }
}

function localizeTutorial(lesson) {
  const key = tutorialTarget === tutorialAction && lesson.tileKind && lesson.pressArrow
    ? "tapHighlighted" : lesson.note ?? `lesson_${lesson.key}`;
  tutorialCopy.textContent = t(key);
  tutorialShotCopy.textContent = tutorialShot.hidden ? "" : t("tapHighlighted");
  tutorialOkay.textContent = t("gotIt");
}

function updateLanguageChoices() { updateIllustratedLanguagePicker(); }

function updateMenuInert() {
  const settings = document.getElementById("settingsOverlay");
  const picker = document.getElementById("languageOverlay");
  const dialogOpen = !settings.hidden || !picker.hidden;
  document.getElementById("homeScreen").inert = dialogOpen;
  document.getElementById("gameScreen").inert = dialogOpen;
  settings.inert = !picker.hidden;
}

function openLanguageDialog() {
  const picker = document.getElementById("languageOverlay");
  pendingLanguageChoice = language;
  picker.hidden = false;
  updateIllustratedLanguagePicker();
  updateMenuInert();
  picker.querySelector('[aria-checked="true"]')?.focus();
}

function closeLanguageDialog() {
  document.getElementById("languageOverlay").hidden = true;
  pendingLanguageChoice = language;
  updateIllustratedLanguagePicker();
  updateMenuInert();
  if (!document.getElementById("settingsOverlay").hidden) document.getElementById("languageOpenButton").focus();
}

function chooseLanguage(next) {
  pendingLanguageChoice = localeFor(next);
  updateIllustratedLanguagePicker();
  document.querySelector(`[data-language="${pendingLanguageChoice}"]`)?.focus({ preventScroll: true });
}

function confirmLanguage() {
  setLanguage(pendingLanguageChoice);
  closeLanguageDialog();
}

document.addEventListener("keydown", event => {
  const picker = document.getElementById("languageOverlay");
  const settings = document.getElementById("settingsOverlay");
  if (picker.hidden && settings.hidden) return;
  if (event.key === "Escape") {
    event.preventDefault();
    if (picker.hidden) closeSettings();
    else closeLanguageDialog();
  }
  if (!picker.hidden && event.target.matches("[data-language]")) {
    const options = Object.keys(localeNames);
    const position = options.indexOf(pendingLanguageChoice);
    const delta = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[event.key];
    if (delta) {
      event.preventDefault();
      chooseLanguage(options[(position + delta + options.length) % options.length]);
    }
  }
  if (event.key !== "Tab") return;
  const active = picker.hidden ? settings : picker;
  const items = [...active.querySelectorAll("button:not([disabled])")]
    .filter(button => button.tabIndex >= 0 && button.getClientRects().length);
  if (event.shiftKey && document.activeElement === items[0]) {
    event.preventDefault();
    items.at(-1)?.focus();
  } else if (!event.shiftKey && document.activeElement === items.at(-1)) {
    event.preventDefault();
    items[0]?.focus();
  }
});

const audioFiles = {
  "chestAppear": "assets/357c59e8e74cb1f2cac4d63c.mp3",
  "chestReward": "assets/2b5e94817a6a47dfc95ad064.mp3",
  "campaignFinale": "assets/dab1ab29d384d33be17c06ed.mp3",
  "ice": "assets/afa33117ce27b98ea2738636.mp3",
  "hint": "assets/43cc0b8b3200b9b236aff24a.mp3",
  "click": "assets/5489b4ee96986bc1a81933ff.mp3",
  "wrong": "assets/37a260d49a81abc9e562a3a1.mp3",
  "bounce": "assets/0ca3d7a65c81799927140a95.mp3",
  "lose": "assets/3adc06a4e7ad2a966c932f44.mp3",
  "win": "assets/f31efc9f074b1da87f9b73ba.mp3",
  "music": "assets/4d17c3dfa2362a9b459fb97c.mp3",
  "pop1": "assets/5eb05f8900fe0d3ae65ff521.mp3",
  "pop2": "assets/6ced0d07654b360b9a6e24a3.mp3",
  "pop3": "assets/c967109641fb48bf9b6fe1b2.mp3",
  "pop4": "assets/292bcff82d94d3fc8dcd076b.mp3",
  "pop5": "assets/9ba647b80065905c838af4bf.mp3"
};
const soundVolumes = {
  chestAppear: .68,
  chestReward: .68,
  campaignFinale: .72,
  music: .26,
  hint: .64,
  click: .53,
  wrong: .49,
  bounce: .42,
  ice: .40,
  win: .55,
  lose: .56,
  pop1: .67,
  pop2: .69,
  pop3: .70,
  pop4: .71,
  pop5: .72,
};

let soundEnabled = gameStorage.getItem("bp_sound") !== "off";
let audioContext = null;
let audioMaster = null;
let music = null;
let musicPending = null;
let musicOffset = 0;
let musicStartedAt = 0;
let audioRevision = 0;
let resultSoundRevision = 0;
const soundBuffers = new Map();
const activeSounds = new Map();

function updateSoundButton() {
  const button = document.getElementById("soundToggle");
  button.textContent = soundEnabled ? t("soundOn") : t("soundOff");
  button.setAttribute("aria-pressed", String(soundEnabled));
}

function decodeGameSound(name) {
  if (!soundBuffers.has(name)) {
    const loading = fetch(audioFiles[name])
      .then(response => response.arrayBuffer())
      .then(data => audioContext.decodeAudioData(data))
      .catch(error => {
        soundBuffers.delete(name);
        console.warn("Не удалось загрузить звук", name, error);
        return null;
      });
    soundBuffers.set(name, loading);
  }
  return soundBuffers.get(name);
}

function makeSound(buffer, name) {
  const source = audioContext.createBufferSource();
  const gain = audioContext.createGain();
  source.buffer = buffer;
  gain.gain.value = soundVolumes[name];
  source.connect(gain);
  gain.connect(audioMaster);
  const voice = { source, gain, name };
  source.onended = () => {
    activeSounds.delete(source);
    source.disconnect();
    gain.disconnect();
  };
  return voice;
}

function fadeOutSound({ source, gain }) {
  const now = audioContext.currentTime;
  gain.gain.cancelScheduledValues(now);
  gain.gain.setTargetAtTime(0, now, .004);
  source.stop(now + .024);
}

function startGameMusic() {
  if (music || musicPending) return;
  const request = decodeGameSound("music");
  const revision = audioRevision;
  musicPending = request;
  request.then(buffer => {
    if (musicPending !== request || revision !== audioRevision) return;
    musicPending = null;
    if (!buffer || !soundEnabled) return;
    music = makeSound(buffer, "music");
    const now = audioContext.currentTime;
    music.source.loop = true;
    music.gain.gain.setValueAtTime(0, now);
    music.gain.gain.setTargetAtTime(soundVolumes.music, now, .018);
    musicStartedAt = now;
    music.source.start(now, musicOffset);
  });
}

function ensureGameAudio() {
  if (!soundEnabled || platformBlocksGame() || platform.muted) return false;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return false;
  if (!audioContext) {
    audioContext = new AudioContextClass();
    audioMaster = audioContext.createGain();
    audioMaster.gain.value = .87;
    const limiter = audioContext.createDynamicsCompressor();
    limiter.threshold.value = -8;
    limiter.knee.value = 8;
    limiter.ratio.value = 4;
    limiter.attack.value = .003;
    limiter.release.value = .12;
    audioMaster.connect(limiter).connect(audioContext.destination);
    for (const name of Object.keys(audioFiles)) {
      if (name === "pop1" || name === "click" || name === "wrong") decodeGameSound(name);
    }
  }
  if (audioContext.state !== "running") audioContext.resume().catch(() => {});
  startGameMusic();
  return true;
}

function isResultSound(name) {
  return name === "win" || name === "lose" || name === "chestAppear" || name === "campaignFinale";
}

async function playGameSound(name) {
  if (!ensureGameAudio()) return;
  const revision = audioRevision;
  const resultRevision = resultSoundRevision;
  const buffer = await decodeGameSound(name);
  if (!buffer || revision !== audioRevision || !soundEnabled) return;
  if (isResultSound(name) && resultRevision !== resultSoundRevision) return;
  if (name === "wrong" || name === "bounce" || name === "hint") {
    for (const active of activeSounds.values()) {
      if (active.name === name) fadeOutSound(active);
    }
  }
  const voice = makeSound(buffer, name);
  activeSounds.set(voice.source, voice);
  voice.source.start();
}

function stopResultSounds() {
  resultSoundRevision++;
  for (const voice of activeSounds.values()) {
    if (isResultSound(voice.name)) fadeOutSound(voice);
  }
}

function muteGameAudio() {
  audioRevision++;
  musicPending = null;
  if (music) {
    musicOffset = (musicOffset + audioContext.currentTime - musicStartedAt) % music.source.buffer.duration;
    fadeOutSound(music);
    music = null;
  }
  for (const voice of activeSounds.values()) fadeOutSound(voice);
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  gameStorage.setItem("bp_sound", soundEnabled ? "on" : "off");
  if (soundEnabled) playGameSound("click");
  else muteGameAudio();
  updateSoundButton();
}

document.addEventListener("click", event => {
  const button = event.target.closest?.("button");
  if (!button || button.disabled || button.matches(".cell, #soundToggle, #hintButton")) return;
  if (button.id === "homeChestButton") return;
  playGameSound("click");
}, { capture: true });


function arrowSvgMarkup() {
  // Одна и та же широкая, мягко закруглённая стрелка для всех цветов и направлений.
  return `<svg class="arrow-svg" viewBox="0 0 100 100" aria-hidden="true">
    <path class="arrow-body" d="M12 34 Q12 27 20 27 H54 V14 Q54 5 62 11 L92 43 Q98 50 92 57 L62 89 Q54 95 54 86 V73 H20 Q12 73 12 66 Z"/>
    <path class="arrow-highlight" d="M21 34 H51 Q61 34 61 25 M62 17 L86 44"/>
  </svg>`;
}

function splitterArrows(axis, incoming) {
  const directions = axis ? splitDirections({axis}, incoming) : Object.keys(DIRS);
  const angles = { up: 0, right: 90, down: 180, left: 270 };
  return directions.map(dir =>
    `<path data-direction="${dir}" transform="rotate(${angles[dir]} 50 50)" d="M46 36 V28 H39 L50 14 L61 28 H54 V36 Z"`
    + ` fill="#82553d" stroke="#fff5ec" stroke-width="2.7" stroke-linejoin="round"/>`).join("");
}

function splitterMarkup(axis) {
  return `<span class="rope splitter"><svg class="splitter-symbol" viewBox="0 0 100 100" aria-hidden="true">
    <g class="splitter-outlets" data-incoming="right">${splitterArrows(axis, "right")}</g>
    <circle cx="50" cy="50" r="11" fill="#e7d9ca" stroke="#79533e" stroke-width="2.6"/>
    <circle cx="49" cy="48.5" r="7.5" fill="#fffdfa"/>
  </svg></span>`;
}

function orientTripleSplitter(cell, incoming) {
  const outlets = cell?.querySelector(".splitter-outlets");
  if (!outlets || outlets.dataset.incoming === incoming) return;
  outlets.dataset.incoming = incoming;
  outlets.innerHTML = splitterArrows("triple", incoming);
}

function previewTripleSplitters(preferred = hintIndex, onlySelected = false) {
  if (isAnimating || !grid.some(cell => cell?.axis === "triple")) return;
  const indices = onlySelected ? [] : grid.flatMap((cell, index) =>
    cell?.type === "arrow" && index !== preferred ? [index] : []);
  if (grid[preferred]?.type === "arrow") indices.unshift(preferred);
  const oriented = new Set();
  for (const index of indices) {
    const plan = buildArrowPlan(index, grid[index]);
    if (!isSuccessfulShot(plan)) continue;
    for (const segment of shotSegments(plan.main)) {
      for (const point of segment.points) {
        if (point.kind !== "split" || point.axis !== "triple" || oriented.has(point.index)) continue;
        orientTripleSplitter(board.children[point.index], point.dir);
        oriented.add(point.index);
      }
    }
  }
}

function ropeMarkup(slash, tileIndex) {
  // Рисуем настоящую плетёную верёвку: объёмная основа, повторяющиеся
  // переплетённые волокна, мягкий блик и тень. Концевых шариков нет.
  const path = slash === "/"
    ? "M18 82 L82 18"
    : "M18 18 L82 82";
  const gradientId = `ropeBase${tileIndex}`;
  const patternId = `ropeBraid${tileIndex}`;

  const guides = slash === "/"
    ? `<path d="M12 29 V15 H27"/><path class="guide-head" d="M21 9 L27 15 L21 21"/>
       <path d="M88 71 V85 H73"/><path class="guide-head" d="M79 79 L73 85 L79 91"/>`
    : `<path d="M12 71 V85 H27"/><path class="guide-head" d="M21 79 L27 85 L21 91"/>
       <path d="M88 29 V15 H73"/><path class="guide-head" d="M79 9 L73 15 L79 21"/>`;

  return `<span class="rope">
    <span class="rope-cord">
      <svg class="rope-art" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id="${gradientId}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#fff"/>
            <stop offset=".24" stop-color="#fbf8f4"/>
            <stop offset=".55" stop-color="#d9cec5"/>
            <stop offset=".78" stop-color="#f8f4ef"/>
            <stop offset="1" stop-color="#cbbdb2"/>
          </linearGradient>
          <pattern id="${patternId}" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="12" height="12" fill="#f5f1ec"/>
            <path d="M-3 3 L3 -3 M0 12 L12 0 M9 15 L15 9" stroke="#cfc2b8" stroke-width="3.1"/>
            <path d="M-3 9 L3 3 M3 15 L15 3" stroke="#fff" stroke-width="3.1"/>
            <path d="M-3 3 L3 -3 M0 12 L12 0" stroke="#fff9" stroke-width="1"/>
          </pattern>
        </defs>
        <path class="rope-shadow" d="${path}" transform="translate(0 2)"/>
        <path class="rope-base" d="${path}" stroke="url(#${gradientId})"/>
        <path class="rope-braid" d="${path}" stroke="url(#${patternId})"/>
        <path class="rope-glint" d="${path}" transform="translate(-1 -1)"/>
      </svg>
    </span>
    <svg class="rope-guides" viewBox="0 0 100 100" aria-hidden="true">${guides}</svg>
  </span>`;
}
function render() {
  board.toggleAttribute("data-dense", boardSize >= 7);
  board.toggleAttribute("data-large", boardSize >= 10);
  board.style.gridTemplateColumns = `repeat(${boardSize}, minmax(0, 1fr))`;
  if (boardWrap) {
    const targetWidth = Math.min(570, boardSize * 90 + (boardSize - 1) * 5);
    boardWrap.closest(".play-layout").style.setProperty("--board-limit", `${targetWidth}px`);
  }
  updateSoundButton();
  updateThemeButton();
  updateLevelLabels();
  updateHeartsDisplay();
  updateChestControls();

  // Keep the same button under a pointer when a flight finishes.
  if (board.childElementCount !== grid.length) {
    const buttons = grid.map((_, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "cell";
      button.dataset.i = index;
      return button;
    });
    board.replaceChildren(...buttons);
  }

  grid.forEach((cell, index) => {
    const button = board.children[index];
    button.classList.toggle("hint", hintIndex === index);
    button.toggleAttribute("data-arrow", cell?.type === "arrow");
    button.classList.remove("impact", "rope-hit", "ice-hit");
    const label = t("cell", { count: index + 1 });
    const tileName = cell?.mode === "split" ? (cell.axis === "triple" ? "tripleTile"
      : cell.axis === "quad" ? "quadTile" : "splitTile") : cell?.shell ? "frozenTile" : null;
    button.setAttribute("aria-label", tileName ? label + ", " + t(tileName) : label);
    const key = cell ? [cell.type, cell.color, cell.dir, cell.slash, cell.mode, cell.axis, cell.shell].join(":") : "";
    if (button.dataset.tile === key) {
      const tile = button.firstElementChild;
      tile?.classList.remove("invalid-shake", "popping", "rope-wobble", "splitter-spent");
      tile?.style.removeProperty("visibility");
      tile?.querySelector(".hint-nudge")?.classList.remove("hint-nudge");
      return;
    }

    button.dataset.tile = key;
    button.style.removeProperty("--hint-color");
    if (cell?.type === "ball") {
      button.innerHTML = `<span class="ball${cell.shell ? " ball--frozen" : ""}" style="--ball:${COLORS[cell.color] || "#aaa"}"></span>`;
    } else if (cell?.type === "arrow") {
      const color = COLORS[cell.color] || "#aaa";
      button.style.setProperty("--hint-color", color);
      button.innerHTML = `<span class="arrow" style="--arrow:${color};--dir-angle:${directionAngle(cell.dir)}deg">${arrowSvgMarkup()}</span>`;
    } else if (cell?.mode === "split") {
      button.innerHTML = splitterMarkup(cell.axis);
    } else if (cell?.type === "rope") {
      button.innerHTML = ropeMarkup(cell.slash, index);
    } else {
      button.replaceChildren();
    }
  });
  previewTripleSplitters(routeHint?.index);
  refreshRouteHint();
  updateBonusControls();
  syncTutorial();
}

function updateHeartsDisplay() {
  const hearts = document.getElementById("hearts");
  hearts.setAttribute("aria-label", t("livesCount", { count: lives }));
  hearts.innerHTML = [0, 1, 2].map(index => {
    const classes = index < lives - Number(spareLifeActive) ? "life-heart" : "life-heart life-heart--lost";
    return `<svg class="${classes}" aria-hidden="true"><use href="#life-heart"></use></svg>`;
  }).join("") + (spareLifeActive
    ? '<svg class="life-heart life-heart--bonus" viewBox="0 1 60 60" aria-hidden="true"><use href="#bonus-heart"></use></svg>'
    : '');
}

function showInvalidToast() {
  const toast = document.getElementById("invalidToast");
  if (!toast) return;
  toast.classList.remove("show");
  void toast.offsetWidth;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 980);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function cellCenter(index) {
  const cell = board.querySelector(`.cell[data-i="${index}"]`);
  if (!cell) return null;
  const cellRect = cell.getBoundingClientRect();
  const layerRect = fxLayer.getBoundingClientRect();
  return {
    x: cellRect.left + cellRect.width / 2 - layerRect.left,
    y: cellRect.top + cellRect.height / 2 - layerRect.top
  };
}

function directionAngle(dir) {
  return { right: 0, down: 90, left: 180, up: 270 }[dir] || 0;
}

function shortestTurn(fromDir, toDir) {
  const raw = directionAngle(toDir) - directionAngle(fromDir);
  return ((raw + 540) % 360) - 180;
}

function flightTransform(point, rotation) {
  return `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%) rotate(${rotation}deg)`;
}

function createFlightArrow(template, startIndex, startDir, templateDir) {
  const point = cellCenter(startIndex);
  const sourceCell = board.querySelector(`.cell[data-i="${startIndex}"]`);
  if (!point || !template || !sourceCell) return null;

  const rect = sourceCell.getBoundingClientRect();
  const projectile = template.cloneNode(true);
  projectile.className = "flight-arrow";
  projectile.setAttribute("aria-hidden", "true");
  projectile.style.width = (rect.width * 0.82) + "px";
  projectile.style.height = (rect.height * 0.82) + "px";
  projectile.style.setProperty("--arrow", template.style.getPropertyValue("--arrow") || "#777");
  projectile.style.transform = flightTransform(point, directionAngle(startDir));
  fxLayer.appendChild(projectile);
  return projectile;
}
function gridPitch() {
  const first = board.querySelector(".cell");
  if (!first) return { x: 0, y: 0 };
  const rect = first.getBoundingClientRect();
  const styles = getComputedStyle(board);
  return {
    x: rect.width + (parseFloat(styles.columnGap) || 0),
    y: rect.height + (parseFloat(styles.rowGap) || 0)
  };
}

function outsidePoint(index, dir) {
  const center = cellCenter(index);
  if (!center) return null;
  const layer = fxLayer.getBoundingClientRect();
  const cell = board.querySelector(`.cell[data-i="${index}"]`);
  const size = cell ? cell.getBoundingClientRect().width : 72;
  const overshoot = Math.max(110, size * 1.8); // Entire body/tail of the arrow exits.
  if (dir === "right") return {x: window.innerWidth - layer.left + overshoot, y: center.y};
  if (dir === "left") return {x: -layer.left - overshoot, y: center.y};
  if (dir === "down") return {x: center.x, y: window.innerHeight - layer.top + overshoot};
  return {x: center.x, y: -layer.top - overshoot};
}


// Frame offsets align the five breakup drawings to one ball center.
const BUBBLE_POP_FRAMES = [
  [36, 192, 57, `
    <path class="pop-skin" d="M106 198C114 197 120 199 123 205Q126 211 129 205Q130 199 133 199Q137 200 135 205Q134 210 139 211C156 221 169 237 171 257C173 277 164 294 153 304Q150 308 146 312C135 326 115 330 99 328C75 327 54 308 47 285C39 260 48 234 65 216C75 205 92 199 106 198Z"/>
    <path class="pop-shadow" d="M53 237C54 227 63 217 69 214Q77 210 82 202Q85 197 91 200Q96 203 93 210Q89 220 79 222C70 222 67 237 60 243Q54 247 53 237Z
      M130 230Q139 230 139 240Q138 247 144 251Q151 256 145 263Q143 267 135 267Q128 269 125 277Q123 285 116 287Q110 285 105 291Q99 299 90 298Q81 297 81 287Q82 280 82 272Q84 261 91 256Q86 250 93 246Q99 241 108 243Q115 240 120 233Q125 229 130 230Z
      M120 317Q127 315 132 309Q140 303 148 302Q155 300 153 306L146 310Q146 317 138 320Q130 326 121 321Q118 319 120 317Z"/>
    <path class="pop-glint" d="M55 250C60 233 78 215 99 210C108 207 114 211 116 216Q119 225 109 226C90 229 79 237 72 254Q68 267 61 264Q55 261 55 250Z
      M60 272Q65 271 65 278Q65 286 60 286Q54 285 55 279Q55 273 60 272Z"/>
    <path class="pop-skin" d="M172 259Q178 255 176 261L172 267Q168 265 172 259ZM160 300Q166 297 166 302Q163 306 159 305ZM126 196Q128 193 130 197L130 202Q126 204 126 196Z"/>`],

  [204, 192, 64, `
    <mask id="pop-window" x="200" y="184" width="148" height="160" maskUnits="userSpaceOnUse">
      <rect x="200" y="184" width="148" height="160" fill="white"/>
      <path fill="black" d="M260 229Q265 222 271 227Q277 221 281 230Q284 234 282 240Q288 246 282 249Q281 259 274 259Q267 257 268 250Q262 251 261 245Q255 245 258 239Q257 234 260 229Z
        M239 268Q245 258 254 262Q261 260 264 268Q274 272 272 281Q267 288 260 288Q255 296 246 291Q237 290 238 282Q231 276 239 268Z
        M257 308Q260 301 267 305Q274 310 282 307Q291 308 291 316Q288 323 280 322Q275 326 268 321Q260 322 257 317Z
        M298 277Q301 266 306 269Q310 273 308 281Q310 289 305 297Q302 303 298 301Q294 300 296 294Q300 287 298 277Z"/>
    </mask>
    <g mask="url(#pop-window)">
      <path class="pop-skin" d="M276 200Q293 202 311 208Q326 217 332 234C340 247 343 264 339 279Q339 286 333 288Q329 285 324 289Q325 299 321 304Q318 309 316 310Q316 321 305 324Q286 333 261 328C239 324 220 306 216 286Q209 265 217 245Q224 240 218 233Q215 227 220 223Q226 224 229 215Q234 207 241 208Q248 198 257 204Q267 198 276 200Z"/>
      <path class="pop-shadow" d="M232 214Q241 206 246 212Q255 216 262 209Q271 205 269 197Q268 190 272 189Q277 187 277 196Q277 202 283 202Q294 203 291 211Q289 215 292 221Q298 230 290 235Q287 241 293 245Q296 247 299 240Q302 232 304 236Q307 241 307 247Q308 250 312 245Q319 234 324 238Q328 241 325 249Q329 255 324 264Q318 272 323 274Q330 267 334 273Q336 281 331 289Q328 294 324 293Q321 295 324 299Q333 305 330 310Q326 315 322 308Q317 303 315 311Q317 320 312 324Q308 326 303 321Q299 328 293 324Q286 318 289 311Q291 304 284 304Q279 308 272 302Q264 300 260 304Q256 304 254 299Q247 294 248 287Q248 281 241 278Q237 274 240 268Q244 262 239 258Q231 257 232 252Q235 247 231 241Q228 238 232 232Q240 230 236 226Q224 227 225 220Q227 216 232 214Z"/>
      <path class="pop-glint" d="M222 250Q227 247 227 255Q223 265 226 274Q228 281 223 281Q216 274 218 262Q219 253 222 250Z
        M232 221Q239 213 248 214Q254 215 250 221L240 227Q237 229 233 227ZM243 307Q248 306 253 312L263 318Q263 323 259 323Q250 319 245 313ZM310 212Q318 211 324 222Q323 226 319 223L308 216Q307 214 310 212Z"/>
    </g>
    <path class="pop-skin" d="M218 221Q221 214 225 220L228 225Q224 228 220 226ZM299 333Q305 330 306 334Q304 341 300 338ZM332 323Q337 321 338 325Q337 328 333 327Z"/>`],

  [386, 192, 68, `
    <path class="pop-shadow" d="M404 211Q407 214 410 211Q414 210 412 215L407 220Q401 220 400 215Q399 210 404 211Z
      M425 212Q432 211 432 216Q428 220 428 226Q426 232 421 232L418 242Q418 248 414 246L415 238L409 243Q407 241 411 237Q415 234 414 229Q415 225 421 222Q427 219 425 212Z
      M447 214Q454 214 452 220Q450 225 454 229Q456 235 452 239Q445 242 442 236Q447 232 444 228Q443 224 447 220Z
      M461 205Q468 202 476 207Q480 207 485 210Q490 211 489 215Q486 219 492 222Q498 224 496 231Q494 236 489 236Q483 234 480 229Q476 227 475 221Q474 218 468 219Q463 220 461 216Q463 212 458 212Q454 209 461 205Z
      M403 257Q407 253 415 256Q420 253 426 257Q431 260 438 262Q445 265 446 274Q450 278 450 283Q453 285 456 280Q458 272 463 269L464 246Q464 235 469 224Q474 218 474 224Q472 235 473 244Q471 257 474 265Q477 273 472 284Q467 292 469 296Q473 303 479 298Q481 291 485 290Q488 290 490 295L497 298Q505 301 503 306Q500 310 496 306Q491 303 493 310L496 317Q497 326 491 327Q486 324 489 319Q488 312 483 313Q475 319 474 313Q475 306 469 306Q461 311 457 307Q451 305 446 308Q440 310 436 306Q430 300 434 295Q439 289 436 282Q432 271 427 268Q420 263 415 268Q410 268 411 275Q407 277 403 271Q399 265 403 257Z
      M497 239Q502 237 504 242Q506 248 502 253Q499 257 501 262Q496 264 492 260Q487 258 490 252Q494 249 493 245Z
      M504 269Q508 266 510 273Q511 278 507 282Q506 287 501 284Q496 282 497 278Z"/>
    <path class="pop-skin" d="M402 271Q405 265 407 273Q406 283 412 289Q415 294 423 292Q431 291 429 296Q425 299 420 299Q426 305 432 306Q434 311 427 311Q415 309 408 301Q399 292 402 271Z
      M505 226Q511 228 513 238Q517 251 514 265Q513 274 509 274Q506 272 510 264Q512 255 508 249Q503 244 504 237Q500 233 505 226Z
      M425 208Q431 204 435 210Q437 215 430 216L424 214ZM515 276Q518 273 518 279Q517 285 514 284ZM445 311Q449 311 448 315Q445 317 445 311Z"/>
    <path class="pop-glint" d="M407 282Q409 281 411 286Q413 291 417 294Q418 298 414 297Q408 292 407 282Z
      M505 231Q510 235 509 241Q506 242 506 237Q504 233 505 231Z"/>`],

  [36, 348, 61, `
    <path class="pop-skin" d="M51 422Q54 421 56 427Q59 434 58 438Q55 439 54 434Q49 433 51 422Z
      M50 438Q54 438 55 443L60 450Q60 456 57 454Q51 447 50 438Z
      M67 455Q70 454 73 459L77 466Q78 472 73 468Q68 465 67 455Z
      M156 390Q162 393 164 401Q166 411 162 419Q160 421 159 416Q161 407 156 401Q152 397 156 390Z
      M157 409Q161 412 159 419Q157 425 154 423Q154 419 157 409Z
      M146 395Q150 392 151 396Q151 401 148 402Q145 401 146 395ZM162 424Q166 420 165 426Q164 432 161 431Q160 429 162 424Z"/>
    <path class="pop-shadow" d="M58 389Q62 385 66 387Q69 391 63 392Q58 393 58 389Z
      M74 372Q76 368 80 371L82 375Q78 376 74 372Z
      M88 367Q91 366 94 369Q91 372 89 370ZM96 378Q100 378 101 382Q99 386 96 382ZM103 376Q108 375 106 379Q105 382 102 381Z
      M119 380Q122 379 126 383Q125 386 121 384ZM91 392Q95 388 97 391Q97 395 92 397ZM111 390Q115 388 116 391Q116 395 112 395Z
      M130 402Q133 398 136 401Q137 405 133 406Q130 406 130 402ZM145 409Q148 408 149 412Q148 415 145 413Z
      M64 431Q67 427 70 430Q70 434 67 435ZM78 433Q81 430 84 432Q84 436 80 436ZM90 441Q94 438 96 441Q94 445 91 445Z
      M65 447Q68 444 72 449Q71 453 68 451ZM76 453Q80 449 82 452Q81 457 77 457Z
      M87 464Q92 461 96 465Q103 464 102 468Q98 469 98 473Q94 476 92 471Q87 471 87 464Z
      M112 472Q116 468 116 473Q113 479 112 472ZM149 455Q151 450 154 453Q156 459 151 460Q148 460 149 455Z
      M152 438Q155 435 156 439Q155 445 151 444Q149 441 152 438Z"/>`],

  [219, 351, 61, `
    <path class="pop-shadow" fill-opacity=".76" d="M243 405Q247 401 247 406Q244 410 243 405Z
      M263 375Q266 372 270 374Q268 377 263 377ZM280 373Q283 370 287 373Q284 377 280 373Z
      M295 370Q297 368 299 372L295 373ZM301 376Q303 374 307 377Q304 379 301 376Z
      M322 377Q325 375 328 379Q326 382 323 380ZM327 390Q330 386 332 391Q333 396 329 394Z
      M323 406Q326 403 328 408L325 410ZM338 423Q341 421 341 426L340 430Q336 429 338 423Z
      M325 422Q327 418 329 422Q331 427 327 427ZM336 446Q339 443 340 447Q341 452 337 451Z
      M333 457Q337 452 339 455Q340 459 336 462Q333 461 333 457ZM321 454Q322 449 325 452Q327 457 323 457Z
      M248 426Q250 422 253 426Q253 430 250 430ZM241 429Q243 426 244 429Q245 433 241 433Z
      M242 442Q244 438 247 442Q248 447 244 446ZM255 442Q258 438 260 442Q261 447 257 447Z
      M246 459Q249 456 251 461Q250 466 247 464ZM260 456Q263 452 265 457Q265 460 262 460Z
      M271 459Q274 455 277 458Q279 462 275 462ZM255 469Q257 467 260 470L257 472Z
      M282 475Q285 471 287 474L286 477ZM272 445Q275 441 278 444Q278 447 275 447Z"/>
    <path class="pop-skin" fill-opacity=".7" d="M325 377Q328 376 329 380L326 381ZM338 424Q342 421 341 426L340 429ZM333 457Q336 453 338 455Q337 459 334 460ZM241 443Q244 440 245 444Q245 447 242 447Z"/>`],
];

const BUBBLE_POP_TIME = BUBBLE_POP_FRAMES.reduce((total, frame) => total + frame[2], 0);
let bubblePopSequence = 0;

function popBallEffect(index, color) {
  const ball = board.querySelector(`.cell[data-i="${index}"] .ball`);
  const center = cellCenter(index);
  if (!ball || !center) return;
  const diameter = ball.getBoundingClientRect().width;
  ball.classList.add("popping");
  const burst = document.createElement("div");
  burst.className = "bubble-pop";
  burst.style.left = `${center.x}px`;
  burst.style.top = `${center.y}px`;
  burst.style.width = `${diameter * 144 / 128}px`;
  burst.style.setProperty("--pop-color", COLORS[color] || "#4ac0f0");
  const maskId = `pop-window-${++bubblePopSequence}`;
  let elapsed = 0;
  const expansion = [1, 1.08, 1.34, 1.87, 2.38];
  const frames = BUBBLE_POP_FRAMES.map(([x, y, time, paths], step) => {
    const transform = `translate(72 72) scale(${expansion[step]}) translate(${-x - 72} ${-y - 72})`;
    const frame = `<g class="bubble-pop-frame" transform="${transform}"
      style="--frame-start:${elapsed}ms;--frame-time:${time}ms">${paths.replaceAll("pop-window", maskId)}</g>`;
    elapsed += time;
    return frame;
  });
  burst.innerHTML = `<svg viewBox="0 0 144 144" aria-hidden="true">${frames.join("")}</svg>`;
  fxLayer.appendChild(burst);
  setTimeout(() => burst.remove(), BUBBLE_POP_TIME + 20);
}


// Строим всю траекторию до начала анимации. Шарики своего цвета
// записываются как цели, но не останавливают полёт стрелы.
// Shared by the game, level generator and solver.
function buildSegmentPlan(simGrid, startX, startY, initialDir, color, hits,
                          visited = new Set(), originIndex = null) {
  const segment = {
    originIndex,
    initialDir,
    points: originIndex === null ? [] : [{ index: originIndex, dir: initialDir, kind: "origin" }],
    pops: [],
    branches: [],
    blocked: false,
    blockerIndex: null,
    escaped: false,
  };

  let x = startX, y = startY, dir = initialDir;
  while (x >= 0 && x < boardSize && y >= 0 && y < boardSize) {
    const index = y * boardSize + x;
    const key = index + "," + dir;
    if (visited.has(key)) {
      segment.blocked = true;
      break;
    }
    visited.add(key);

    const cell = simGrid[index];
    if (!cell || hits.shells.has(index) || hits.splitters.has(index)) {
      segment.points.push({ index, dir, kind: "empty" });
    } else if (cell.type === "ball" && cell.color === color) {
      if (cell.shell) {
        segment.points.push({ index, dir, kind: "crack" });
        hits.shells.add(index);
        simGrid[index] = { type: "ball", color };
      } else {
        segment.points.push({ index, dir, kind: "ball" });
        segment.pops.push({ index, color });
        simGrid[index] = null;
      }
    } else if (cell.type === "rope" && cell.mode === "turn") {
      segment.points.push({ index, dir, kind: "rope" });
      dir = turnDirection(dir, cell.slash);
      segment.points.push({ index, dir, kind: "turn" });
    } else if (cell.type === "rope" && cell.mode === "split") {
      segment.points.push({ index, dir, kind: "split", axis: cell.axis });
      // A persistent splitter can branch again on the next shot. Returning
      // branches pass through it during this shot, like the spent splitters.
      if (isPersistentSplitter(cell.axis)) hits.splitters.add(index);
      else simGrid[index] = null;
      for (const branchDir of splitDirections(cell, dir)) {
        const [dx, dy] = DIRS[branchDir];
        segment.branches.push(buildSegmentPlan(
          simGrid, x + dx, y + dy, branchDir, color, hits, new Set(visited), index
        ));
      }
      return segment;
    } else {
      segment.points.push({ index, dir, kind: "block" });
      segment.blocked = true;
      segment.blockerIndex = index;
      break;
    }
    x += DIRS[dir][0];
    y += DIRS[dir][1];
  }
  segment.escaped = x < 0 || x >= boardSize || y < 0 || y >= boardSize;
  return segment;
}

function shotSegments(segment) {
  return [segment, ...segment.branches.flatMap(shotSegments)];
}

function buildArrowPlan(index, arrow) {
  const simGrid = grid.slice();
  simGrid[index] = null;
  const [dx, dy] = DIRS[arrow.dir];
  const hits = { shells: new Set(), splitters: new Set() };
  const main = buildSegmentPlan(simGrid, index % boardSize + dx,
    Math.floor(index / boardSize) + dy, arrow.dir, arrow.color, hits, new Set(), index);
  const segments = shotSegments(main);
  const popped = segments.reduce((count, segment) => count + segment.pops.length, 0);
  return {
    main,
    finalGrid: simGrid,
    popped,
    cracked: hits.shells.size,
    blocked: segments.some(segment => segment.blocked),
  };
}

function isSuccessfulShot(plan) {
  return !plan.blocked && (plan.popped > 0 || plan.cracked > 0);
}

async function animateSegment(segment, template, templateDir, color) {
  const projectile = createFlightArrow(
    template,
    segment.originIndex,
    segment.initialDir,
    templateDir
  );

  if (!projectile) return;

  const firstPoint = cellCenter(segment.originIndex);
  const frames = [{
    transform: flightTransform(firstPoint, directionAngle(segment.initialDir)),
    offset: 0
  }];

  const events = [];
  let popBurst = null;
  let lastPop = -Infinity;
  let elapsed = 0;
  let rotation = directionAngle(segment.initialDir);
  let currentDir = segment.initialDir;
  let lastIndex = segment.originIndex;

  for (const point of segment.points.slice(1)) {
    if (point.kind === "turn") {
      rotation += shortestTurn(currentDir, point.dir);
      currentDir = point.dir;
      elapsed += 36;
    } else {
      if (point.dir !== currentDir) {
        rotation += shortestTurn(currentDir, point.dir);
        currentDir = point.dir;
      }
      elapsed += 57;
    }

    const center = cellCenter(point.index);
    if (!center) continue;

    frames.push({
      transform: flightTransform(center, rotation),
      offset: 0 // offsets are assigned below from elapsed timestamps
    });
    frames[frames.length - 1]._time = elapsed;
    lastIndex = point.index;

    if (point.kind === "ball") {
      const event = { time: elapsed, index: point.index, type: "pop", burst: 0 };
      if (elapsed - lastPop > 80) popBurst = event;
      popBurst.burst++;
      lastPop = elapsed;
      events.push(event);
    }
    if (point.kind === "crack") events.push({ time: elapsed, index: point.index, type: "crack" });
    if (point.kind === "block") events.push({ time: elapsed, index: point.index, type: "impact" });
    if (point.kind === "rope" || point.kind === "split") {
      events.push({ time: elapsed, index: point.index, type: point.kind, axis: point.axis, incoming: point.dir });
    }
  }

  if (segment.escaped) {
    const endpoint = outsidePoint(lastIndex, currentDir);
    if (endpoint) {
      const from = cellCenter(lastIndex);
      const distance = Math.hypot(endpoint.x - from.x, endpoint.y - from.y);
      // Keep moving at one brisk speed beyond the BOARD and beyond the VIEWPORT.
      elapsed += Math.max(58, Math.min(419, distance / 1.85));
      frames.push({
        transform: flightTransform(endpoint, rotation),
        offset: 0,
        _time: elapsed
      });
    }
  }

  if (elapsed <= 0) elapsed = 57;
  frames.forEach(frame => {
    frame.offset = frame._time === undefined ? 0 : frame._time / elapsed;
    delete frame._time;
  });

  const elapsedNow = await playFlight(projectile, frames, elapsed, events, event => {
      if (event.type === "pop") {
        if (event.burst) playGameSound("pop" + Math.min(event.burst, 5));
        popBallEffect(event.index, color);
      }
      if (event.type === "crack") {
        board.children[event.index]?.querySelector(".ball")?.classList.remove("ball--frozen");
        board.children[event.index]?.classList.add("impact", "ice-hit");
        playGameSound("ice");
      }
      if (event.type === "impact") {
        const cell = board.querySelector(`.cell[data-i="${event.index}"]`);
        if (cell) cell.classList.add("impact");
        if (projectile.isConnected) projectile.classList.add("bump");
      }
      if (event.type === "rope" || event.type === "split") {
        playGameSound("bounce");
        const cell = board.querySelector(`.cell[data-i="${event.index}"]`);
        if (event.axis === "triple") orientTripleSplitter(cell, event.incoming);
        const rope = cell?.querySelector(".rope");
        if (cell) cell.classList.add("rope-hit");
        if (rope) {
          rope.classList.remove("rope-wobble");
          void rope.offsetWidth;
          rope.classList.add("rope-wobble");
          if (event.type === "split" && !isPersistentSplitter(event.axis)) {
            rope.classList.add("splitter-spent");
          }
        }
      }
  });

  const lastEffectEnd = events.reduce(
    (end, event) => {
      if (event.type === "pop") return Math.max(end, event.time + BUBBLE_POP_TIME + 20);
      if (event.type === "crack") return Math.max(end, event.time + 300);
      return end;
    },
    0
  );
  const effectsRemaining = Math.max(0, lastEffectEnd - elapsedNow);
  const branches = segment.branches.map(branch => animateSegment(branch, template, templateDir, color));
  if (branches.length) projectile.remove();
  if (effectsRemaining) await sleep(effectsRemaining);

  if (segment.blockerIndex !== null) {
    const blocker = board.querySelector(`.cell[data-i="${segment.blockerIndex}"]`);
    if (blocker) blocker.classList.add("impact");
  }

  projectile.remove();

  await Promise.all(branches);
}

function saveUndo() {
  undoStack.push({ grid: clone(grid), lives, spareLifeUsed, spareLifeActive });
  if (undoStack.length > 30) undoStack.shift();
}

// Отражение направления от диагональной поверхности.
// "/" : вправо→вверх, влево→вниз, вверх→вправо, вниз→влево.
// "\\" : вправо→вниз, влево→вверх, вверх→влево, вниз→вправо.
function turnDirection(dir, slash) {
  if (slash === "/") {
    return {
      right: "up",
      up: "right",
      left: "down",
      down: "left"
    }[dir];
  }
  return {
    right: "down",
    down: "right",
    left: "up",
    up: "left"
  }[dir];
}

// Search with the exact shot planner used by launchArrow and hints.
function findLevelSolution(sourceGrid, maxStates = 50000) {
  const size = Math.sqrt(sourceGrid.length);
  if (!Number.isInteger(size) || size < 3 || size > MAX_BOARD_SIZE) {
    return { path: null, checked: 0, error: "Неподдерживаемый размер поля" };
  }

  const previousSize = boardSize;
  const previousGrid = grid;
  const seen = new Set();

  function search(cells) {
    if (!cells.some(cell => cell?.type === "ball")) return [];
    const key = shotStateKey(cells);
    if (seen.size >= maxStates || seen.has(key)) return null;
    seen.add(key);
    for (let index = 0; index < cells.length; index++) {
      const arrow = cells[index];
      if (arrow?.type !== "arrow") continue;
      grid = cells;
      const plan = buildArrowPlan(index, arrow);
      if (!isSuccessfulShot(plan)) continue;
      const rest = search(plan.finalGrid);
      if (rest) return [{
        row: Math.floor(index / size) + 1,
        column: index % size + 1,
        color: arrow.color,
        direction: arrow.dir,
        popped: plan.popped,
        cracked: plan.cracked,
        stoppedByObstacle: false,
      }, ...rest];
    }
    return null;
  }

  boardSize = size;
  try {
    return { path: search(sourceGrid), checked: seen.size };
  } finally {
    boardSize = previousSize;
    grid = previousGrid;
  }
}

function shotStateKey(cells) {
  return cells.map(cell => !cell ? "0" : cell.shell ? "2" : "1").join("");
}

function shakeInvalidArrow(index) {
  const cell = board.querySelector(`.cell[data-i="${index}"]`);
  const arrowElement = cell?.querySelector(".arrow");
  if (!arrowElement) return;
  arrowElement.classList.remove("invalid-shake");
  void arrowElement.offsetWidth;
  arrowElement.classList.add("invalid-shake");
  setTimeout(() => arrowElement.classList.remove("invalid-shake"), 430);
}

function flashBoardError() {
  if (!boardWrap) return;
  boardWrap.classList.remove("invalid-flash");
  void boardWrap.offsetWidth;
  boardWrap.classList.add("invalid-flash");
  setTimeout(() => boardWrap.classList.remove("invalid-flash"), 510);
}

async function launchArrow(index) {
  // Другие стрелы могут продолжать полёт: логическое поле обновляется
  // сразу при запуске, а визуальное поле остаётся на экране до конца всех полётов.
  if (levelCompleted) return;

  const arrow = grid[index];
  if (!arrow || arrow.type !== "arrow") return;
  if (tutorialLesson?.key === "bounce" && tutorialAction?.dataset.i !== String(index)) {
    nudgeTutorialPaw();
    return;
  }
  if (tutorialLesson?.key === "hint" || tutorialLesson?.key.startsWith("bonus-")) {
    nudgeTutorialPaw();
    return;
  }

  if (lives <= 0) {
    setMessage("defeat_1");
    return;
  }

  const sourceCell = board.querySelector(`.cell[data-i="${index}"]`);
  const sourceArrow = sourceCell?.querySelector(".arrow");
  const arrowTemplate = sourceArrow?.cloneNode(true);
  if (!arrowTemplate) {
    setMessage("arrowError");
    return;
  }

  if (hintIndex === index) setHintTarget(-1);
  const plan = buildArrowPlan(index, arrow);

  // Если впереди есть препятствие, весь ход отменяется: даже совпавшие
  // по цвету шары, встреченные до него, не удаляются.
  if (!isSuccessfulShot(plan)) {
    playGameSound("wrong");
    shakeInvalidArrow(index);
    shakeHintArrow();
    flashBoardError();
    showInvalidToast();
    spareLifeActive = false;
    lives = Math.max(0, lives - 1);
    updateHeartsDisplay();
    setMessage(lives > 0 ? "badMove" : "defeat_0");
    if (lives <= 0) {
      if (activeMoveCount > 0) pendingGameOver = true;
      else {
        levelCompleted = true;
        setTimeout(() => showResult(false), 420);
      }
    }
    return;
  }

  if (tutorialLesson?.findArrow && (tutorialLesson.key !== "shell" || shotPopsTutorialShell(plan))) {
    finishTutorial(tutorialLesson.key, index);
  }
  finishTutorial("lives");
  playGameSound("click");
  saveUndo();
  grid = plan.finalGrid;
  if (routeHint?.index === index) clearRouteHint();
  else if (routeHint) routePreview.setAttribute("hidden", "");
  if (hintIndex >= 0 && !isHintCandidate(grid[hintIndex], hintIndex)) {
    setHintTarget(grid.findIndex(isHintCandidate));
  }
  shakeHintArrow();
  sourceArrow.style.visibility = "hidden";
  sourceCell.removeAttribute("data-arrow");
  sourceCell.classList.remove("tutorial-action");
  activeMoveCount += 1;
  isAnimating = true;
  setMessage(activeMoveCount > 1 ? "flyingMany" : "flying");

  try {
    await animateSegment(plan.main, arrowTemplate, arrow.dir, arrow.color);
  } catch (error) {
    console.error("Ошибка анимации стрелы:", error);
    setMessage("animationError");
  } finally {
    activeMoveCount = Math.max(0, activeMoveCount - 1);
    isAnimating = activeMoveCount > 0;

    // Перерисовываем только после последней активной стрелы — так независимые
    // полёты не стирают DOM-эффекты и не прерывают друг друга.
    if (!isAnimating) {
      render();
      if (pendingGameOver || lives <= 0) {
        pendingGameOver = false;
        levelCompleted = true;
        showResult(false);
      } else if (!grid.some(cell => cell?.type === "ball")) {
        levelCompleted = true;
        showResult(true);
      } else {
        setMessage("moveDone");
      }
    }
  }
}

const VICTORY_CAT_IMAGES = [
  "assets/211277c3a5c07167fd58890c.webp",
  "assets/6a59ad77a9ad2d33f6015846.webp",
  "assets/651f147b0e5dd071e90803ce.webp",
  "assets/1346a1bcc1c84b81afaf707c.webp",
  "assets/a8a36389d9229088babadab2.webp",
  "assets/8f58485de1c62a583b12ae44.webp",
  "assets/1280d95e101691a7aee216a4.webp",
  "assets/879de91c44a22c57a664e80e.webp",
  "assets/ed11efac784479b7d5ff7469.webp",
  "assets/ef48def708f46abf13b83e1b.webp"
];
// Cats in dark mode keep their original character art but no longer carry a white background.
const VICTORY_CAT_IMAGES_DARK = ["assets/2a3b3586705a8e937ab7d24e.webp","assets/6381dec497e1e0a28d5a90d0.webp","assets/12eae433a0c6dc292f40baed.webp","assets/f2b841c519e81517c79c8812.webp","assets/0165bce0b4e9d698d0dae415.webp","assets/dca6c879d829fcf7ae26cf77.webp","assets/c246c3285ff00edf8247bf4a.webp","assets/fb3e15e2145b15c2ee319867.webp","assets/4fa23d2fce3acbb7973dc75e.webp","assets/66b16d41c451e830e847b3a6.webp"];
const LOSE_CAT_IMAGES_DARK = ["assets/bf12ed308fa04e419ae50208.webp","assets/7767c01506be52d89c67fb8d.webp","assets/27956769ca9a4ac9b5caef12.webp","assets/fc123380307216a738bbb202.webp","assets/602a5b7ace529a9f25625bd3.webp","assets/99fb26687637675ea6b1535a.webp","assets/b3dfd3ef64ffd3549ea534f1.webp","assets/67e21372372ec4604995c057.webp","assets/e5e0fafa810e5c3b28801fe5.webp","assets/d1d4a7172391c3c1f387580a.webp"];


function stopConfetti() {
  const layer = document.getElementById('confettiLayer');
  if (layer) layer.replaceChildren();
}
function startConfetti() {
  const layer = document.getElementById('confettiLayer');
  if (!layer) return;
  stopConfetti();
  const colors = ['#ffde30','#f65baf','#7f53db','#51d6fb','#4be081','#ff8567','#ffffff'];
  const frag = document.createDocumentFragment();
  for (let i=0; i<112; i++) {
    const piece=document.createElement('span');
    piece.className='confetti-piece';
    piece.style.setProperty('--x', (Math.random()*100).toFixed(2)+'vw');
    piece.style.setProperty('--dx', ((Math.random()-.5)*240).toFixed(0)+'px');
    piece.style.setProperty('--spin', ((Math.random()-.5)*1500).toFixed(0)+'deg');
    piece.style.setProperty('--duration', (2.1+Math.random()*2.3).toFixed(2)+'s');
    piece.style.setProperty('--delay', (-Math.random()*2.2).toFixed(2)+'s');
    piece.style.background=colors[i%colors.length];
    piece.style.width=(5+Math.random()*9).toFixed(0)+'px';
    piece.style.height=(7+Math.random()*13).toFixed(0)+'px';
    piece.style.borderRadius=(i%4===0?'50%':'2px');
    frag.appendChild(piece);
  }
  for(let i=0;i<48;i++){
    const piece=document.createElement('span');
    piece.className='confetti-firework';
    const angle=i*2*Math.PI/48;
    const radius=100+Math.random()*Math.max(70,Math.min(innerWidth,innerHeight)*.43);
    piece.style.setProperty('--tx', (Math.cos(angle)*radius).toFixed(0)+'px');
    piece.style.setProperty('--ty', (Math.sin(angle)*radius).toFixed(0)+'px');
    piece.style.setProperty('--rot', (Math.random()*700).toFixed(0)+'deg');
    piece.style.setProperty('--delay', (Math.random()*.4).toFixed(2)+'s');
    piece.style.background=colors[(i+2)%colors.length];
    frag.appendChild(piece);
  }
  layer.appendChild(frag);
}

const LOSE_CAT_IMAGES = [
  "assets/fbd2bb774bbc530d7c16ec33.webp",
  "assets/02d73e5634f3ccf7ae09ae89.webp",
  "assets/78f7d08cead6227e687b6509.webp",
  "assets/4f3b80092440ac9229a0996f.webp",
  "assets/290af0dae161e4efa0cec3c7.webp",
  "assets/695b34ee37bc1aeb81e3db2f.webp",
  "assets/24ba138ad3d7d8923b5fd2d5.webp",
  "assets/4d318cc6021dde7038f0ceb6.webp",
  "assets/3ed33d89227f85da2d3780bb.webp",
  "assets/af1c6efb7eacf71eeb9d94aa.webp"
];
function shuffleVictoryDeck(length) {
  const deck = Array.from({ length }, (_, i) => i);
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

// Each pose/heading is used once per shuffled cycle; the first item of a new
// cycle is swapped if it would repeat the last item from the previous cycle.
function nextShuffledDeckIndex(storageKey, length, previous = -1) {
  let deck = null;
  let index = 0;
  let last = previous;
  let storageAvailable = true;
  try {
    deck = JSON.parse(gameStorage.getItem(storageKey + "_deck") || "null");
    index = Number(gameStorage.getItem(storageKey + "_index") || 0);
    last = Number(gameStorage.getItem(storageKey + "_last") ?? previous);
  } catch (error) {
    storageAvailable = false;
  }

  const fallback = victoryDeckFallback[storageKey];
  if (!storageAvailable && fallback) last = fallback.last;
  if (!Array.isArray(deck) || deck.length !== length || new Set(deck).size !== length ||
      !deck.every(value => Number.isInteger(value) && value >= 0 && value < length) ||
      !Number.isInteger(index) || index < 0 || index >= length) {
    if (fallback && Array.isArray(fallback.deck) && fallback.index < length) {
      deck = fallback.deck;
      index = fallback.index;
      last = fallback.last;
    } else {
      deck = shuffleVictoryDeck(length);
      index = 0;
      if (deck[0] === last && length > 1) [deck[0], deck[1]] = [deck[1], deck[0]];
    }
  }

  const chosen = deck[index];
  const nextIndex = index + 1;
  victoryDeckFallback[storageKey] = { deck, index: nextIndex, last: chosen };
  try {
    gameStorage.setItem(storageKey + "_deck", JSON.stringify(deck));
    gameStorage.setItem(storageKey + "_index", String(nextIndex));
    gameStorage.setItem(storageKey + "_last", String(chosen));
  } catch (error) { /* the game still works without persistent storage */ }
  return chosen;
}

const preparedPoses = new Map();
let resultPresentation = 0;
let resultPreloadStarted = false;
let resultSkins;

function skinImages(element, properties, pseudo = null) {
  const style = getComputedStyle(element, pseudo);
  return properties.flatMap(property => {
    const path = style.getPropertyValue(property).match(/url\(['"]?([^)'"\s]+)/)?.[1];
    if (!path) return [];
    const image = new Image();
    image.src = path;
    return [image];
  });
}

function prepareResultPose(win) {
  if (!preparedPoses.has(win)) {
    const type = win ? "victory" : "defeat";
    const poses = win ? VICTORY_CAT_IMAGES : LOSE_CAT_IMAGES;
    const deck = win ? "bp_victory_cat" : "bp_lose_cat";
    const index = nextShuffledDeckIndex(deck, poses.length);
    const image = new Image();
    image.src = poses[index];
    const ready = image.decode().then(() => true, () => false);
    preparedPoses.set(win, { type, index, image, ready });
  }
  return preparedPoses.get(win);
}

function preloadResultArt() {
  resultPreloadStarted = true;
  prepareResultPose(true);
  prepareResultPose(false);
  if (!resultSkins) {
    const images = ["nextLevelAction", "closeResultAction"].flatMap(id =>
      skinImages(document.getElementById(id), ["--left", "--center", "--right"]));
    const unique = new Map(images.map(image => [image.src, image]));
    resultSkins = Promise.allSettled(Array.from(unique.values(), image => image.decode()));
  }
}

async function revealResult(win, overlay, pet) {
  const presentation = ++resultPresentation;
  const pose = prepareResultPose(win);
  preparedPoses.delete(win);
  pet.dataset.poseType = pose.type;
  pet.dataset.poseIndex = String(pose.index);
  pet.loading = "eager";
  pet.src = pose.image.src;
  pet.alt = t(win ? "victoryPet" : "defeatPet");
  const [ready] = await Promise.all([pose.ready, resultSkins]);
  const decoded = ready && await pet.decode().then(() => true, () => false);
  if (presentation !== resultPresentation) return;
  pet.style.display = decoded ? "block" : "none";
  overlay.style.display = "flex";
  if (win) startConfetti();
  playGameSound(win ? "win" : "lose");
}

function showResult(win, afterChest = false, recorded = false) {
  hideTutorial();
  if (!afterChest && !recorded) {
    platform.level(win ? "level_completed" : "level_failed", levelNumber, levelMode);
    if (win) {
      recordLevelWin();
      if (levelMode === "campaign") platform.progress(Math.min(100, Math.floor((campaignLevel - 1) * 100 / CAMPAIGN_LEVEL_COUNT)));
    }
  }
  syncPlatformGameplay();
  setHintTarget(-1);
  if (onHomeScreen) { deferredResult = win; return; }
  if (win && !afterChest && showChestBeforeVictory()) return;
  if (win && showCampaignFinale()) return;
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("resultModal");
  const pet = document.getElementById("victoryPet");
  const nextButton = document.getElementById("nextLevelAction");
  const closeButton = document.getElementById("closeResultAction");
  const resultText = document.getElementById("resultText");
  const resultTitle = document.getElementById("resultTitle");

  overlay.classList.add("victory-screen");
  modal.classList.add("victory");
  resultText.textContent = "";
  resultText.style.display = "none";

  closeButton.onclick = closeOverlay;
  rewardMessage.hidden = true;
  victoryReward.hidden = true;

  if (win) {
    const praiseIndex = nextShuffledDeckIndex("bp_victory_praise", 4);
    resultTitle.textContent = t(resultTitle.dataset.l10n = "victory_" + praiseIndex);
    nextButton.style.display = "block";
    nextButton.textContent = t("next");
    nextButton.onclick = runNextLevel;
    closeButton.style.display = "none";
    updateRewardOffer();
  } else {
    stopConfetti();
    const titleIndex = nextShuffledDeckIndex("bp_lose_title", 2);
    resultTitle.textContent = t(resultTitle.dataset.l10n = "defeat_" + titleIndex);
    nextButton.style.display = "none";
    closeButton.style.display = "block";
    closeButton.textContent = t("retry");
    closeButton.onclick = runRetry;
  }
  void revealResult(win, overlay, pet);
}

function closeOverlay() {
  resultPresentation++;
  stopResultSounds();
  stopConfetti();
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("victory-screen");
  overlay.style.display = "none";
}

function undo() {
  if (isAnimating) return;
  const last = undoStack.pop();
  if (!last) {
    setMessage("noUndo");
    return;
  }
  grid = last.grid;
  levelCompleted = false;
  pendingGameOver = false;
  lives = last.lives + Number(spareLifeActive && !last.spareLifeUsed);
  spareLifeActive = last.spareLifeActive || (spareLifeActive && !last.spareLifeUsed);
  hintIndex = -1;
  closeOverlay();
  render();
  setMessage("undone");
}

function resetLevel() {
  if (isAnimating) return;
  playingLevel = undefined;
  if (resultPreloadStarted) preloadResultArt();
  levelCompleted = false;
  pendingGameOver = false;
  grid = clone(initial);
  resetAttemptBonuses();
  lives = 3;
  undoStack = [];
  hintIndex = -1;
  closeOverlay();
  render();
  setMessage("restarted");
}

function setLevel(number, mode = "campaign") {
  playingLevel = undefined;
  if (resultPreloadStarted) preloadResultArt();
  if (number === CAMPAIGN_LEVEL_COUNT && mode === "campaign") void preloadFinaleArt();
  const next = Math.max(1, Math.min(CAMPAIGN_LEVEL_COUNT, Number(number) || 1));
  chestVictoryPending = false;
  levelCompleted = false;
  pendingGameOver = false;
  levelNumber = next;
  levelMode = mode;
  campaignTutorial = mode !== "random";
  boardSize = getLevelSize(levelNumber);
  grid = getLevel(levelNumber);
  initial = clone(grid);
  resetAttemptBonuses();
  lives = 3;
  undoStack = [];
  hintIndex = -1;
  closeOverlay();
  deferredResult = null;
  if (mode === "random") gameStorage.setItem(RANDOM_LEVEL_KEY, String(next));
  render();
  setMessage("level", { count: levelNumber });
}

function readCampaignLevel(key) {
  const number = Number(gameStorage.getItem(key));
  return Number.isInteger(number) && number >= 1 && number <= CAMPAIGN_LEVEL_COUNT ? number : 0;
}

function restoreCampaignLevel() {
  const next = Number(gameStorage.getItem(CAMPAIGN_LEVEL_KEY));
  const saved = Number.isSafeInteger(next) && next > 0 ? next : 1;
  // Releases 3.51 and 3.52 left the cursor at 100 and stored completion separately.
  return gameStorage.getItem(COMPLETED_LEVELS_KEY) === "1" ? Math.max(saved, 101) : saved;
}

function savedLevel() {
  if (campaignLevel <= CAMPAIGN_LEVEL_COUNT) return { number: campaignLevel, mode: "campaign" };
  const number = readCampaignLevel(RANDOM_LEVEL_KEY) || drawRandomLevel(CAMPAIGN_LEVEL_COUNT);
  gameStorage.setItem(RANDOM_LEVEL_KEY, String(number));
  return { number, mode: "random" };
}

function resumeSavedLevel() {
  campaignLevel = Math.max(campaignLevel, restoreCampaignLevel());
  const { number, mode } = savedLevel();
  setLevel(number, mode);
}

function nextLevel() {
  if (isAnimating || !levelCompleted || lives <= 0 || grid.some(cell => cell?.type === "ball")) return;
  resumeSavedLevel();
}

function recordLevelWin() {
  if (!levelCompleted || lives <= 0 || grid.some(cell => cell?.type === "ball")) return;
  const updates = {};
  const random = levelMode === "random";
  if (random) {
    if (levelNumber !== readCampaignLevel(RANDOM_LEVEL_KEY)) return;
    updates[RANDOM_LEVEL_KEY] = drawRandomLevel(levelNumber);
  } else {
    if (levelNumber !== campaignLevel || levelNumber !== restoreCampaignLevel()) return;
    campaignLevel++;
    updates[CAMPAIGN_LEVEL_KEY] = campaignLevel;
    if (campaignLevel > CAMPAIGN_LEVEL_COUNT) {
      updates[FINALE_PENDING_KEY] = levelNumber;
      if (!readCampaignLevel(RANDOM_LEVEL_KEY)) updates[RANDOM_LEVEL_KEY] = drawRandomLevel(levelNumber);
    }
  }
  recordChestWin(levelNumber, random, updates);
}

function saveCampaignLevel() {
  gameStorage.setItem(CAMPAIGN_LEVEL_KEY, String(campaignLevel));
}

function drawRandomLevel(lastLevel) {
  return nextShuffledDeckIndex("bp_completed_campaign", CAMPAIGN_LEVEL_COUNT, lastLevel - 1) + 1;
}

function isHintCandidate(arrow, index) {
  if (arrow?.type !== "arrow") return false;
  const plan = buildArrowPlan(index, arrow);
  return isSuccessfulShot(plan);
}

function setHintTarget(index) {
  if (hintIndex === index) return;
  const previous = board.querySelector(".cell.hint");
  previous?.classList.remove("hint");
  previous?.querySelector(".hint-nudge")?.classList.remove("hint-nudge");
  hintIndex = index;
  if (index >= 0) board.querySelector(`.cell[data-i="${index}"]`)?.classList.add("hint");
}

function shakeHintArrow() {
  const arrow = board.querySelector(".cell.hint .arrow-svg");
  if (!arrow) return;
  arrow.classList.remove("hint-nudge");
  void arrow.getBoundingClientRect();
  arrow.classList.add("hint-nudge");
}

function hint() {
  if (platformBlocksGame() || isAnimating || levelCompleted) return;
  if (tutorialLesson?.key.startsWith("bonus-")) { nudgeTutorialPaw(); return; }
  syncChestState();
  if (!chestState.balance.hint) return;
  if (hintIndex >= 0) {
    playGameSound("hint");
    setMessage("hintReady");
    return;
  }
  const target = grid.findIndex(isHintCandidate);
  if (target < 0) {
    setMessage("noHint");
    return;
  }
  if (!useChestBonus("hint")) return;
  setHintTarget(target);
  finishTutorial("hint");
  playGameSound("hint");
  setMessage("hintReady");
}
function updateLevelLabels() {
  const levelEl = document.getElementById("level");
  if (levelEl) {
    document.getElementById("gameLevelLabel").textContent = t("level", { count: levelNumber });
    levelEl.setAttribute("aria-label", t("level", { count: levelNumber }));
  }
  const homeContinue = document.getElementById("homeContinue");
  if (homeContinue) {
    document.getElementById("homeLevelLabel").textContent = t("level", { count: levelNumber });
    homeContinue.setAttribute("aria-label", t("continueLevel", { count: levelNumber }));
  }
  const homeButton = document.getElementById("homeButton");
  if (homeButton) {
    homeButton.title = t('home');
    homeButton.setAttribute('aria-label', t('home'));
  }
  const settingsButton = document.getElementById("settingsButton");
  if (settingsButton) {
    settingsButton.title = t('settings');
    settingsButton.setAttribute('aria-label', t('settingsLabel'));
  }
}

function updateThemeButton() {
  const button = document.getElementById("themeButton");
  if (button) button.remove();
  darkMode = false;
  document.body.classList.remove("dark");
}

function toggleTheme() {
  darkMode = false;
  document.body.classList.remove("dark");
  gameStorage.removeItem("bp_theme");
}

function openSettings() {
  document.getElementById("settingsOverlay").hidden = false;
  updateMenuInert();
  applyLanguage();
  document.getElementById("settingsClose").focus({ preventScroll: true });
}

function closeSettings() {
  document.getElementById("languageOverlay").hidden = true;
  const wasOpen = !document.getElementById("settingsOverlay").hidden;
  document.getElementById("settingsOverlay").hidden = true;
  updateMenuInert();
  if (wasOpen) document.getElementById(onHomeScreen ? "homeSettingsButton" : "settingsButton").focus();
}

function goHome() {
  if (!isAnimating && levelCompleted) resumeSavedLevel();
  closeSettings();
  closeOverlay();
  onHomeScreen = true;
  hideTutorial();
  document.getElementById("gameScreen").hidden = true;
  document.getElementById("homeScreen").hidden = false;
  updateLevelLabels();
}

function resumeFromHome() {
  preloadResultArt();
  onHomeScreen = false;
  document.getElementById("homeScreen").hidden = true;
  document.getElementById("gameScreen").hidden = false;
  if (deferredResult !== null) {
    const result = deferredResult;
    deferredResult = null;
    showResult(result, false, true);
  } else if (showCampaignFinale()) return;
  syncTutorial();
}

const tutorialLessons = [
  null,
  {
    key: "arrow", pressArrow: true, findArrow: isHintCandidate, sides: ["up", "right", "down", "left"],
  },
  {
    key: "lives", target: "#hearts", acknowledge: true, sides: ["right", "left", "up", "down"],
  },
  {
    key: "hint", target: "#hintButton", sides: ["down", "right", "left", "up"],
  },
];

tutorialLessons[15] = {
  key: "bounce", pressArrow: true, findArrow: isBounceTutorialArrow,
  tileKind: "rope",
  sides: ["up", "left", "down", "right"],
};

function isBounceTutorialArrow(arrow, index) {
  if (arrow?.type !== "arrow") return false;
  const { main, blocked, popped } = buildArrowPlan(index, arrow);
  return !blocked && popped > 0 && main.points.some(point => point.kind === "turn");
}

tutorialLessons[40] = {
  key: "splitter", pressArrow: true, findArrow: isSplitterTutorialArrow,
  tileKind: "split",
  sides: ["up", "down", "right", "left"],
};

function isSplitterTutorialArrow(arrow, index) {
  if (arrow?.type !== "arrow") return false;
  const { main, blocked } = buildArrowPlan(index, arrow);
  return !blocked && main.branches.length === 2 && main.branches.every(branch => branch.pops.length > 0);
}

tutorialLessons[60] = {
  key: "shell", findArrow: isShellTutorialArrow, tileKind: "crack", sides: ["up", "down", "right", "left"],
};

tutorialLessons[80] = {
  key: "triple", pressArrow: true, findArrow: (arrow, index) => isSplitTutorialArrow(arrow, index, "triple"),
  tileKind: "split", splitAxis: "triple",
  sides: ["up", "down", "right", "left"],
};

tutorialLessons[90] = {
  key: "quad", pressArrow: true, findArrow: (arrow, index) => isSplitTutorialArrow(arrow, index, "quad"),
  tileKind: "split", splitAxis: "quad",
  sides: ["up", "down", "right", "left"],
};

function shotPopsTutorialShell(plan) {
  return shotSegments(plan.main).some(segment => segment.pops.some(({index}) => initial[index]?.shell));
}

function isShellTutorialArrow(arrow, index) {
  if (arrow?.type !== "arrow") return false;
  const plan = buildArrowPlan(index, arrow);
  return isSuccessfulShot(plan) && (plan.cracked > 0 || shotPopsTutorialShell(plan));
}

function isSplitTutorialArrow(arrow, index, axis) {
  if (arrow?.type !== "arrow") return false;
  const plan = buildArrowPlan(index, arrow);
  return isSuccessfulShot(plan) && shotSegments(plan.main).some(segment =>
    segment.points.some(point => point.kind === "split" && point.axis === axis));
}

function tutorialTile(lesson, arrowIndex) {
  if (!lesson.tileKind) return arrowIndex;
  const plan = buildArrowPlan(arrowIndex, grid[arrowIndex]);
  const point = shotSegments(plan.main).flatMap(segment => segment.points).find(point => {
    if (lesson.key === "shell") return initial[point.index]?.shell && ["crack","ball"].includes(point.kind);
    return point.kind === lesson.tileKind && (!lesson.splitAxis || point.axis === lesson.splitAxis);
  });
  return point?.index ?? arrowIndex;
}

const tutorial = document.getElementById("gameTutorial");
const tutorialCard = tutorial.querySelector(".tutorial-card");
const tutorialCopy = document.getElementById("tutorialCopy");
const tutorialPaw = tutorial.querySelector(".tutorial-paw");
const tutorialOkay = document.getElementById("tutorialOkay");
let tutorialTarget = null;
let tutorialAction = null;
let tutorialLesson = null;
let campaignTutorial = levelMode !== "random";

const tutorialShotPaw = tutorialPaw.cloneNode(true);
tutorialShotPaw.querySelector("clipPath").id = "tutorial-paw-crop-shot";
tutorialShotPaw.querySelector("image").setAttribute("clip-path", "url(#tutorial-paw-crop-shot)");
const tutorialShotCard = document.createElement("div");
tutorialShotCard.className = "tutorial-card";
const tutorialShotCopy = document.createElement("p");
tutorialShotCopy.id = "tutorialShotCopy";
tutorialShotCard.append(tutorialShotCopy);
const tutorialShot = document.createElement("div");
tutorialShot.className = "tutorial-shot-guide";
tutorialShot.hidden = true;
tutorialShot.append(tutorialShotPaw, tutorialShotCard);
tutorial.append(tutorialShot);

const tutorialSides = {
  up: [0, -1, 90],
  right: [1, 0, 180],
  down: [0, 1, -90],
  left: [-1, 0, 0],
};

function tutorialPositions(stage, target, card, paw, sides, dual) {
  const width = card.offsetWidth;
  const height = card.offsetHeight;
  const pawSize = paw.clientWidth;
  const x = target.left + target.width / 2;
  const y = target.top + target.height / 2;
  const clamp = (value, limit, margin) => Math.max(margin, Math.min(value, limit - margin));
  const gap = pawSize * .83 + 5;
  return sides.flatMap((side, order) => {
    const [dx, dy, angle] = tutorialSides[side];
    const room = dx
      ? (dx > 0 ? stage.width - x : x) - target.width / 2 - width - 8
      : (dy > 0 ? stage.height - y : y) - target.height / 2 - height - 8;
    const pawX = clamp(x + dx * (target.width / 2 + pawSize * .41) + dy * pawSize * .10, stage.width, pawSize * .70);
    const pawY = clamp(y + dy * (target.height / 2 + pawSize * .41) - dx * pawSize * .10, stage.height, pawSize * .70);
    return (dual ? [0, 24, 52] : [0]).map(extra => {
      const distance = Math.max(0, Math.min(gap + extra, room));
      const left = clamp(x - width / 2 + dx * (target.width / 2 + distance + width / 2), stage.width - width, 8);
      const top = clamp(y - height / 2 + dy * (target.height / 2 + distance + height / 2), stage.height - height, 8);
      return {
        dx, dy, angle, left, top, width, height, pawX, pawY,
        paw: { left: pawX - pawSize * .3, top: pawY - pawSize * .3, width: pawSize * .6, height: pawSize * .6 },
        cost: order * 4 + Math.max(0, gap - room) * 2 + extra,
      };
    });
  });
}

function tutorialOverlap(a, b) {
  return Math.max(0, Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left)) *
    Math.max(0, Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top));
}

function placeTutorialGuide(card, paw, option) {
  card.style.left = `${option.left}px`;
  card.style.top = `${option.top}px`;
  paw.style.left = `${option.pawX}px`;
  paw.style.top = `${option.pawY}px`;
  paw.style.setProperty("--paw-angle", `${option.angle}deg`);
  paw.style.setProperty("--paw-x", `${-option.dx * 4}px`);
  paw.style.setProperty("--paw-y", `${-option.dy * 4}px`);
}

function positionTutorial() {
  if (tutorial.hidden || !tutorialTarget) return;
  const stage = tutorial.parentElement.getBoundingClientRect();
  if (!stage.width || !stage.height) return;
  function relativeRect(element) {
    const { left, top, width, height } = element.getBoundingClientRect();
    return { left: left - stage.left, top: top - stage.top, width, height };
  }
  const target = relativeRect(tutorialTarget);
  if (!target.width) return;
  const action = tutorialAction && tutorialAction !== tutorialTarget ? relativeRect(tutorialAction) : null;
  const dual = !tutorialShot.hidden;
  const score = option => option.cost + 5 * (tutorialOverlap(option, target) +
    (action ? tutorialOverlap(option, action) : 0));
  const first = tutorialPositions(stage, target, tutorialCard, tutorialPaw, tutorialLesson.sides, dual);
  if (!dual) {
    placeTutorialGuide(tutorialCard, tutorialPaw, first.reduce((a, b) => score(a) <= score(b) ? a : b));
    return;
  }

  const second = tutorialPositions(stage, action, tutorialShotCard, tutorialShotPaw, ["down", "left", "up", "right"], true);
  let bestPair;
  let bestCost = Infinity;
  for (const a of first) {
    for (const b of second) {
      const cost = score(a) + score(b) + 8 * tutorialOverlap(a, b) +
        3 * (tutorialOverlap(a.paw, b) + tutorialOverlap(b.paw, a) + tutorialOverlap(a.paw, b.paw)) +
        2 * (tutorialOverlap(a.paw, action) + tutorialOverlap(b.paw, target));
      if (cost < bestCost) {
        bestPair = [a, b];
        bestCost = cost;
      }
    }
  }
  placeTutorialGuide(tutorialCard, tutorialPaw, bestPair[0]);
  placeTutorialGuide(tutorialShotCard, tutorialShotPaw, bestPair[1]);
}

function hideTutorial() {
  tutorialTarget?.classList.remove("tutorial-target", "tutorial-mechanic");
  tutorialTarget?.removeAttribute("aria-describedby");
  tutorialAction?.classList.remove("tutorial-action", "tutorial-shot");
  tutorialAction?.removeAttribute("aria-describedby");
  tutorialTarget = tutorialAction = tutorialLesson = null;
  tutorialPaw.classList.remove("is-nudging");
  tutorialShotPaw.classList.remove("is-nudging");
  tutorialShot.hidden = true;
  tutorial.hidden = true;
}

function showTutorialFocus(lesson, target, action) {
  if (tutorialTarget !== target || tutorialAction !== action || tutorialLesson?.key !== lesson.key) {
    hideTutorial();
    tutorialTarget = target;
    tutorialAction = action;
    const needsShot = Boolean(action && lesson.pressArrow);
    const dual = needsShot && action !== target;
    target.classList.add("tutorial-target");
    target.classList.toggle("tutorial-mechanic", dual);
    target.setAttribute("aria-describedby", "tutorialCopy");
    action?.classList.add("tutorial-action");
    action?.classList.toggle("tutorial-shot", needsShot);
    if (dual) action.setAttribute("aria-describedby", "tutorialShotCopy");
    tutorialShot.hidden = !dual;
  }
  tutorialLesson = lesson;
  localizeTutorial(lesson);
  tutorialOkay.hidden = !lesson.acknowledge;
  tutorial.hidden = false;
  positionTutorial();
}

function syncTutorial() {
  if (levelMode === "random") {
    hideTutorial();
    return;
  }
  const bonus = !onHomeScreen && !levelCompleted && !isAnimating
    ? bonusLessons[chestState.pendingLessons[0]] : null;
  let lesson = bonus ?? tutorialLessons[levelNumber];
  if (lesson?.key === "hint" && !chestState.balance.hint) lesson = { ...lesson, acknowledge: true, note: "lesson_hint_empty" };
  if (!bonus && (!lesson || !campaignTutorial || onHomeScreen || levelCompleted ||
      gameStorage.getItem(`bp_tutorial_${lesson.key}`))) {
    hideTutorial();
    return;
  }
  const arrowIndex = lesson.findArrow ? grid.findIndex(lesson.findArrow) : -1;
  const action = arrowIndex < 0 ? null : board.children[arrowIndex];
  const target = lesson.findArrow
    ? action && board.children[tutorialTile(lesson, arrowIndex)]
    : document.querySelector(lesson.target);
  if (!target) {
    hideTutorial();
    return;
  }
  if (lesson.splitAxis === "triple") previewTripleSplitters(arrowIndex);
  showTutorialFocus(lesson, target, action);
}

function finishTutorial(key, index) {
  if (finishBonusTutorial(key)) return;
  if (tutorialLesson?.key !== key || (tutorialLesson.findArrow && key !== "shell" && tutorialAction?.dataset.i !== String(index))) return;
  gameStorage.setItem(`bp_tutorial_${key}`, "1");
  platform.track("tutorial_completed", { level: levelNumber, step: key });
  hideTutorial();
}

function nudgeTutorialPaw() {
  const paw = tutorialShot.hidden ? tutorialPaw : tutorialShotPaw;
  paw.classList.remove("is-nudging");
  void paw.getBoundingClientRect();
  paw.classList.add("is-nudging");
}

tutorial.addEventListener("animationend", event => {
  if (event.animationName === "tutorialNudge") event.target.classList.remove("is-nudging");
});
tutorialOkay.addEventListener("click", () => {
  if (!tutorialLesson?.acknowledge) return;
  finishTutorial(tutorialLesson.key);
});
window.addEventListener("resize", positionTutorial);

const compactHud = window.matchMedia("(max-width: 899px), (pointer: coarse) and (max-height: 600px)");

function placeLives() {
  const game = document.getElementById("gameScreen");
  const hearts = document.getElementById("hearts");
  const target = game.querySelector(compactHud.matches ? ".play-field" : ".game-header-center");
  game.classList.toggle("compact-hud", compactHud.matches);
  if (hearts.parentElement !== target) target.appendChild(hearts);
  positionTutorial();
}

const BONUS_STORAGE_KEY = "bp_bonus_inventory";
const bonusInventory = { heart: 0, route: 0 };
const spareHeartButton = document.getElementById("spareHeartButton");
const routeBonusButton = document.getElementById("routeBonusButton");
const routePreview = document.getElementById("routePreview");
let spareLifeUsed = false;
let spareLifeActive = false;
let routeHint = null;

function readBonusInventory(useStarter = true) {
  try {
    const saved = JSON.parse(gameStorage.getItem(BONUS_STORAGE_KEY));
    if (saved && typeof saved === "object") {
      return Object.fromEntries(["heart", "route"].map(kind => [
        kind, Number.isSafeInteger(saved[kind]) ? Math.max(0, saved[kind]) : 0
      ]));
    }
  } catch {
    // The bonuses remain usable for this session if browser storage is unavailable.
  }
  return useStarter ? { heart: 5, route: 1 } : null;
}

function consumeBonus(kind) {
  return useChestBonus(kind);
}

function updateBonusControls() {
  for (const [kind, button, label] of [
    ["heart", spareHeartButton, t("heart")],
    ["route", routeBonusButton, t("route")]
  ]) {
    const count = bonusInventory[kind];
    button.querySelector(".hint-count").textContent = formatNumber(count);
    button.title = label;
    button.setAttribute("aria-label", `${label} · ${count}`);
    button.disabled = (kind === "heart" ? spareLifeUsed || count === 0 : !routeHint && count === 0);
  }
  routeBonusButton.setAttribute("aria-pressed", String(Boolean(routeHint)));
}

function useSpareHeart() {
  if (tutorialLesson?.key === "bonus-route") { nudgeTutorialPaw(); return; }
  if (isAnimating || levelCompleted || lives === 0 || spareLifeUsed || !consumeBonus("heart")) return;
  finishBonusTutorial("bonus-heart");
  spareLifeUsed = spareLifeActive = true;
  lives += 1;
  updateHeartsDisplay();
  updateBonusControls();
  setMessage("lifeAdded");
}

function useRouteHint() {
  if (isAnimating || levelCompleted || lives === 0) return;
  if (tutorialLesson?.key === "hint" || tutorialLesson?.key === "bonus-heart") {
    nudgeTutorialPaw();
    return;
  }
  if (routeHint) {
    setMessage("tapHighlighted");
    return;
  }
  if (!bonusInventory.route) return;
  const tutorialIndex = tutorialLesson?.findArrow ? Number(tutorialAction?.dataset.i) : -1;
  let index = isHintCandidate(grid[tutorialIndex], tutorialIndex) ? tutorialIndex
    : isHintCandidate(grid[hintIndex], hintIndex) ? hintIndex : -1;
  if (index < 0) {
    const first = findLevelSolution(grid, 4000).path?.[0];
    index = first ? (first.row - 1) * boardSize + first.column - 1 : grid.findIndex(isHintCandidate);
  }
  if (index < 0) {
    setMessage("noHint");
    return;
  }
  if (!consumeBonus("route")) return;
  finishBonusTutorial("bonus-route");
  routeHint = { index, plan: buildArrowPlan(index, grid[index]) };
  previewTripleSplitters(index, true);
  updateBonusControls();
  drawRouteHint();
  playGameSound("hint");
  setMessage("tapHighlighted");
}

function clearRouteHint() {
  if (!routeHint) return;
  board.children[routeHint.index]?.classList.remove("route-origin");
  routeHint = null;
  routePreview.setAttribute("hidden", "");
  routePreview.replaceChildren();
  updateBonusControls();
}

function refreshRouteHint() {
  if (!routeHint) return;
  const { index } = routeHint;
  const arrow = grid[index];
  const plan = arrow?.type === "arrow" ? buildArrowPlan(index, arrow) : null;
  if (!plan || !isSuccessfulShot(plan)) {
    clearRouteHint();
    return;
  }
  routeHint.plan = plan;
  drawRouteHint();
}

function drawRouteHint() {
  if (!routeHint || isAnimating || !boardWrap.clientWidth) return;
  const size = board.children[routeHint.index]?.getBoundingClientRect().width;
  if (!size) return;
  const paths = [];
  const heads = [];
  const joints = new Map();
  for (const segment of shotSegments(routeHint.plan.main)) {
    const indices = segment.points.map(point => point.index)
      .filter((index, position, all) => index !== all[position - 1]);
    if (indices.length < 2) continue;
    const points = indices.map(cellCenter);
    if (points.some(point => !point)) continue;
    if (segment === routeHint.plan.main) {
      const [start, next] = points;
      const length = Math.hypot(next.x - start.x, next.y - start.y);
      const offset = size * .36 / length;
      points[0] = { x: start.x + (next.x - start.x) * offset, y: start.y + (next.y - start.y) * offset };
    }
    const last = points.at(-1);
    if (segment.branches.length) {
      joints.set(indices.at(-1), last);
    } else {
      const before = points.at(-2);
      const dx = Math.sign(last.x - before.x);
      const dy = Math.sign(last.y - before.y);
      const arrow = Math.min(7, size * .23);
      const x = last.x - dx * arrow;
      const y = last.y - dy * arrow;
      heads.push(`<path d="M${x - dy * arrow * .6} ${y + dx * arrow * .6} L${last.x} ${last.y} L${x + dy * arrow * .6} ${y - dx * arrow * .6} Z"/>`);
      points[points.length - 1] = { x, y };
    }
    paths.push("M" + points.map(({ x, y }) => `${x} ${y}`).join(" L"));
  }
  const weight = Math.max(2.2, Math.min(5.2, size * .12));
  const dash = Math.max(7, weight * 2.25);
  const path = paths.join(" ");
  routePreview.innerHTML = `<g fill="none" stroke-linecap="round" stroke-dasharray=".01 ${dash}">
    <path d="${path}" stroke="#d88309" stroke-width="${weight + 1.8}"/>
    <path d="${path}" stroke="#fff7c7" stroke-width="${weight}"/>
  </g><g fill="#fff7c7" stroke="#d88309" stroke-width="1.25" stroke-linejoin="round">
    ${[...joints.values()].map(({ x, y }) => `<circle cx="${x}" cy="${y}" r="${weight * .85}"/>`).join("")}
    ${heads.join("")}
  </g>`;
  board.children[routeHint.index].classList.add("route-origin");
  routePreview.removeAttribute("hidden");
}

function resetAttemptBonuses() {
  spareLifeUsed = spareLifeActive = false;
  clearRouteHint();
}

spareHeartButton.addEventListener("click", useSpareHeart);
routeBonusButton.addEventListener("click", useRouteHint);
new ResizeObserver(drawRouteHint).observe(boardWrap);

const hintButton = document.getElementById("hintButton");
const hintBadge = document.getElementById("hints");
let hintAdPending = false;
const victoryReward = document.getElementById("victoryReward");
const rewardMessage = document.getElementById("victoryRewardMessage");

function updateHintControl() {
  const count = chestState.balance.hint;
  const label = count ? t("hintCount", { count }) : t("noHints");
  hintBadge.querySelector(".hint-stock").textContent = formatNumber(count);
  hintButton.disabled = count === 0;
  hintButton.setAttribute("aria-label", label);
  hintButton.title = label;
}

function updateRewardOffer() {
  victoryReward.hidden = rewardOpportunityUsed || chestState.balance.hint !== 0 ||
    performance.now() - rewardedAt < config.rewardCooldownSeconds * 1000 ||
    !platform.canShowAd("rewarded");
  setLocalizedText(victoryReward, "watchHint");
}

async function requestVictoryReward() {
  if (victoryReward.hidden || platformBlocksGame() || !levelCompleted || lives <= 0) return;
  rewardOpportunityUsed = true;
  hintAdPending = true;
  rewardedAt = performance.now();
  victoryReward.disabled = true;
  const next = document.getElementById("nextLevelAction");
  next.disabled = true;
  rewardMessage.hidden = false;
  setLocalizedText(rewardMessage, "adLoading");
  handlePresentationChange();
  let result;
  try { result = await platform.showAd("rewarded", "extra_hint"); }
  catch { result = "unavailable"; }
  finally {
    hintAdPending = false;
    victoryReward.disabled = false;
    next.disabled = false;
  }
  if (result === "rewarded") {
    syncChestState();
    chestState.balance.hint++;
    saveChestState();
    platform.track("hint_rewarded", { level: levelNumber });
  }
  setLocalizedText(rewardMessage, result === "rewarded" ? "rewardHint" : "adUnavailable");
  updateRewardOffer();
  handlePresentationChange();
  next.focus({ preventScroll: true });
}
victoryReward.addEventListener("click", requestVictoryReward);

let startupPending = true;
let fullAdPending = false;
let reviewPending = false;
let purchaseOverlay = false;
let pageFocused = true;
let gameplayReported = false;
let playingLevel;
let rewardedAt = -Infinity;
let rewardOpportunityUsed = false;

function platformBlocksGame() {
  return startupPending || !pageFocused || document.hidden || platform.paused ||
    fullAdPending || hintAdPending || reviewPending || purchaseOverlay;
}

function syncPlatformGameplay() {
  const playing = !startupPending && !onHomeScreen && !levelCompleted && !platform.paused &&
    !fullAdPending && !hintAdPending && !reviewPending && !purchaseOverlay &&
    document.getElementById("settingsOverlay").hidden && document.getElementById("languageOverlay").hidden &&
    !chestDialog.open && !finaleDialog.open && !document.getElementById("profileOverlay").open;
  if (gameplayReported === playing) return;
  gameplayReported = playing;
  platform.gameplay(playing);
  if (playing) {
    const tag = levelMode + ":" + levelNumber;
    platform.level(playingLevel === tag ? "level_resumed" : "level_started", levelNumber, levelMode);
    playingLevel = tag;
  } else if (!levelCompleted) platform.level("level_paused", levelNumber, levelMode);
}

function syncPlatformAudio() {
  if (platformBlocksGame() || platform.muted) {
    muteGameAudio();
    if (audioMaster) audioMaster.gain.value = 0;
  } else if (audioMaster) {
    audioMaster.gain.value = .87;
    ensureGameAudio();
  }
}

function handlePresentationChange() {
  syncPlatformAudio();
  syncPlatformGameplay();
  for (const animation of flightAnimations) {
    if (platformBlocksGame() && animation.playState === "running") animation.pause();
    else if (!platformBlocksGame() && animation.playState === "paused") animation.play();
  }
}

async function runLevelTransition(action, placement) {
  if (platformBlocksGame() || !levelCompleted) return;
  if (!rewardOpportunityUsed && platform.canShowAd("interstitial")) {
    fullAdPending = true;
    // An inert result dialog cannot also trigger retry/next with a keyboard or a double click.
    const result = document.getElementById("overlay");
    result.inert = true;
    result.classList.add("ad-wait");
    handlePresentationChange();
    try { await platform.showAd("interstitial", placement); }
    catch {}
    finally {
      fullAdPending = false;
      result.inert = false;
      result.classList.remove("ad-wait");
    }
  }
  rewardOpportunityUsed = false;
  action();
  handlePresentationChange();
}

function runNextLevel() {
  if (lives > 0) void runLevelTransition(nextLevel, "level_completed");
}

function runRetry() {
  if (lives <= 0) void runLevelTransition(resetLevel, "level_failed");
}

const flightAnimations = new Set();

async function playFlight(projectile, frames, duration, events, applyEvent) {
  if (typeof projectile.animate !== "function") {
    projectile.style.transform = frames.at(-1).transform;
    events.forEach(applyEvent);
    return duration;
  }
  const animation = projectile.animate(frames, { duration, easing: "linear", fill: "forwards" });
  flightAnimations.add(animation);
  if (platformBlocksGame()) animation.pause();
  let nextEvent = 0;
  let frame;
  function applyThrough(time) {
    while (nextEvent < events.length && events[nextEvent].time <= time) applyEvent(events[nextEvent++]);
  }
  function advance() {
    applyThrough(Number(animation.currentTime) || 0);
    if (nextEvent < events.length) frame = requestAnimationFrame(advance);
  }
  advance();
  try {
    await animation.finished;
  } finally {
    cancelAnimationFrame(frame);
    flightAnimations.delete(animation);
  }
  applyThrough(duration);
  return duration;
}

let readyReported = false;
function finishReleaseStartup() {
  if (!startupPending) return;
  startupPending = false;
  document.getElementById("homeScreen").removeAttribute("aria-busy");
  document.documentElement.classList.remove("release-starting");
  document.getElementById("releaseLoading").remove();
  if (!readyReported) {
    readyReported = true;
    platform.ready();
    platform.progress(Math.min(100, Math.floor((campaignLevel - 1) * 100 / CAMPAIGN_LEVEL_COUNT)));
  }
  handlePresentationChange();
}

function loadPortGame() {
  setLanguage(startupLocale(), false);
  soundEnabled = gameStorage.getItem("bp_sound") !== "off";
  updateSoundButton();
  document.dispatchEvent(new Event("bubble-port-ready"));
  const art = [...document.querySelectorAll("#homeScreen img[src], .bp-backdrop img[src]")];
  art.push(...skinImages(document.getElementById("homeContinue"), ["--play-left", "--play-middle", "--play-right"]));
  const unique = new Map(art.map(image => [image.src, image]));
  const text = document.getElementById("homeLevelLabel");
  const font = getComputedStyle(text).fontFamily.split(",")[0];
  void Promise.all([...Array.from(unique.values(), image => image.decode()),
    document.fonts.load(`750 24px ${font}`, text.textContent), document.fonts.ready])
    .then(finishReleaseStartup, showStartupRetry);
}

platformSignals = handlePresentationChange;
document.addEventListener("bubble-payment-overlay", event => {
  purchaseOverlay = event.detail;
  handlePresentationChange();
});
document.addEventListener("bubble-save-conflict", () => {
  document.getElementById("port-save-status").hidden = false;
});
window.addEventListener("blur", () => { pageFocused = false; handlePresentationChange(); });
window.addEventListener("focus", () => { pageFocused = true; handlePresentationChange(); });
document.addEventListener("visibilitychange", handlePresentationChange);
document.addEventListener("keydown", event => {
  if (event.key === "Tab") document.documentElement.dataset.keyboardNavigation = "";
}, { capture: true });
document.addEventListener("pointerdown", () => {
  delete document.documentElement.dataset.keyboardNavigation;
}, { capture: true, passive: true });
for (const event of ["pointerup", "touchend", "click", "keydown"]) {
  document.addEventListener(event, () => {
    if (audioContext && audioContext.state !== "running" && !platformBlocksGame() && !platform.muted) {
      bestEffort(() => audioContext.resume());
    }
  }, { passive: true });
}
document.addEventListener("contextmenu", event => {
  if (!event.target.closest("input, textarea")) event.preventDefault();
});

const CHEST_STORAGE_KEY = "bp_chest_progress";
const CHEST_INTERVAL = 10;
const chestRewards = [
  { id: "hint", kind: "hint", amount: 1, weight: 4 },
  { id: "hints", kind: "hint", amount: 2, weight: 2 },
  { id: "heart", kind: "heart", amount: 1, weight: 3 },
  { id: "route", kind: "route", amount: 1, weight: 3 },
  { id: "CA1", kind: "avatar", weight: 1 },
  { id: "CA2", kind: "avatar", weight: 1 },
  { id: "CF1", kind: "frame", weight: 1 },
  { id: "PR1", kind: "frame", weight: 1 },
  { id: "PR2", kind: "frame", weight: 1 }
];
const chestDialog = document.getElementById("chestDialog");
const chestButton = document.getElementById("homeChestButton");
const chestClose = document.getElementById("chestClose");
const chestAction = document.getElementById("chestAction");
const chestBalance = { hint: 0, heart: 0, route: 0 };
const bonusLessons = {
  heart: {
    key: "bonus-heart", target: "#spareHeartButton", acknowledge: true, sides: ["up", "left", "right", "down"],
  },
  route: {
    key: "bonus-route", target: "#routeBonusButton", acknowledge: true, sides: ["up", "left", "right", "down"],
  }
};
let chestVictoryPending = false;
let chestState = readChestState() ?? migrateChestState();
let rewardBeingShown = null;

function chestCount(value) {
  return Number.isSafeInteger(value) && value >= 0 ? value : 0;
}

function readChestState() {
  try {
    const saved = JSON.parse(gameStorage.getItem(CHEST_STORAGE_KEY));
    if (!saved || !Array.isArray(saved.wins)) return null;
    return {
      wins: [...new Set(saved.wins.filter(number =>
        Number.isInteger(number) && number >= 1 && number <= CAMPAIGN_LEVEL_COUNT))],
      chests: chestCount(saved.chests),
      randomWins: chestCount(saved.randomWins),
      balance: Object.fromEntries(Object.keys(chestBalance).map(kind => [kind, chestCount(saved.balance?.[kind])])),
      unlocked: chestRewards.filter(reward => !reward.amount && saved.unlocked?.includes?.(reward.id))
        .map(reward => reward.id),
      pendingLessons: savedBonusLessons(saved.pendingLessons),
      taughtLessons: savedBonusLessons(saved.taughtLessons),
      lastReward: chestRewards.some(reward => reward.id === saved.lastReward) ? saved.lastReward : null,
      rewardSerial: chestCount(saved.rewardSerial)
    };
  } catch {
    return null;
  }
}

function migrateChestState() {
  const completed = Math.min(campaignLevel - 1, CAMPAIGN_LEVEL_COUNT);
  const legacy = readBonusInventory(false);
  return {
    wins: Array.from({ length: completed }, (_, index) => index + 1),
    chests: Math.floor(completed / CHEST_INTERVAL),
    randomWins: 0,
    balance: { hint: 3, heart: legacy?.heart ?? 0, route: legacy?.route ?? 0 },
    unlocked: [],
    pendingLessons: [],
    taughtLessons: [],
    lastReward: null,
    rewardSerial: 0
  };
}

function savedBonusLessons(value) {
  return Array.isArray(value) ? [...new Set(value.filter(kind => Object.hasOwn(bonusLessons, kind)))] : [];
}

function finishBonusTutorial(key) {
  const kind = key.slice("bonus-".length);
  if (tutorialLesson?.key !== key || !Object.hasOwn(bonusLessons, kind)) return false;
  syncChestState();
  chestState.pendingLessons = chestState.pendingLessons.filter(pending => pending !== kind);
  if (!chestState.taughtLessons.includes(kind)) chestState.taughtLessons.push(kind);
  saveChestState();
  hideTutorial();
  syncTutorial();
  return true;
}

function syncChestState() {
  chestState = readChestState() ?? chestState;
}

function saveChestState() {
  try {
    gameStorage.setItem(CHEST_STORAGE_KEY, JSON.stringify(chestState));
  } catch {
    // Preserve the current session when storage is unavailable.
  }
  updateChestControls();
}

function useChestBonus(kind) {
  syncChestState();
  if (!chestState.balance[kind]) {
    updateChestControls();
    return false;
  }
  chestState.balance[kind]--;
  saveChestState();
  return true;
}

function recordChestWin(number, random, updates) {
  syncChestState();
  chestVictoryPending = false;
  if (random || !chestState.wins.includes(number)) {
    if (random) chestState.randomWins++;
    else chestState.wins.push(number);
    chestVictoryPending = (chestState.wins.length + chestState.randomWins) % CHEST_INTERVAL === 0;
    if (chestVictoryPending) chestState.chests++;
    if (!chestState.balance.hint && config.hintRecoveryWins > 0 &&
        (chestState.wins.length + chestState.randomWins) % config.hintRecoveryWins === 0) chestState.balance.hint++;
    updates[CHEST_STORAGE_KEY] = JSON.stringify(chestState);
  }
  gameStorage.setItems(updates);
  updateChestControls();
}

function hasChestCosmetic(id) {
  return !chestRewards.some(reward => !reward.amount && reward.id === id) || chestState.unlocked.includes(id);
}

function rollChestReward() {
  const options = chestRewards.filter(reward => reward.amount || !chestState.unlocked.includes(reward.id));
  let roll = Math.random() * options.reduce((total, reward) => total + reward.weight, 0);
  for (const reward of options) {
    roll -= reward.weight;
    if (roll < 0) return reward;
  }
  return options.at(-1);
}

function updateChestControls() {
  Object.assign(bonusInventory, chestState.balance);
  updateBonusControls();
  updateHintControl();
  const total = chestState.chests + Number(Boolean(chestState.lastReward));
  for (const [button, badge] of [
    [chestButton, document.getElementById("homeChestCount")],
    [document.getElementById("homeButton"), document.getElementById("gameChestCount")]
  ]) {
    badge.hidden = total === 0;
    badge.textContent = formatNumber(total);
    const label = button === chestButton ? t("chests") : t("home");
    button.setAttribute("aria-label", total ? `${label} · ${total}` : label);
  }
}

function localizeChest(state, reward) {
  const title = document.getElementById("chestTitle");
  title.textContent = t(state === "earned" ? "chestEarned" : state === "empty" ? "chests" : "reward");
  chestClose.setAttribute("aria-label", t("close"));
  const copy = document.getElementById("chestCopy");
  copy.hidden = state === "earned";
  copy.textContent = state === "empty" ? t("noRewards") : reward ? t((reward.amount ? "reward_" : "cosmetic_") + reward.id) : "";
  const progress = document.getElementById("chestProgress");
  progress.hidden = state !== "empty";
  const wins = (chestState.wins.length + chestState.randomWins) % CHEST_INTERVAL;
  progress.textContent = t("chestProgress", { count: wins });
  localizeChestActions(state, reward);

}

function showChest(state, reward, fromVictory = state === "earned") {
  chestDialog.dataset.origin = fromVictory ? "victory" : "home";
  chestDialog.dataset.state = state;
  chestDialog.dataset.reward = reward?.id ?? "";
  localizeChest(state, reward);
  const picture = document.getElementById("chestPrize");
  picture.hidden = state !== "reward";
  if (reward) {
    if (reward.amount) {
      const buttonId = { hint: "hintButton", heart: "spareHeartButton", route: "routeBonusButton" }[reward.kind];
      const icon = document.querySelector(`#${buttonId} svg`).cloneNode(true);
      icon.removeAttribute("class");
      if (reward.kind === "heart") {
        const symbol = document.getElementById("bonus-heart");
        icon.replaceChildren(...[...symbol.children].map(element => element.cloneNode(true)));
      }
      for (const element of icon.querySelectorAll("[id]")) {
        for (const attr of ["fill", "stroke"]) {
          for (const shape of icon.querySelectorAll(`[${attr}="url(#${element.id})"]`)) {
            shape.setAttribute(attr, `url(#chest-${element.id})`);
          }
        }
        element.id = "chest-" + element.id;
      }
      picture.replaceChildren(icon);
    } else {
      const icon = document.querySelector(`#profileOverlay [data-${reward.kind}="${reward.id}"] img`).cloneNode();
      picture.replaceChildren(icon);
    }
  } else picture.replaceChildren();
  if (!chestDialog.open) chestDialog.showModal();
  (state === "earned" ? chestClaimReward : chestAction).focus({ preventScroll: true });
}

function showChestBeforeVictory() {
  if (!chestVictoryPending) return false;
  chestVictoryPending = false;
  showChest("earned");
  playGameSound("chestAppear");
  return true;
}

const chestClaimReward = document.getElementById("chestClaimReward");

function localizeChestActions(state, reward) {
  const fromVictory = chestDialog.dataset.origin === "victory";
  chestClaimReward.hidden = state !== "earned";
  chestAction.textContent = t(fromVictory ? "continueGame" : "done");
  if (state === "empty") chestAction.textContent = t("level", { count: levelNumber });
  chestAction.classList.toggle("bp-cream", state === "earned");
  chestAction.classList.toggle("bp-green", state !== "earned");
  chestClose.hidden = fromVictory;

  const info = document.getElementById("chestPrizeInfo");
  info.hidden = !reward;
  info.textContent = reward ? t(reward.amount ? "prizeBonus" : reward.kind === "avatar" ? "prizeAvatar" : "prizeFrame") : "";
}

function grantChestReward(keepForHome) {
  if (chestState.chests === 0 || saveConflict) return null;
  const reward = rollChestReward();
  chestState.chests--;
  if (reward.amount) {
    const { kind } = reward;
    chestState.balance[kind] += reward.amount;
    if (Object.hasOwn(bonusLessons, kind) && !chestState.pendingLessons.includes(kind) &&
        !chestState.taughtLessons.includes(kind)) chestState.pendingLessons.push(kind);
  } else chestState.unlocked.push(reward.id);
  if (keepForHome) chestState.lastReward = reward.id;
  chestState.rewardSerial++;
  saveChestState();
  return reward;
}

function openHomeChest() {
  if (chestDialog.open) return;
  syncChestState();
  const reward = chestRewards.find(item => item.id === chestState.lastReward) ?? grantChestReward(true);
  rewardBeingShown = reward ? chestState.rewardSerial : null;
  showChest(reward ? "reward" : "empty", reward);
  playGameSound(reward ? "chestReward" : "click");
}

function closeChestAndResume(resumeEmpty = false) {
  if (!chestDialog.open) return;
  const { state, origin } = chestDialog.dataset;
  if (origin === "home" && state === "reward") {
    syncChestState();
    if (chestState.lastReward && rewardBeingShown === chestState.rewardSerial) {
      chestState.lastReward = null;
      saveChestState();
    }
  }
  rewardBeingShown = null;
  chestDialog.close();
  if (origin === "victory") {
    stopResultSounds();
    showResult(true, true);
  } else if (state === "empty" && resumeEmpty) resumeFromHome();
}

chestClaimReward.addEventListener("click", () => {
  if (!chestDialog.open || chestDialog.dataset.state !== "earned") return;
  syncChestState();
  const reward = grantChestReward(false);
  if (!reward) {
    closeChestAndResume();
    return;
  }
  showChest("reward", reward, true);
  playGameSound("chestReward");
});
chestButton.addEventListener("click", openHomeChest);
chestClose.addEventListener("click", () => closeChestAndResume());
chestAction.addEventListener("click", () => closeChestAndResume(true));
chestDialog.addEventListener("cancel", event => {
  event.preventDefault();
  if (chestDialog.dataset.state !== "earned") closeChestAndResume();
});

window.addEventListener("storage", event => {
  if (event.key === config.saveKey) void flushGameSave();
});
saveChestState();

const FINALE_PENDING_KEY = "bp_campaign_finale_pending";
const finaleDialog = document.getElementById("campaignFinale");
const finaleRate = document.getElementById("finaleRate");
const finaleContinue = document.getElementById("finaleContinue");
const finaleNote = document.getElementById("finaleReviewNote");
let reviewAttempted = false;
let finaleArtReady;

function preloadFinaleArt() {
  if (!finaleArtReady) {
    const illustration = finaleDialog.querySelector(".finale-art");
    illustration.loading = "eager";
    const title = document.getElementById("finaleTitle");
    const images = [illustration, ...skinImages(finaleDialog.querySelector(".finale-panel"), ["border-image-source"], "::before")];
    for (const button of [title, finaleContinue, finaleRate]) {
      images.push(...skinImages(button, ["--left", "--center", "--right"]));
    }
    finaleArtReady = Promise.allSettled(images.map(image => image.decode()));
  }
  return finaleArtReady;
}

function showCampaignFinale() {
  const pending = Number(gameStorage.getItem(FINALE_PENDING_KEY));
  const completed = pending === 1 ? 100 : pending;
  if (completed !== CAMPAIGN_LEVEL_COUNT || campaignLevel <= CAMPAIGN_LEVEL_COUNT) return false;
  if (finaleDialog.open) return true;
  finaleNote.hidden = true;
  finaleRate.hidden = reviewAttempted || !platform.canRate();
  closeOverlay();
  finaleDialog.setAttribute("aria-busy", "true");
  finaleDialog.showModal();
  syncPlatformGameplay();
  void preloadFinaleArt().then(() => {
    finaleDialog.removeAttribute("aria-busy");
    if (!finaleDialog.open) return;
    finaleContinue.focus({ preventScroll: true });
    playGameSound("campaignFinale");
  });
  return true;
}

finaleRate.addEventListener("click", async () => {
  if (reviewPending || reviewAttempted || !platform.canRate()) return;
  reviewPending = true;
  finaleRate.disabled = finaleContinue.disabled = true;
  handlePresentationChange();
  try {
    await platform.rate();
    reviewAttempted = true;
    setLocalizedText(finaleNote, "reviewThanks");
  } catch {
    setLocalizedText(finaleNote, "reviewUnavailable");
  } finally {
    reviewPending = false;
    finaleRate.disabled = finaleContinue.disabled = false;
    finaleRate.hidden = reviewAttempted;
    finaleNote.hidden = false;
    finaleContinue.focus({ preventScroll: true });
    handlePresentationChange();
  }
});
finaleDialog.addEventListener("cancel", event => event.preventDefault());
finaleContinue.addEventListener("click", () => {
  if (!finaleDialog.open || reviewPending) return;
  gameStorage.removeItem(FINALE_PENDING_KEY);
  finaleDialog.close();
  resumeSavedLevel();
  syncPlatformGameplay();
  board.querySelector(".cell[data-arrow]")?.focus({ preventScroll: true });
});

compactHud.addEventListener("change", placeLives);
placeLives();

applyLanguage();
render();
goHome();

;

function createCosmeticPurchases(cosmetics, onOwnershipChanged) {
  const products = new Set(cosmetics.map(asset => asset.product).filter(Boolean));
  const dialog = document.getElementById("avatarPurchaseDialog");
  const buy = document.getElementById("avatarPurchaseBuy");
  const close = document.getElementById("avatarPurchaseClose");
  const message = document.getElementById("avatarPurchaseMessage");
  let catalog = new Map();
  let owned = new Set();
  const receipts = new Set();
  let refreshing;
  let selected;
  let busy = false;

  function refresh() {
    if (!config.purchases || busy) return Promise.resolve();
    if (refreshing) return refreshing;
    refreshing = (async () => {
      const [purchases, offers] = await Promise.allSettled([platform.purchases(), platform.offers()]);
      if (purchases.status === "fulfilled") {
        owned = new Set([...purchases.value.filter(id => products.has(id)), ...receipts]);
      }
      if (offers.status === "fulfilled") {
        catalog = new Map(offers.value.filter(item => products.has(item.id) &&
          typeof item.price === "string" && item.price.trim()).map(item => [item.id, item]));
      }
    })().finally(() => {
      refreshing = null;
      onOwnershipChanged();
    });
    return refreshing;
  }

  function show(asset, label) {
    if (!catalog.has(asset.product) || owned.has(asset.product)) return;
    selected = asset.product;
    document.getElementById("avatarPurchaseTitle").textContent = label;
    document.getElementById("avatarPurchasePortrait").src = asset.image;
    document.getElementById("avatarPurchasePrice").textContent = catalog.get(selected).price;
    setLocalizedText(buy.firstElementChild, "buy");
    buy.hidden = false;
    setLocalizedText(message, "purchaseOffer");
    dialog.showModal();
    close.focus({ preventScroll: true });
  }

  buy.addEventListener("click", async () => {
    const id = selected;
    if (busy || !catalog.has(id) || owned.has(id)) return;
    busy = true;
    buy.disabled = close.disabled = true;
    document.dispatchEvent(new CustomEvent("bubble-payment-overlay", { detail: true }));
    try {
      if (!await platform.buy(id)) throw new Error("Purchase not confirmed");
      receipts.add(id);
      owned.add(id);
      buy.hidden = true;
      setLocalizedText(message, "purchaseOwned");
    } catch {
      setLocalizedText(message, "purchaseFailed");
    } finally {
      busy = false;
      buy.disabled = close.disabled = false;
      document.dispatchEvent(new CustomEvent("bubble-payment-overlay", { detail: false }));
      onOwnershipChanged();
      close.focus({ preventScroll: true });
    }
    void refresh();
  });
  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("cancel", event => { if (busy) event.preventDefault(); });
  document.addEventListener("bubble-port-ready", () => { void refresh(); });
  return { owns: product => owned.has(product), offers: product => catalog.has(product), refresh, show };
}

(() => {
  const assets = JSON.parse(document.getElementById("profileAssets").textContent);
  const dialog = document.getElementById("profileOverlay");
  const opener = document.getElementById("homeProfileButton");
  const homeBadge = document.getElementById("homeProfileBadge");
  const form = document.getElementById("profileForm");
  const name = document.getElementById("profileName");
  const close = document.getElementById("profileClose");
  const edit = document.getElementById("profileEditName");
  const tabs = [...dialog.querySelectorAll("[role=tab]")];
  const avatarOptions = document.getElementById("profileAvatars");
  const frameOptions = document.getElementById("profileFrames");
  const pages = document.getElementById("profilePages");
  const pageLabel = document.getElementById("profilePage");
  const previous = document.getElementById("profilePrevious");
  const next = document.getElementById("profileNext");
  const storageKey = "bp_player_profile";
  const pageSize = 8;
  const defaults = { name: "", avatar: "A2", frame: "R5" };
  let profile = loadProfile();
  let draft = { ...profile };
  let activeTab = 0;
  let page = [0, 0];
  const cosmetics = [...assets.avatars, ...assets.frames];
  const purchases = cosmetics.some(asset => asset.product)
    ? createCosmeticPurchases(cosmetics, () => {
      localize();
      updateSelection();
      updateBadge(homeBadge, profile);
      setPage(page[activeTab]);
    }) : null;

  function loadProfile() {
    try {
      const saved = JSON.parse(gameStorage.getItem(storageKey));
      if (saved) return {
        name: typeof saved.name === "string" ? saved.name.slice(0, 24).trim() : defaults.name,
        avatar: assets.avatars.some(asset => asset.id === saved.avatar) ? saved.avatar : defaults.avatar,
        frame: assets.frames.some(asset => asset.id === saved.frame) ? saved.frame : defaults.frame
      };
    } catch {
      // Keep the profile usable if browser storage is unavailable.
    }
    return { ...defaults };
  }

  function fromChestLocked(asset) {
    return typeof hasChestCosmetic === "function" && !hasChestCosmetic(asset.id);
  }

  function purchaseLocked(asset) {
    return Boolean(asset.product && !purchases?.owns(asset.product));
  }

  function cosmeticForDisplay(options, id, fallback) {
    const asset = options.find(option => option.id === id);
    return asset && !purchaseLocked(asset) && !fromChestLocked(asset)
      ? asset : options.find(option => option.id === fallback);
  }

  function updateBadge(root, selection) {
    const avatar = cosmeticForDisplay(assets.avatars, selection.avatar, defaults.avatar);
    const frame = cosmeticForDisplay(assets.frames, selection.frame, defaults.frame);
    root.querySelector(".profile-badge-mask img").src = avatar.image;
    root.querySelector(".profile-badge-frame").src = frame.image;
    root.style.setProperty("--profile-mask", `url("${frame.mask}")`);
    ["x", "y", "width", "height"].forEach((property, index) => {
      root.style.setProperty(`--portrait-${property}`, `${frame.opening[index]}%`);
    });
  }

  function cosmeticTitle(asset, property, index) {
    return t("cosmetic_" + asset.id);
  }

  function makeOptions(group, property, options) {
    return options.map((asset, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "profile-option";
      button.dataset[property] = asset.id;
      const icon = new Image();
      icon.alt = "";
      icon.loading = "lazy";
      icon.src = asset.image;
      icon.draggable = false;
      button.append(icon);
      button.addEventListener("click", () => {
        if (purchaseLocked(asset)) {
          purchases.show(asset, cosmeticTitle(asset, property, index), property);
          return;
        }
        if (fromChestLocked(asset)) {
          button.querySelector(".chest-lock-label")?.remove();
          const label = document.createElement("span");
          label.className = "chest-lock-label";
          setLocalizedText(label, "fromChest");
          button.append(label);
          setTimeout(() => label.remove(), 1700);
          return;
        }
        draft[property] = asset.id;
        updateSelection();
      });
      group.append(button);
      return button;
    });
  }

  const avatarButtons = makeOptions(avatarOptions, "avatar", assets.avatars);
  const frameButtons = makeOptions(frameOptions, "frame", assets.frames);

  function updateSelection() {
    const visibleAvatar = cosmeticForDisplay(assets.avatars, draft.avatar, defaults.avatar).id;
    const visibleFrame = cosmeticForDisplay(assets.frames, draft.frame, defaults.frame).id;
    for (const button of avatarButtons) {
      button.setAttribute("aria-pressed", String(visibleAvatar === button.dataset.avatar));
    }
    for (const button of frameButtons) {
      button.setAttribute("aria-pressed", String(visibleFrame === button.dataset.frame));
    }
    updateBadge(document.getElementById("profilePreview"), draft);
  }

  function describe(button, label) {
    button.setAttribute("aria-label", label);
    button.title = label;
  }

  function describeCosmetic(button, label, asset) {
    const chestLocked = fromChestLocked(asset);
    const paidLocked = purchaseLocked(asset);
    button.classList.toggle("chest-locked", chestLocked);
    button.classList.toggle("purchase-locked", paidLocked);
    button.dataset.available = String(!paidLocked || purchases?.offers(asset.product) === true);
    if (paidLocked) label +=  " · " + t("purchaseOnly");
    if (chestLocked) label +=  " · " + t("fromChest");
    describe(button, label);
  }

  function localize() {
    const labels = messages[language];
    document.getElementById("profileTitle").textContent = labels.profile;
    document.getElementById("profileDone").textContent = labels.done;
    document.getElementById("profileNameLabel").textContent = labels.playerName;
    tabs[0].textContent = labels.avatar;
    tabs[1].textContent = labels.frame;
    name.placeholder = labels.player;
    describe(opener, labels.profile);
    describe(close, labels.close);
    describe(edit, labels.edit);
    describe(previous, labels.previousPage);
    describe(next, labels.nextPage);
    avatarButtons.forEach((button, index) => {
      const asset = assets.avatars[index];
      const title = cosmeticTitle(asset, "avatar", index);
      describeCosmetic(button, index < 4 ? title : `${title} · ${labels.premium}`, asset);
    });
    frameButtons.forEach((button, index) => {
      const asset = assets.frames[index];
      const title = cosmeticTitle(asset, "frame", index);
      describeCosmetic(button, index < 10 ? title : `${title} · ${labels.premium}`, asset);
    });
  }

  function setPage(number) {
    const buttons = activeTab === 0 ? avatarButtons : frameButtons;
    const visible = buttons.filter(button => button.dataset.available !== "false");
    const pageCount = Math.max(1, Math.ceil(visible.length / pageSize));
    const current = Math.max(0, Math.min(number, pageCount - 1));
    page[activeTab] = current;
    buttons.forEach(button => {
      const index = visible.indexOf(button);
      button.hidden = index < 0 || Math.floor(index / pageSize) !== current;
    });
    pages.hidden = pageCount <= 1;
    previous.disabled = current === 0;
    next.disabled = current === pageCount - 1;
    pageLabel.textContent = `${formatNumber(current + 1)} / ${formatNumber(pageCount)}`;
  }

  function showTab(index) {
    tabs.forEach((tab, position) => {
      const active = index === position;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      tab.classList.toggle("bp-pink", active);
      tab.classList.toggle("bp-cream", !active);
      document.getElementById(tab.getAttribute("aria-controls")).hidden = !active;
    });
    activeTab = index;
    setPage(page[index]);
  }

  function changePage(delta) {
    setPage(page[activeTab] + delta);
    const button = delta > 0 ? next : previous;
    if (button.disabled) (delta > 0 ? previous : next).focus();
  }

  function fitVisibleViewport() {
    if (!dialog.open) return;
    const viewport = window.visualViewport;
    if (viewport && viewport.scale === 1 && viewport.height < innerHeight - 40) {
      dialog.style.setProperty("--profile-visible-height", `${Math.floor(viewport.height)}px`);
    } else {
      dialog.style.removeProperty("--profile-visible-height");
    }
  }

  opener.addEventListener("click", () => {
    purchases?.refresh();
    localize();
    draft = { ...profile };
    name.value = draft.name;
    page = [
      Math.floor(assets.avatars.findIndex(asset => asset.id === draft.avatar) / pageSize),
      Math.floor(assets.frames.findIndex(asset => asset.id === draft.frame) / pageSize)
    ];
    showTab(0);
    updateSelection();
    dialog.showModal();
    fitVisibleViewport();
    close.focus({ preventScroll: true });
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    profile = { ...draft, name: name.value.trim() };
    try { gameStorage.setItem(storageKey, JSON.stringify(profile)); } catch {}
    updateBadge(homeBadge, profile);
    dialog.close();
  });
  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => opener.focus({ preventScroll: true }));
  edit.addEventListener("click", () => { name.focus(); name.select(); });
  previous.addEventListener("click", () => changePage(-1));
  next.addEventListener("click", () => changePage(1));
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => showTab(index));
    tab.addEventListener("keydown", event => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const target = event.key === "Home" ? 0 : event.key === "End" ? 1 : 1 - index;
      showTab(target);
      tabs[target].focus();
    });
  });
  window.visualViewport?.addEventListener("resize", fitVisibleViewport);
  const originalApplyLanguage = applyLanguage;
  applyLanguage = function () {
    originalApplyLanguage();
    localize();
  };
  document.addEventListener("bubble-port-ready", () => {
    profile = loadProfile();
    draft = { ...profile };
    localize();
    updateBadge(homeBadge, profile);
  });
  localize();
  setPage(page[activeTab]);
  updateBadge(homeBadge, profile);
})();

;

const monitorGameplay = new MutationObserver(syncPlatformGameplay);
for (const id of ["settingsOverlay", "languageOverlay", "overlay", "chestDialog", "campaignFinale", "profileOverlay", "avatarPurchaseDialog", "gameScreen"]) {
  monitorGameplay.observe(document.getElementById(id), {attributes:true, attributeFilter:["hidden","open","style"]});
}
loadPortGame();
