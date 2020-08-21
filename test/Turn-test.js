const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const { it } = require('mocha');

describe('Turn', function() {
  let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  let turnCorrect = new Turn('object', card);
  let turnIncorrect = new Turn('array', card);

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turnCorrect = new Turn('object', card);
    turnIncorrect = new Turn('array', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turnCorrect).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', function() {
    expect(turnCorrect.guess).to.equal('object');
  });
  
  it('should store a card object', function() {
    expect(turnCorrect.cardInPlay).to.equal(card);
  });

  it('should have a method returnGuess that returns the guess', function() {
    expect(turnCorrect.returnGuess()).to.equal('object');
  });

  it('should have a method returnCard that returns the Card', function() {
    expect(turnCorrect.returnCard()).to.equal(card);
  });

  it("should have a method evaluateGuess that returns true if guess is correct", function() {
    expect(turnCorrect.evaluateGuess()).to.equal(true);
  });

  it("should return false if guess is incorrect", function() {
    expect(turnIncorrect.evaluateGuess()).to.equal(false);
  });

  it("should have a method giveFeedback that returns a feedback string", function() {
    expect(turnCorrect.giveFeedback()).to.equal('correct!');
  });

  it("should return 'incorrect' feedback if guess is incorrect", function() {
    expect(turnIncorrect.giveFeedback()).to.equal('incorrect!');
  });
});