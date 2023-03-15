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
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../../config");
class Movio {
    constructor() {
        this.defaultHeaders = {
            accept: "application/json",
            "x-api-key": config_1.config.MOVIO_KEY
        };
    }
    listPhotos() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://api.movio.la/v1/talking_photo.list';
            try {
                const { data: { data: photoList } } = yield axios_1.default.get(url, { headers: this.defaultHeaders });
                return photoList;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    listAvatars() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://api.movio.la/v1/avatar.list';
            try {
                const { data: { data: { avatars: avatarList } } } = yield axios_1.default.get(url, { headers: this.defaultHeaders });
                return avatarList;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    listVoices() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://api.movio.la/v1/voice.list';
            try {
                const { data: { data: voices } } = yield axios_1.default.get(url, { headers: this.defaultHeaders });
                return voices;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    getResources() {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = [this.listPhotos(), this.listAvatars(), this.listVoices()];
            try {
                const [photos, avatars, voices] = yield Promise.all(tasks);
                return { photos, avatars: avatars.avatars, voices: voices.voices };
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    getUploadURL(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://api.movio.la/v1/upload_url.get';
            const requestOptions = {
                headers: {
                    "x-api-key": this.defaultHeaders["x-api-key"],
                    "Content-Type": "application/json"
                }
            };
            const instance = axios_1.default.create();
            instance.interceptors.request.use((conf) => {
                conf.data = {
                    content_type: `image/${type}`
                };
                return conf;
            });
            try {
                const { data: { data: uploadParams } } = yield instance.get(url, requestOptions);
                return uploadParams;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    uploadPhoto() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    createVideo(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://api.movio.la/v1/video.generate';
            const requestOptions = {
                headers: {
                    "x-api-key": this.defaultHeaders["x-api-key"],
                    "Content-Type": "application/json"
                }
            };
            try {
                const { data: response } = yield axios_1.default.post(url, payload, requestOptions);
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getVideo(videoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://api.movio.la/v1/video_status.get';
            try {
                const { data: { data: response } } = yield axios_1.default.get(url, {
                    headers: this.defaultHeaders,
                    params: { video_id: videoId }
                });
                return response;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
exports.default = new Movio();
