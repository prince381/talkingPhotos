import axios from "axios";
import { config } from "../../config";

class Movio {
    defaultHeaders: {
        accept?: string;
        "content-type"?: string;
        "x-api-key": string;
    };

    constructor() {
        this.defaultHeaders = {
            accept: "application/json",
            "x-api-key": config.MOVIO_KEY
        }
    }

    async listPhotos() {
        const url = 'https://api.movio.la/v1/talking_photo.list';
        try {
            const { data: { data: photoList } } = await axios.get(url, { headers: this.defaultHeaders });
            return photoList;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async listAvatars() {
        const url = 'https://api.movio.la/v1/avatar.list';
        try {
            const { data: { data: { avatars: avatarList } } } = await axios.get(url, { headers: this.defaultHeaders });
            return avatarList;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async listVoices() {
        const url = 'https://api.movio.la/v1/voice.list';
        try {
            const { data: { data: voices } } = await axios.get(url, { headers: this.defaultHeaders });
            return voices;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getResources() {
        const tasks = [this.listPhotos(), this.listAvatars(), this.listVoices()];
        try {
            const [photos, avatars, voices] = await Promise.all(tasks);
            return { photos, avatars: avatars.avatars, voices: voices.voices };
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    private async getUploadURL(type: string) {
        const url = 'https://api.movio.la/v1/upload_url.get';
        const requestOptions = {
            headers: {
                "x-api-key": this.defaultHeaders["x-api-key"],
                "Content-Type": "application/json"
            }
        };
        const instance = axios.create();
        instance.interceptors.request.use((conf) => {
            conf.data = {
                content_type: `image/${type}`
            };
            return conf;
        })

        try {
            const { data: { data: uploadParams } } = await instance.get(url, requestOptions);
            return uploadParams;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    private async uploadPhoto() {

    }

    async createVideo(payload: any) {
        const url = 'https://api.movio.la/v1/video.generate';
        const requestOptions = {
            headers: {
                "x-api-key": this.defaultHeaders["x-api-key"],
                "Content-Type": "application/json"
            }
        };

        try {
            const { data: { data: response } } = await axios.post(url, payload, requestOptions);
            return {
                video_id: response.video_id,
                talking_photo_id: payload.clips[0].talking_photo_id,
                voice_id: payload.clips[0].voice_id || '',
                timestamp: new Date()
            };
        } catch (error) {
            throw error;
        }
    }

    async getVideo(videoId: string) {
        const url = 'https://api.movio.la/v1/video_status.get';
        try {
            const { data: { data: response } } = await axios.get(url, {
                headers: this.defaultHeaders,
                params: {video_id: videoId}
            });
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default new Movio();