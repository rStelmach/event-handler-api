import express from 'express';
import { deleteEvent } from '../controllers/deleteEvent';

export const deleteEventRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Event
 *   description: API routes for deleting Events
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
 *            id:
 *              type: number
 *              example: 1
 */
/**
 * @swagger
 * /deleteEvent:
 *   post:
 *     summary: Delete Event
 *     tags: [Event]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *                 example: 1
 *     responses:
 *       200:
 *         description: Event has been deleted !
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 body:
 *                   type: object
 *                   properties:
 *                     deletedEvent:
 *                       $ref: '#/components/schemas/Event'
 *                 message:
 *                   type: string
 *                   example: Event has been deleted !
 *       500:
 *           $ref: '#/components/ErrorResponse'
 *       400:
 *           $ref: '#/components/ErrorResponse'
 */
deleteEventRouter.post('/', deleteEvent);
