const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const { it } = require('mocha');

describe('Deck', () => {
  let cards;
  let deck;
  
  beforeEach(() => {
    cards = prototypeQuestions.map(data => {
      return new Card(data.id, data.question, data.answers, data.correctAnswer);
    });
    deck = new Deck(cards);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should store cards', () => {
    expect(deck.cards).to.equal(cards);
  });

  it('should have a method countCards that counts how many cards are in the deck', () => {
    expect(deck.countCards()).to.equal(30);
  });
});