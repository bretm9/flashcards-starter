const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const { it } = require('mocha');

describe('Deck', function() {
  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });
});