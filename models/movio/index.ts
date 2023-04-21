import axios from "axios";
import { config } from "../../config";
import { db, storage } from "../../firebase";
import EventEmitter from "events";

class Movio {
    defaultHeaders: {
        accept?: string;
        "content-type"?: string;
        "x-api-key": string;
    };
    emitter: EventEmitter;

    constructor() {
        this.defaultHeaders = {
            accept: "application/json",
            "x-api-key": config.MOVIO_KEY
        };
        this.emitter = new EventEmitter();
    }

    async listPhotos() {
        const url = 'https://api.heygen.com/v1/talking_photo.list';
        try {
            const { data: { data: photoList } } = await axios.get(url, { headers: this.defaultHeaders });
            return photoList;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async listAvatars() {
        const url = 'https://api.heygen.com/v1/avatar.list';
        try {
            const { data: { data: { avatars: avatarList } } } = await axios.get(url, { headers: this.defaultHeaders });
            return avatarList;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async listVoices() {
        const url = 'https://api.heygen.com/v1/voice.list';
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
        const url = 'https://api.heygen.com/v1/upload_url.get';
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
        const url = 'https://api.heygen.com/v1/video.generate';
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

    private async getVideoStatus(videoId: string, test: boolean) {
        const url = 'https://api.heygen.com/v1/video_status.get';
        try {
            const { data: { data: response } } = await axios.get(url, {
                headers: this.defaultHeaders,
                params: {video_id: videoId}
            });
            const { status, video_url } = response;
            if (status === 'completed') {
                if (test) {
                    console.log('Getting video with watermark');

                    const videoBuffer = await this.getVideoWithWaterMark(video_url);
                    const file = storage.bucket().file(`TestVideos/${videoId}.mp4`);

                    console.log('Saving video to storage');
                    await file.save(videoBuffer, {
                        metadata: {
                            contentType: 'video/mp4'
                        }
                    });

                    const metaData = await file.getMetadata();
                    const videoUrl = metaData[0].mediaLink;

                    console.log('Video generation completed');
                    await db.collection('AudioPodcasts').doc(videoId).update({ url: videoUrl, status });
                    return;
                }

                console.log('Video generation completed');
                await db.collection('AudioPodcasts').doc(videoId).update({ url: video_url, status });
                return;

            } else if (status === 'failed') {
                console.log('Video failed');
                await db.collection('AudioPodcasts').doc(videoId).update({ status });
                return;
            } else {
                console.log('Video not ready');
                setTimeout(() => this.getVideoStatus(videoId, test), 60000);
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getVideo(videoId: string, test: boolean = true) {
        await this.getVideoStatus(videoId, test);
        return true;
    }

    async getVideoWithWaterMark(video_url: string) {
        const url = 'http://localhost:8080/api/v1/add-watermark';
        try {
            const { data: response } = await axios.post(url, {video_url}, {responseType: 'arraybuffer'});
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default new Movio();