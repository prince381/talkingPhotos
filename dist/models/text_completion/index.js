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
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = require("openai");
const config_1 = require("../../config");
class GPT {
    constructor() {
        const configuration = new openai_1.Configuration({
            apiKey: config_1.config.OPENAI_KEY
        });
        this.openai = new openai_1.OpenAIApi(configuration);
    }
    createCompletion(prompt) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.openai.createChatCompletion({
                    model: "gpt-3.5-turbo",
                    messages: [
                        { role: "user", content: prompt }
                    ],
                    temperature: 0.2,
                    max_tokens: 300,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0,
                });
                return { message: (_a = response.data.choices[0].message) === null || _a === void 0 ? void 0 : _a.content };
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = new GPT();
