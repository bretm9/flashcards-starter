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

  evaluateGuess() {
    if (this.guess === this.cardInPlay.correctAnswer){
      return true;
    }
    return false;
  }
}

module.exports = Turn;