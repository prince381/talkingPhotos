"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("./config/env");
const config_1 = require("./config");
const app_1 = __importDefault(require("./app/app"));
env_1.Environment.setup();
app_1.default.listen(config_1.config.SERVER_PORT, () => {
    console.log(`Listening on port ${config_1.config.SERVER_PORT} in ${config_1.config.NODE_ENV} mode`);
});
process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});
process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});
