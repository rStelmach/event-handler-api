import express from 'express';
import { deleteEvent } from '../controllers/deleteEvent';

export const deleteEventRouter = express.Router();

deleteEventRouter.post('/', deleteEvent);
