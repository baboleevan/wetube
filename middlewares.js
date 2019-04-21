import multer from "multer";
import routes from './routes/routes';

const multerVideo = multer({ dest: "uploads/videos/" });

//res.locals.[변수명] = "값" 넣어주면 템플릿에서 어디에서도 사용가능하다.
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube"
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next();
};

export const uploadVideo = multerVideo.single("videoFile");