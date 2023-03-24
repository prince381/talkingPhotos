import * as dotenv from 'dotenv';

dotenv.config();

interface ConfigInterface {
    SERVER_PORT: string;
    NODE_ENV: string;
    MOVIO_KEY: string;
    TTS_KEY: string;
    OPENAI_KEY: string;
    ORIGIN: string;
    SHOT_STACK: string;
    PROJECT_ID: string;
    PRIVATE_KEY_ID: string;
    PRIVATE_KEY: string;
    CLIENT_EMAIL: string;
    CLIENT_ID: string;
    AUTH_URI: string;
    TOKEN_URI: string;
    AUTH_PROVIDER_X509_CERT_URL: string;
    CLIENT_X509_CERT_URL: string;
}

export const config: ConfigInterface = {
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
