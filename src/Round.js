const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0];
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
    
  }
}

module.exports = Round;