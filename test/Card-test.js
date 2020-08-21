const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Card = require('../src/Card');

describe('Card', () => {
  let cards;
  
  beforeEach(() => {
    cards = prototypeQuestions.map(data => {
      return new Card(data.id, data.question, data.answers, data.correctAnswer);
    });
  });

  it('should be a function', () => {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(cards[0]).to.be.an.instanceof(Card);
  });

  it('should store an id', () => {
    expect(cards[0].id).to.equal(1);
  });

  it('should store a question', () => {
    expect(cards[0].question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', () => {
    expect(cards[0].answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', () => {
    expect(cards[0].correctAnswer).to.equal('object');
  });
});