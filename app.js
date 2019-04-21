// 외장 모듈
import express from "express";
import logger from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

// 라우트 모듈
import globalRouter from "./routes/globalRouter";
import routes from "./routes/routes";
import userRouter from "./routes/userRouter";
import videoRouter from "./routes/videoRouter";

// 미들웨어
import { localsMiddleware } from "./middlewares";

const app = express();

app.set("view engine", "pug");

app.use(helmet());
// directory에서 file을 보내주는 middleware
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(logger("dev"));
app.use(localsMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
