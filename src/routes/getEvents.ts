import express from 'express';
import { getEvents } from '../controllers/getEvents';

export const getEventsRouter = express.Router();
/**
 * @swagger
 * components:
 *  schemas:
 *    Events:
 *      type: array
 *      properties:
 *        event:
 *          type: object
 *          properties:
 *            id:
 *              type:number
 *              example:1
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
 * /getEvents:
 *   get:
 *     summary: Get Events
 *     tags: [Event]
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: Events
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Events'
 */
getEventsRouter.get('/', getEvents);
