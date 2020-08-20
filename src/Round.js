const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck || {cards: []};
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    if(this.deck.cards.length > 0) {
      return this.deck.cards[0];
    }
    return null;
  }

  takeTurn(guess) {
    this.turns ++;
    let newTurn = new Turn(guess, this.returnCurrentCard());
    newTurn.id = this.turns;
    this.deck.cards.shift();
    if (!newTurn.evaluateGuess()) {
      this.incorrectGuesses.push(newTurn.id);
    }
    return newTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor((100 - (this.incorrectGuesses.length / this.turns * 100)));
  }

  endRound() {
    return `Round over! you answered ${this.calculatePercentCorrect()}% of the questions correctly`;
  }
}

module.exports = Round;