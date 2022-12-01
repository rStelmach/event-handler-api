import express from 'express';
import { body } from 'express-validator';
import { addEvent } from '../controllers/addEvent';
import asyncHandler from 'express-async-handler';

export const addEventRouter = express.Router();

addEventRouter.post(
  '/',
  [
    body('firstName').trim().not().isEmpty(),
    body('lastName').trim().not().isEmpty(),
    body('email').isEmail().withMessage('Enter a valid email').normalizeEmail(),
    body('date').trim().not().isEmpty(),
  ],

  asyncHandler(addEvent),
);
