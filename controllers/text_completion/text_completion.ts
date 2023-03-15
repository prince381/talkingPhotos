import { Request, Response } from "express";
import GPT from '../../models/text_completion';


class TextCompletion {
    async textCompletion(req: Request, res: Response) {
        const { prompt } = req.body;
        try {
            const response = await GPT.createCompletion(prompt);
            res.status(201).json({
                success: true,
                data: response,
                total: 1
            });
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                message: 'something went wrong...',
                error_details: error
            })
        }
    }
}

export default new TextCompletion();