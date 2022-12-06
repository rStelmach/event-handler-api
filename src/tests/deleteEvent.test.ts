import supertest from 'supertest';
import { app } from '../index';

const request = supertest(app);

describe('POST deleteEvent', () => {
  it('should throw 400 error when "id" is not provided', async () => {
    const response = await request.post('/deleteEvent').send({});

    expect(response.status).toBe(400);
  });

  it('should throw 400 error when "id" is empty', async () => {
    const response = await request.post('/deleteEvent').send({ id: null });

    expect(response.status).toBe(400);
  });
});
