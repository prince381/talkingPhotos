"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const talking_photo_1 = __importDefault(require("../../controllers/talking_photo"));
const router = (0, express_1.Router)();
class TalkingPhotoRoutes {
    get routes() {
        router.get('/photos', talking_photo_1.default.listTalkingPhotos);
        router.get('/voices', talking_photo_1.default.listAvatarVoices);
        router.get('/avatars', talking_photo_1.default.listTalkingAvatars);
        router.get('/all', talking_photo_1.default.getAllResources);
        router.get('/get_video', talking_photo_1.default.getAvatarVideo);
        router.post('/create', talking_photo_1.default.createAvatarVideo);
        return router;
    }
}
exports.default = new TalkingPhotoRoutes();
