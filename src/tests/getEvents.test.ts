import supertest from 'supertest';
import { app } from '../index';

const request = supertest(app);

describe('GET /getEvents', () => {
  it('Should create return events from db', async () => {
    const response = await request.get('/getEvents');
    expect(response.status).toBe(200);

    const { body: data } = response;
    const { message } = data;

    expect(message).toBe('Events listed');
  });
});
