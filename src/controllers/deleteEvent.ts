import express from 'express';
import { PrismaClient } from '@prisma/client';
import { BadRequestError } from '../exceptions/BadRequestError';

export const deleteEvent = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const prisma = new PrismaClient();

  const { id } = req.body;
  if (!id) {
    return next(new BadRequestError({ message: 'No Event Id provided.' }));
  }
  try {
    const deleteEvent = await prisma.event.delete({
      where: {
        id,
      },
    });
    res.status(201).json({ message: 'Event has been deleted !', deleteEvent });
  } catch (e) {
    return next(new BadRequestError({ message: 'Such Id does not exist.' }));
  }
};
