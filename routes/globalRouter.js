import express from "express";
import routes from "./routes";
import { home, search } from "../controllers/videoController";
import {
  logout,
  getJoin,
  postJoin,
  getlogin,
  postLogin
} from "../controllers/userController";

const globalRouter = express.Router();

// 회원가입 사이트
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getlogin);
globalRouter.post(routes.login, postLogin);

// Video Controller로 이동
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.logout, logout);

export default globalRouter;
