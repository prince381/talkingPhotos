import { Configuration, OpenAIApi } from "openai";
import { config } from "../../config";


class GPT {
    openai: OpenAIApi;

    constructor() {
        const configuration = new Configuration({
            apiKey: config.OPENAI_KEY
        });
        this.openai = new OpenAIApi(configuration);
    }

    async createCompletion(prompt: string) {
        try {
            const response = await this.openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                  {role: "user", content: prompt}
                ],
                temperature: 0.2,
                max_tokens: 300,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });

            return { message: response.data.choices[0].message?.content }
        } catch (error) {
            throw error;
        }
    }
}

export default new GPT();