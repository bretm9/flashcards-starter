class Turn {
  constructor(guess, cardInPlay) {
    this.guess = guess;
    this.cardInPlay = cardInPlay;
  }

  returnGuess() {
    return this.guess;
  }
}

module.exports = Turn;