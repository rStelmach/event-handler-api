import { PrismaClient } from '@prisma/client';

export const createDatabaseInstance = () => {
  const client = new PrismaClient();

  return client;
};
