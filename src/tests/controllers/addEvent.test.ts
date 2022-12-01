import { Request, Response } from 'express';
import { BadRequestError } from '../../exceptions/BadRequestError';
import { addEvent } from '../../controllers/addEvent';

describe('function addEvent', () => {
  it('should throw 400 error if there is no data provided', async () => {
    const mockedRequest = {
      body: {},
    } as Request;
    const req = mockedRequest;
    const res = {} as Response;
    const mNext = jest.fn();
    await addEvent(req, res, mNext);
    expect(mNext).toBeCalledWith(new BadRequestError({ message: 'Invalid credentials.' }));
  });
});

it('should throw 400 error when at least one field is empty', async () => {
  const mockedRequest = {
    body: {
      firstName: 'Robert',
      lastName: 'Stelmach',
      email: 'robert@wp.pl',
      date: '',
    },
  } as Request;
  const req = mockedRequest;
  const res = {} as Response;
  const mNext = jest.fn();
  await addEvent(req, res, mNext);
  expect(mNext).toBeCalledWith(new BadRequestError({ message: 'Invalid credentials.' }));
});
