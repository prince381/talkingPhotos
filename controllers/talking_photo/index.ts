import { Request, Response } from "express";
import Movio from "../../models/movio";

class TalkingPhoto {
    async listTalkingPhotos(req: Request, res: Response) {
        try {
            const photos = Movio.listPhotos();
            res.status(201).json({
                success: true,
                data: photos,
                total: 1
            });
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                message: 'something went wrong...',
                error_details: error
            })
        }
    }
}

export default new TalkingPhoto();
