import { describe, it, test, expect } from 'vitest'
import { Memorize } from '../src/memorize'

// init
// '' -> throw error 'empty string
// '😆' -> [Card(😆), Card(😆)]
// '😆😆' -> throw error 'duplicate'
// '😆🥶' -> [Card(😆), Card(😆), Card(🥶), Card(🥶)]

// play game
// 

describe('int', () => {
    it('init with empty string should throw error', () => {
        expect(() => { new Memorize('') }).toThrowError('empty string')
    })
})