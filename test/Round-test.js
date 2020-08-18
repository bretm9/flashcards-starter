const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const { it } = require('mocha');

describe('Round', function() {
  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a deck property that is equal to the deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What's a food?", ['object', 'array', 'pizza'], 'pizza');
    const card3 = new Card(3, "What's my favorite food?", ['pizza', 'sushi', 'oatmeal'], 'sushi');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);
    expect(round.deck).to.equal(deck);
  });

  it('should have a method returnCurrentCard that returns the first card in the deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What's a food?", ['object', 'array', 'pizza'], 'pizza');
    const card3 = new Card(3, "What's my favorite food?", ['pizza', 'sushi', 'oatmeal'], 'sushi');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });
});