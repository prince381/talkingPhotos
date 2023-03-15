"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const config_1 = require("../config");
const env_1 = require("../config/env");
const routes_1 = __importDefault(require("../routes"));
env_1.Environment.setup();
const express = require('express');
const app = express();
const corsOptions = {
    origin: config_1.config.ORIGIN,
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
app.options("*", (0, cors_1.default)(corsOptions));
app.use((0, cors_1.default)(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", routes_1.default.routes);
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'server is listening for requests.'
    });
});
exports.default = app;
