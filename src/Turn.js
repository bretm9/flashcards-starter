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
    if (this.guess === this.cardInPlay.correctAnswer) {
      return true;
    }
    return false;
  }

  giveFeedback() {
    var guessIsCorrect = this.evaluateGuess();
    if (guessIsCorrect) {
      return 'correct!';
    }
    return 'incorrect!';
  }
}

module.exports = Turn;