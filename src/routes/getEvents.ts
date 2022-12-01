import express from 'express';
import { getEvents } from '../controllers/getEvents';

export const getEventsRouter = express.Router();

getEventsRouter.get('/', getEvents);
