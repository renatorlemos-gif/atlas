import express from 'express';
import cors from 'cors';
import { formatsRouter } from './routes/formats';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/formats', formatsRouter);

export { app };
