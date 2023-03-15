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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movio_1 = __importDefault(require("../../models/movio"));
class TalkingPhoto {
    listTalkingPhotos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const photos = yield movio_1.default.listPhotos();
                // console.log(photos)
                res.status(200).json({
                    success: true,
                    data: photos,
                    total: photos.length,
                });
            }
            catch (error) {
                console.log(error);
                res.status(422).json({
                    success: false,
                    message: 'something went wrong...',
                    error_details: error
                });
            }
        });
    }
    listTalkingAvatars(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const avatars = yield movio_1.default.listAvatars();
                // console.log(avatars)
                res.status(200).json({
                    success: true,
                    data: avatars,
                    total: avatars.length,
                });
            }
            catch (error) {
                console.log(error);
                res.status(422).json({
                    success: false,
                    message: 'something went wrong...',
                    error_details: error
                });
            }
        });
    }
    listAvatarVoices(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const voices = yield movio_1.default.listVoices();
                // console.log(voices)
                res.status(200).json({
                    success: true,
                    data: voices,
                    total: voices.length,
                });
            }
            catch (error) {
                console.log(error);
                res.status(422).json({
                    success: false,
                    message: 'something went wrong...',
                    error_details: error
                });
            }
        });
    }
    getAllResources(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resources = yield movio_1.default.getResources();
                // console.log(resources);
                res.status(200).json({
                    success: true,
                    data: resources,
                    total: 1,
                });
            }
            catch (error) {
                console.log(error);
                res.status(422).json({
                    success: false,
                    message: 'something went wrong...',
                    error_details: error
                });
            }
        });
    }
    createAvatarVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = req.body;
            console.log(payload);
            try {
                const resources = yield movio_1.default.createVideo(payload);
                // console.log(resources);
                res.status(200).json({
                    success: true,
                    data: resources,
                    total: 1,
                });
            }
            catch (error) {
                console.log(error);
                res.status(422).json({
                    success: false,
                    message: 'something went wrong...',
                    error_details: error
                });
            }
        });
    }
    getAvatarVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { video_id } = req.body;
            try {
                const resources = yield movio_1.default.getVideo(video_id);
                // console.log(resources);
                res.status(200).json({
                    success: true,
                    data: resources,
                    total: 1,
                });
            }
            catch (error) {
                console.log(error);
                res.status(422).json({
                    success: false,
                    message: 'something went wrong...',
                    error_details: error
                });
            }
        });
    }
}
exports.default = new TalkingPhoto();
