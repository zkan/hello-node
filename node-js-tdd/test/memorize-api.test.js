import { afterEach, describe, it, expect, vi } from 'vitest';
import supertest from 'supertest';
import { app } from '../src/app.js';
import * as db from '../src/db.js';

describe('memorize-api', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return array of 4 cards', () => {
    // const app = require('../src/app')
    const request = supertest(app);

    return request
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.body.message).toEqual('Hello World');
      });
  });

  it('create game with animal theme should return animal card', async () => {
    const request = supertest(app);

    const spy = vi.spyOn(db, 'getThemeById');
    expect(spy.getMockName()).toEqual('getThemeById');

    spy.mockReturnValue({
      id: 'cm4s5a2v00000943ul5y3zpvo',
      name: 'Animals',
      emojis: '😆',
    });

    const response = await request.post(
      '/games/theme/cm4s5a2v00000943ul5y3zpvo'
    );
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      cards: [
        { emoji: '😆', isFaceUp: false },
        { emoji: '😆', isFaceUp: false },
      ],
    });
  });
});
