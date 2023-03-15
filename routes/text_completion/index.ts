import { Router } from "express";
import TextCompletion from '../../controllers/text_completion';

const router = Router();

class TextCompletionRoutes {
    get routes() {
        router.get('/completion', TextCompletion.textCompletion);

        return router;
    }
}

export default new TextCompletionRoutes();