import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { addEventRouter } from './routes/addEvent';
import { getEventsRouter } from './routes/getEvents';
import { deleteEventRouter } from './routes/deleteEvent';

require('dotenv').config();
const app = express();
const PORT = 5000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
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

app.get('/', (req, res) => res.send('Express + TypeScript Server for Handling events'));

app.use('/addEvent', addEventRouter);
app.use('/getEvents', getEventsRouter);
app.use('/deleteEvent', deleteEventRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}/`);
});
