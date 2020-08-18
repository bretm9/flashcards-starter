const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const { it } = require('mocha');

describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {
    const turn = new Turn('pizza');
    expect(turn.guess).to.equal('pizza');
  });
  
  it('should store a card object', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.cardInPlay).to.equal(card);
  });

  it('should have a method returnGuess that returns the guess', function() {
    const turn = new Turn('object');
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should have a method returnCard that returns the Card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    expect(turn.returnCard()).to.equal(card);
  });
});