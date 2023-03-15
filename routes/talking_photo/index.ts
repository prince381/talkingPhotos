import { Router } from "express";
import TalkingPhoto from '../../controllers/talking_photo';

const router = Router();

class TalkingPhotoRoutes {
    get routes() {
        router.get('/photos', TalkingPhoto.listTalkingPhotos);
        router.get('/voices', TalkingPhoto.listAvatarVoices);
        router.get('/avatars', TalkingPhoto.listTalkingAvatars);
        router.get('/all', TalkingPhoto.getAllResources);
        router.get('/get_video', TalkingPhoto.getAvatarVideo);
        router.post('/create', TalkingPhoto.createAvatarVideo);

        return router;
    }
}

export default new TalkingPhotoRoutes();