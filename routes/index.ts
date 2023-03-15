import { Router } from 'express';
import TalkingPhotoRoutes from './talking_photo';
import TextCompletionRoutes from './text_completion';


const router = Router();

class BaseRouter {
    get routes() {
        router.use('/talking_photo', TalkingPhotoRoutes.routes);
        router.use('/gpt', TextCompletionRoutes.routes);
        return router;
    }
}

export default new BaseRouter();
