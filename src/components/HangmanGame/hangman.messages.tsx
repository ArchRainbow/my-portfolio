const messages = {
  title: {
    id: "hangman.title",
    defaultMessage: "Ahorcado",
  },
  hiScore: {
    id: "hangman.hiScore",
    defaultMessage: "HiScore: ",
  },
  startScreen: {
    title: {
      id: "hangman.startScreen.title",
      defaultMessage: "Bienvenido al Ahorcado",
    },
    description1: {
      id: "hangman.startScreen.description1",
      defaultMessage: "¡Adivina la palabra antes de quedarte sin intentos!",
    },
    description2: {
      id: "hangman.startScreen.description2",
      defaultMessage: "¡Haz clic en 'Iniciar' para comenzar el juego!",
    },
    start: {
      id: "hangman.startScreen.start",
      defaultMessage: "Iniciar",
    },
  },
  game: {
    attemptsLeft: {
      id: "hangman.game.attemptsLeft",
      defaultMessage: "{isTablet, select, true {Intentos: } other {I: }}",
    },
    score: {
      id: "hangman.game.score",
      defaultMessage: "{isTablet, select, true {Puntaje: } other {P: }}",
    },
    lettersUsed: {
      id: "hangman.game.lettersUsed",
      defaultMessage: "Letras usadas: ",
    },
    nextRound: {
      id: "hangman.game.nextRound",
      defaultMessage: "Siguiente ronda",
    },
    quit: {
      id: "hangman.game.quit",
      defaultMessage: "Salir",
    },
  },
  messageDisplay: {
    start: {
      id: "hangman.messageDisplay.start",
      defaultMessage: "¡Buena suerte!",
    },
    pressed: {
      id: "hangman.messageDisplay.pressed",
      defaultMessage: "Letra ya presionada",
    },
    over: {
      id: "hangman.messageDisplay.over",
      defaultMessage: "¡Perdiste!",
    },
    showWord: {
      id: "hangman.messageDisplay.showWord",
      defaultMessage: "La palabra era: {word}",
    },
    win: {
      id: "hangman.messageDisplay.win",
      defaultMessage: "¡Ganaste!",
    },
    keepGuessing: {
      id: "hangman.messageDisplay.keepGuessing",
      defaultMessage: "Sigue adivinando",
    },
    incorrectGuess: {
      id: "hangman.messageDisplay.incorrectGuess",
      defaultMessage: "Letra incorrecta",
    },
  },
  data: {
    categories: {
      plants: {
        id: "hangman.data.categories.plants",
        defaultMessage: "Plantas",
      },
      animals: {
        id: "hangman.data.categories.animals",
        defaultMessage: "Animales",
      },
      countries: {
        id: "hangman.data.categories.countries",
        defaultMessage: "Paises",
      },
      fruits: {
        id: "hangman.data.categories.fruits",
        defaultMessage: "Frutas",
      },
      colors: {
        id: "hangman.data.categories.colors",
        defaultMessage: "Colores",
      },
    },
    difficultyLevels: {
      easy: {
        id: "hangman.data.difficultyLevels.easy",
        defaultMessage: "Fácil",
      },
      medium: {
        id: "hangman.data.difficultyLevels.medium",
        defaultMessage: "Medio",
      },
      hard: {
        id: "hangman.data.difficultyLevels.hard",
        defaultMessage: "Difícil",
      },
    },
  },
};

export default messages;
