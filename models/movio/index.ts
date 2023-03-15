import axios from "axios";
import * as api from 'api';
import { config } from "../../config";

class Movio {
    sdk: any;

    constructor() {
        this.sdk = api.default('@movio-api/v3.0.2#4ud7ra35l9o5eim5');
        this.sdk.auth(config.MOVIO_KEY);
    }

    async listPhotos() {
        try {
            const avatarList = await this.sdk.getAvatarList();
            return avatarList;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    private async listVoices() {

    }

    private async getUploadURL() {

    }

    private async uploadPhoto() {

    }

    async createVideo() {

    }

    async getVideo() {

    }

    async getResources() {

    }
}

export default new Movio();