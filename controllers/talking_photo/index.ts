import { Request, Response } from "express";
import Movio from "../../models/movio";

class TalkingPhoto {
    async listTalkingPhotos(req: Request, res: Response) {
        try {
            const photos = await Movio.listPhotos();
            // console.log(photos)
            res.status(200).json({
                success: true,
                data: photos,
                total: photos.length,
            });
        } catch (error) {
            console.log(error);
            res.status(422).json({
                success: false,
                message: 'something went wrong...',
                error_details: error
            })
        }
    }

    async listTalkingAvatars(req: Request, res: Response) {
        try {
            const avatars = await Movio.listAvatars();
            // console.log(avatars)
            res.status(200).json({
                success: true,
                data: avatars,
                total: avatars.length,
            });
        } catch (error) {
            console.log(error);
            res.status(422).json({
                success: false,
                message: 'something went wrong...',
                error_details: error
            })
        }
    }

    async listAvatarVoices(req: Request, res: Response) {
        try {
            const voices = await Movio.listVoices();
            // console.log(voices)
            res.status(200).json({
                success: true,
                data: voices,
                total: voices.length,
            });
        } catch (error) {
            console.log(error);
            res.status(422).json({
                success: false,
                message: 'something went wrong...',
                error_details: error
            })
        }
    }

    async getAllResources(req: Request, res: Response) {
        try {
            const resources = await Movio.getResources();
            // console.log(resources);
            res.status(200).json({
                success: true,
                data: resources,
                total: 1,
            });
        } catch (error) {
            console.log(error);
            res.status(422).json({
                success: false,
                message: 'something went wrong...',
                error_details: error
            })
        }
    }

    async createAvatarVideo(req: Request, res: Response) {
        const payload = req.body;
        console.log(payload)
        try {
            const resources = await Movio.createVideo(payload);
            // console.log(resources);
            res.status(200).json({
                success: true,
                data: resources,
                total: 1,
            });
        } catch (error) {
            console.log(error);
            res.status(422).json({
                success: false,
                message: 'something went wrong...',
                error_details: error
            })
        }
    }

    async getAvatarVideo(req: Request, res: Response) {
        const { video_id } = req.params;
        const test: boolean = (req.query.test === 'true' ? true : false) || true;
        if (!video_id)
            res.status(400).json({
                success: false,
                message: 'Bad Request: video_id not included in request.',
            });

        try {
            console.log('updating video with id: ', video_id);
            await Movio.getVideo(video_id, test);
            res.status(200).json({
                success: true,
            });
        } catch (error) {
            console.log(error);
            res.status(422).json({
                success: false,
                message: 'something went wrong...',
                error_details: error
            })
        }
    }
}

export default new TalkingPhoto();
