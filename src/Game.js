const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('./Deck')
const Card = require('./Card');
const Round = require('./Round');

class Game {
  constructor() {}

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let deck = this.buildDeck();
    this.beginRound(deck);
    this.printMessage(this.currentRound.deck, this.currentRound);
     this.printQuestion(this.currentRound);
  }

  buildDeck() {
    const cards = []
    for (var i = 0; i < prototypeQuestions.length; i++) {
      cards[i] = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer)
    }
    return new Deck(cards);
  }

  beginRound(deck) {
    this.currentRound = new Round(deck);
  }
}

module.exports = Game;