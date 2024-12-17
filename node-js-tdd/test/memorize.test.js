import { describe, it, expect } from 'vitest';
import { Memorize, noShuffle } from '../src/memorize.js';

// init
// '' -> throw error 'empty string
// '😆' -> [Card(😆), Card(😆)]
// '😆😆' -> throw error 'duplicate emoji'
// '😆🥶' -> [Card(😆), Card(😆), Card(🥶), Card(🥶)]

// play game
// choose first card should face up
// choose faced up card should remain the same
// choose card after matched, the matched card should disappear
// choose card after unmatched, the unmatched card should face down

describe('game', () => {
  describe('int', () => {
    it('init with empty string should throw error "empty string"', () => {
      expect(() => {
        new Memorize('', noShuffle);
      }).toThrowError('empty string');
    });

    it('inti with "😆" should init with two cards', () => {
      const game = new Memorize('😆', noShuffle);
      expect(game.cards.length).toEqual(2);
    });

    it('inti with "😆😆" should throw error "duplicate emoji"', () => {
      const game = expect(() => {
        new Memorize('😆😆', noShuffle);
      }).toThrowError('duplicate emojis');
    });

    it('inti with "😆🥶" should init with four cards', () => {
      const game = new Memorize('😆🥶', noShuffle);
      expect(game.cards.length).toEqual(4);
    });

    it('inti with "😆🥶" should init with four cards with all face down', () => {
      const game = new Memorize('😆🥶', noShuffle);
      expect(game.cards.length).toEqual(4);
      game.cards.forEach((card) => {
        expect(card.isFaceUp).toEqual(false);
      });
    });
  });

  describe('game play', () => {
    it('choose first card should face up', () => {
      const game = new Memorize('😆🥶', noShuffle);
      expect(game.cards[0].isFaceUp).toEqual(false);
      game.choose(0);
      expect(game.cards[0].isFaceUp).toEqual(true);
    });

    it('choose card after matched, the matched card should disappear', () => {
      const game = new Memorize('😆🥶', noShuffle);
      game.choose(0);
      game.choose(1);
      game.choose(2);
      expect(game.cards[0].isMatched).toEqual(true);
      expect(game.cards[1].isMatched).toEqual(true);
    });

    it('choose card after unmatched, the unmatched card should face down', () => {
      const game = new Memorize('😆🥶', noShuffle);
      game.choose(0);
      game.choose(2);
      game.choose(1);
      expect(game.cards[0].isFaceUp).toEqual(false);
      expect(game.cards[2].isFaceUp).toEqual(false);
    });
  });
});
