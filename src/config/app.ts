import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';

import { routes } from '../api/routes/index';
import { mongoDbConnection } from '../db/mongoConnection';

import 'dotenv/config';

const app: Application = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

mongoDbConnection();

export { app };