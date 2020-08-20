const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round')
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Game', function() {
  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have a method buildDeck', function() {
    const game = new Game();
    expect(game.buildDeck).to.be.a('function');
  });

  it('buildDeck should build a deck', function () {
    const game = new Game();
    expect(game.buildDeck()).to.be.an.instanceof(Deck);
  });

  it('buildDeck deck should be full of cards', function () {
    const game = new Game();
    const deck = game.buildDeck();
    expect(deck.cards[0]).to.be.an.instanceof(Card);
  });

  it('should have a method beginRound', function() {
    const game = new Game();
    expect(game.beginRound).to.be.a('function');
  });

  it('beginRound should create a new Round and store it in currentRound', function () {
    const game = new Game();
    game.beginRound()
    expect(game.currentRound).to.be.an.instanceof(Round);
  });

  it('Round created with beginRound should include a deck', function () {
    const game = new Game();
    const deck = new Deck();
    game.beginRound(deck);
    expect(game.currentRound.deck).to.equal(deck);
  });
});