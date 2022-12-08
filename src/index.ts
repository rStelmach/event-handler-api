import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import swaggerUI from 'swagger-ui-express';
import { addEventRouter } from './routes/addEvent';
import { getEventsRouter } from './routes/getEvents';
import { deleteEventRouter } from './routes/deleteEvent';
import { swaggerSpecification } from './libs/swagger';

dotenv.config();
export const app = express();
const PORT = 5000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
});

app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  }),
);
app.use(limiter);
app.use(express.json());
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecification, { explorer: true }));
app.get('/', (req, res) => res.send('I dream of being a website.'));

app.use('/addEvent', addEventRouter);
app.use('/getEvents', getEventsRouter);
app.use('/deleteEvent', deleteEventRouter);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}/`);
  });
}
