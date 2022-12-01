import { Request, Response } from 'express';
import { BadRequestError } from '../../exceptions/BadRequestError';
import { deleteEvent } from '../../controllers/deleteEvent';

describe('function deleteEvent', () => {
  it('should throw 400 error when "id" is not provided or empty', async () => {
    const mockedRequest = {
      body: { id: null },
    } as Request;
    const req = mockedRequest;
    const res = {} as Response;
    const mNext = jest.fn();
    await await deleteEvent(req, res, mNext);
    expect(mNext).toBeCalledWith(new BadRequestError({ message: 'No Event Id provided.' }));
  });
});

it('should throw 400 error when "id" is empty', async () => {
  const mockedRequest = {
    body: {
      id: '$$',
    },
  } as Request;
  const req = mockedRequest;
  const res = {} as Response;
  const mNext = jest.fn();
  await deleteEvent(req, res, mNext);
  expect(mNext).toBeCalledWith(new BadRequestError({ message: 'Such Id does not exist.' }));
});
