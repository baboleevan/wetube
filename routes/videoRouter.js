import express from "express";
import routes from "./routes";
import { 
    videoDetail, 
    deleteVideo, 
    getUpload, 
    postUpload, 
    getEditVideo,
    postEditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

//Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//Video 상세보기
videoRouter.get(routes.videoDetail(),videoDetail);

// 비디오 편집
videoRouter.get(routes.editVideo, getEditVideo);
videoRouter.post(routes.editVideo, postEditVideo);

//비디오 삭제
videoRouter.get(routes.deleteVideo,deleteVideo);

export default videoRouter;

