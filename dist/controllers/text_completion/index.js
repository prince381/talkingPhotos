"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const text_completion_1 = __importDefault(require("../../models/text_completion"));
class TextCompletion {
    textCompletion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { prompt } = req.body;
            try {
                const response = yield text_completion_1.default.createCompletion(prompt);
                res.status(201).json({
                    success: true,
                    data: response,
                    total: 1
                });
            }
            catch (error) {
                console.log(error);
                res.status(400).json({
                    success: false,
                    message: 'something went wrong...',
                    error_details: error
                });
            }
        });
    }
}
exports.default = new TextCompletion();
