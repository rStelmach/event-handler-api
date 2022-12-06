import { app } from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('GET /api/v1', () => {
  it('Should return health check response', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
  });
});

describe('Utils', () => {
  it('Should return not found error for not existing route', async () => {
    const response = await request.get('/api/v1/test');

    expect(response.status).toBe(404);
  });

  it('Should return an error with correct structure', async () => {
    const response = await request.get('/api/v1/test');

    expect(response.status).toBe(404);
  });
});
