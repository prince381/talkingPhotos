import { Express, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from '../config';
import { Environment } from '../config/env';
import baseRouter from '../routes';

Environment.setup();

const express = require('express');
const app: Express = express();

const corsOptions = {
    origin: config.ORIGIN,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Methods",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Headers",
      "Accept",
    ],
};

app.options("*", cors(corsOptions));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", baseRouter.routes);
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        message: 'server is listening for requests.'
    })
});

export default app;
