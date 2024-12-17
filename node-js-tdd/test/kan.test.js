import { test, expect } from 'vitest';
import { sum } from '../src/kan';

test('test', () => {
  expect(sum(1, 2)).toBe(3);
});

test('test 2', () => {
  expect(sum(2, 2)).toBe(4);
});
