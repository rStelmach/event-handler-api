import express from 'express';
import { PrismaClient } from '@prisma/client';
import { Event } from '../types/EventTypes';
import { BadRequestError } from '../exceptions/BadRequestError';

const prisma = new PrismaClient();

export const addEvent = async (
  req: express.Request,
  res: express.Response<{ message: string; event?: Event }>,
  next: express.NextFunction,
) => {
  const { firstName, lastName, email, date } = req.body;
  if (!firstName || !lastName || !email || !date) {
    return next(new BadRequestError({ message: 'Invalid credentials.' }));
  }
  const event = await prisma.event.create({
    data: {
      firstName,
      lastName,
      email,
      date,
    },
  });

  res.status(201).json({ message: 'Event Added !', event });
};
