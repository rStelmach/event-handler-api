import supertest from 'supertest';
import { app } from '../index';
import { EventRequest } from '../types/EventTypes';

const request = supertest(app);

const eventRequest: EventRequest = {
  firstName: 'Robert',
  lastName: 'Stelmach',
  email: 'robert@wp.pl',
  date: '22-06-1999',
};

describe('POST /addEvent', () => {
  it('Should create an event', async () => {
    const response = await request.post('/addEvent').send(eventRequest);
    expect(response.status).toBe(201);

    const { body: data } = response;
    const { message } = data;

    expect(message).toBe('Event Added !');
  });

  it('should throw 400 error when at least one field is empty', async () => {
    const incompleteRequest: EventRequest = {
      firstName: 'Robert',
      lastName: 'Stelmach',
      email: 'robert@wp.pl',
      date: '',
    };
    const response = await request.post('/addEvent').send(incompleteRequest);

    expect(response.status).toBe(400);
  });

  it('should throw 400 error when no data is provided', async () => {
    const response = await request.post('/addEvent').send({});

    expect(response.status).toBe(400);
  });
});
