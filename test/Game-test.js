const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round')
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {
  let game;
  let deck;

  beforeEach(() => {
    game = new Game();
    deck = new Deck();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have a method buildDeck', function() {
    expect(game.buildDeck).to.be.a('function');
  });

  it('buildDeck should build a deck', function () {
    expect(game.buildDeck(prototypeQuestions)).to.be.an.instanceof(Deck);
  });

  it('buildDeck deck should be full of cards', function () {
    let deck = game.buildDeck(prototypeQuestions);
    expect(deck.cards[0]).to.be.an.instanceof(Card);
  });

  it('should have a method beginRound', function() {
    expect(game.beginRound).to.be.a('function');
  });

  it('beginRound should create a new Round and store it in currentRound', function () {
    game.beginRound()
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('Round created with beginRound should include a deck', function () {
    game.beginRound(deck);
    expect(game.currentRound.deck).to.equal(deck);
  });

  it('should have a method start', function() {
    expect(game.start).to.be.a('function');
  });
});