class Turn {
  constructor(guess, cardInPlay) {
    this.guess = guess;
    this.cardInPlay = cardInPlay;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.cardInPlay;
  }
}

module.exports = Turn;