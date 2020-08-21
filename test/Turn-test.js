const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const { it } = require('mocha');

describe('Turn', () => {
  let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  let turnCorrect = new Turn('object', card);
  let turnIncorrect = new Turn('array', card);

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turnCorrect = new Turn('object', card);
    turnIncorrect = new Turn('array', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turnCorrect).to.be.an.instanceof(Turn);
  }); 

  it('should store a guess', () => {
    expect(turnCorrect.guess).to.equal('object');
  });
  
  it('should store a card object', () => {
    expect(turnCorrect.cardInPlay).to.equal(card);
  });

  it('should have a method returnGuess that returns the guess', () => {
    expect(turnCorrect.returnGuess()).to.equal('object');
  });

  it('should have a method returnCard that returns the Card', () => {
    expect(turnCorrect.returnCard()).to.equal(card);
  });

  it("should have a method evaluateGuess that returns true if guess is correct", () => {
    expect(turnCorrect.evaluateGuess()).to.equal(true);
  });

  it("should return false if guess is incorrect", () => {
    expect(turnIncorrect.evaluateGuess()).to.equal(false);
  });

  it("should have a method giveFeedback that returns a feedback string", () => {
    expect(turnCorrect.giveFeedback()).to.equal('correct!');
  });

  it("should return 'incorrect' feedback if guess is incorrect", () => {
    expect(turnIncorrect.giveFeedback()).to.equal('incorrect!');
  });
});