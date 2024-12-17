import { describe, it, test, expect } from 'vitest'
import { Memorize } from '../src/memorize'

// init
// '' -> throw error 'empty string
// '😆' -> [Card(😆), Card(😆)]
// '😆😆' -> throw error 'duplicate emoji'
// '😆🥶' -> [Card(😆), Card(😆), Card(🥶), Card(🥶)]

// play game
// 

describe('int', () => {
    it('init with empty string should throw error "empty string"', () => {
        expect(() => { new Memorize('') }).toThrowError('empty string')
    })

    it('inti with "😆" should init with two cards', () => {
        const game = new Memorize('😆')
        expect(game.cards.length).toEqual(2)
    })

    it('inti with "😆😆" should throw error "duplicate emoji"', () => {
        const game = 
        expect(() => { new Memorize('😆😆') }).toThrowError('duplicate emoji')
    })

    it('inti with "😆🥶" should init with four cards', () => {
        const game = new Memorize('😆🥶')
        expect(game.cards.length).toEqual(4)
    })
})