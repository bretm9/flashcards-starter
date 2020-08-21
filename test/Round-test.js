const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const { it } = require('mocha');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let cards;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, "What's a food?", ['object', 'array', 'pizza'], 'pizza');
    card3 = new Card(3, "What's my favorite food?", ['pizza', 'sushi', 'oatmeal'], 'sushi');
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a deck property that is equal to the deck', function() {
    expect(round.deck).to.equal(deck);
  });

  it('should have a method returnCurrentCard that returns the first card in the deck', function() {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it('should have a method takeTurn', function() {
    expect(round.takeTurn).to.be.a('function');
  });

  it('takeTurn should update turns count', function() {
    round.takeTurn('pizza');
    expect(round.turns).to.equal(1);
  });
  
  it('takeTurn should evaluate an incorrect guess', function() {
    round.takeTurn('pizza');
    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('takeTurn should evaluate a correct guess', function() {
    round.takeTurn('object');
    expect(round.incorrectGuesses.length).to.equal(0);
  });
  
  it('takeTurn should store ids of incorrect guesses', function() {
    round.takeTurn('pizza');
    expect(round.incorrectGuesses[0]).to.equal(round.turns);
  });
  
  it('takeTurn should give appropriate feedback when guess is correct', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What's a food?", ['object', 'array', 'pizza'], 'pizza');
    const card3 = new Card(3, "What's my favorite food?", ['pizza', 'sushi', 'oatmeal'], 'sushi');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);
    expect(round.takeTurn('object')).to.equal('correct!');
  });

  it('takeTurn should give appropriate feedback when guess is incorrect', function() {
    expect(round.takeTurn('pizza')).to.equal('incorrect!');
  });

  it('should have a method calculatesPercentCorrect', function() {
    expect(round.calculatePercentCorrect).to.be.a('function');
  });

  it('calculatePercentCorrect should calculate the percent of correct answers', function() {
    round.takeTurn('object');
    round.takeTurn('pizza');
    round.takeTurn('pizza');
    expect(round.calculatePercentCorrect()).to.equal(66);
  });

  it('should have a method endRound', function() {
    expect(round.endRound).to.be.a('function');
  });
});