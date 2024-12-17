// - given 1 should return '1'
// - given 2 should return '2'
// - given 3 should return 'Fizz'
// - given 6 should return 'Fizz'
// - given 5 should return 'Buzz'
// - given 10 should return 'Buzz'
// - given 15 should return 'FizzBuzz'
// - given 30 should return 'FizzBuzz'

import { test, expect } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

// fizzbuzz
// number => string
test('given 1 should return 1', () => {
    expect(fizzbuzz(1)).toEqual('1')
})

test('given 3 should return Fizz', () => {
    expect(fizzbuzz(3)).toEqual('Fizz')
})

test('given 5 should return Buzz', () => {
    expect(fizzbuzz(5)).toEqual('Buzz')
})

test('given 15 should return FizzBuzz', () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz')
})