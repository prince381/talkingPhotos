"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.config = {
    SERVER_PORT: process.env.PORT || '',
    NODE_ENV: process.env.NODE_ENV || '',
    MOVIO_KEY: process.env.MOVIO_API_KEY || '',
    TTS_KEY: process.env.TTS_API_KEY || '',
    OPENAI_KEY: process.env.OPENAI_KEY || '',
    ORIGIN: process.env.ORIGIN || '',
    SHOT_STACK: process.env.SHOT_STACK_KEY || '',
    PROJECT_ID: process.env.PROJECT_ID || '',
    PRIVATE_KEY_ID: process.env.PRIVATE_KEY_ID || '',
    PRIVATE_KEY: process.env.PRIVATE_KEY || '',
    CLIENT_EMAIL: process.env.CLIENT_EMAIL || '',
    CLIENT_ID: process.env.CLIENT_ID || '',
    AUTH_URI: process.env.AUTH_URI || '',
    TOKEN_URI: process.env.TOKEN_URI || '',
    AUTH_PROVIDER_X509_CERT_URL: process.env.AUTH_PROVIDER_X509_CERT_URL || '',
    CLIENT_X509_CERT_URL: process.env.CLIENT_X509_CERT_URL || '',
};
