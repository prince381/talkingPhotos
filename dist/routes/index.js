"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const talking_photo_1 = __importDefault(require("./talking_photo"));
const text_completion_1 = __importDefault(require("./text_completion"));
const router = (0, express_1.Router)();
class BaseRouter {
    get routes() {
        router.use('/talking_photo', talking_photo_1.default.routes);
        router.use('/gpt', text_completion_1.default.routes);
        return router;
    }
}
exports.default = new BaseRouter();
