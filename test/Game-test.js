const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round')
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', () => {
  let game;
  let deck;

  beforeEach(() => {
    game = new Game();
    deck = new Deck();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have a method buildDeck', () => {
    expect(game.buildDeck).to.be.a('function');
  });

  it('buildDeck should build a deck', () => {
    expect(game.buildDeck(prototypeQuestions)).to.be.an.instanceof(Deck);
  });

  it('buildDeck deck should be full of cards', () => {
    let deck = game.buildDeck(prototypeQuestions);
    expect(deck.cards[0]).to.be.an.instanceof(Card);
  });

  it('should have a method beginRound', () => {
    expect(game.beginRound).to.be.a('function');
  });

  it('beginRound should create a new Round and store it in currentRound', () => {
    game.beginRound()
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('Round created with beginRound should include a deck', () => {
    game.beginRound(deck);
    expect(game.currentRound.deck).to.equal(deck);
  });

  it('should have a method start', () => {
    expect(game.start).to.be.a('function');
  });
});