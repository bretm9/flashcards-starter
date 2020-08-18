const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const { it } = require('mocha');

describe('Deck', function() {
  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should store cards', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What's a food?", ['object', 'array', 'pizza'], 'pizza');
    const card3 = new Card(3, "What's my favorite food?", ['pizza', 'sushi', 'oatmeal'], 'sushi');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    expect(deck.cards).to.equal(cards);
  });

  it('should have a method countCards that counts how many cards are in the deck', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, "What's a food?", ['object', 'array', 'pizza'], 'pizza');
    const card3 = new Card(3, "What's my favorite food?", ['pizza', 'sushi', 'oatmeal'], 'sushi');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    expect(deck.countCards()).to.equal(3);
  });
});