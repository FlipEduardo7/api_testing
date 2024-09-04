import app from "../src/app";
import request from "supertest";

describe('GET /api/character/:id', () => {

  test('should return a list of characters', async () => {
    const response = await request('https://rickandmortyapi.com')
      .get('/api/character');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('results');
    expect(response.body.results.length).toBeGreaterThan(0);
  });

  test('should return a specific character by ID', async () => {
    const response = await request('https://rickandmortyapi.com')
      .get('/api/character/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('name', 'Rick Sanchez');
  });

});