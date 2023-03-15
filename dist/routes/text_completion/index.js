"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const text_completion_1 = __importDefault(require("../../controllers/text_completion"));
const router = (0, express_1.Router)();
class TextCompletionRoutes {
    get routes() {
        router.get('/completion', text_completion_1.default.textCompletion);
        return router;
    }
}
exports.default = new TextCompletionRoutes();
