import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

declare module 'express-session' {
  interface Session {
    isLoggedIn: boolean;
  }
}

export const getEvents = async (req: express.Request, res: express.Response) => {
  const events = await prisma.event.findMany({});

  res.status(200).json({
    body: {
      events: events,
    },
    message: 'Events listed',
  });
};
