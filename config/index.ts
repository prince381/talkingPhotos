import * as dotenv from 'dotenv';

dotenv.config();

interface ConfigInterface {
    SERVER_PORT: string;
    NODE_ENV: string;
    MOVIO_KEY: string;
    TTS_KEY: string;
    OPENAI_KEY: string;
    ORIGIN: string;
}

export const config: ConfigInterface = {
    SERVER_PORT: process.env.PORT || '',
    NODE_ENV: process.env.NODE_ENV || '',
    MOVIO_KEY: process.env.MOVIO_API_KEY || '',
    TTS_KEY: process.env.TTS_API_KEY || '',
    OPENAI_KEY: process.env.OPENAI_KEY || '',
    ORIGIN: process.env.ORIGIN || '',
};
