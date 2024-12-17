import { describe, it, expect } from 'vitest'
import supertest from 'supertest'
import { app } from '../src/app'

describe('memorize-api', () => {
    it('should return array of 4 cards', () => {
        // const app = require('../src/app')
        const request = supertest(app)

        return request.get('/')
            .expect(200)
            .then(response => {
                expect(response.body.message).toEqual('Hello World')
            })
    })
})