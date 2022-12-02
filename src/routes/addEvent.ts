import express from 'express';
import { body } from 'express-validator';
import { addEvent } from '../controllers/addEvent';
import asyncHandler from 'express-async-handler';

export const addEventRouter = express.Router();
/**
 * @swagger
 * tags:
 *   name: Event
 *   description: API routes for adding Events
 */
/**
 * @swagger
 *  components:
 *    ErrorResponse:
 *      description: Generic error response. Types and messages may differ.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              errors:
 *                type: array
 *                items:
 *                  properties:
 *                    type:
 *                      type: string
 *                    status:
 *                      type: number
 *                    message:
 *                      type: string
 */
/**
 * @swagger
 * components:
 *  schemas:
 *    Event:
 *      type: object
 *      properties:
 *        event:
 *          type: object
 *          properties:
 *            firstName:
 *              type: string
 *              example: Robert
 *            lastName:
 *              type: string
 *              example: Stelmach
 *            email:
 *              type: string
 *              example: example@email.com
 *            date:
 *              type: string
 *              example: 01-01-2000
 */
/**
 * @swagger
 * /addEvent:
 *   post:
 *     summary: Add Event
 *     tags: [Event]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: Robert
 *               lastName:
 *                 type: string
 *                 example: Stelmach
 *               email:
 *                 type: string
 *                 example: example@email.com
 *               date:
 *                  type: string
 *                  example: 01-01-2000
 *     responses:
 *       200:
 *         description: Event added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 body:
 *                   type: object
 *                   properties:
 *                     event:
 *                       $ref: '#/components/schemas/Event'
 *                 message:
 *                   type: string
 *                   example: Event Added !
 *       500:
 *           $ref: '#/components/ErrorResponse'
 *       400:
 *           $ref: '#/components/ErrorResponse'
 */
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
