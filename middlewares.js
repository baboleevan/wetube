import routes from './routes/routes';

//res.locals.[변수명] = "값" 넣어주면 템플릿에서 어디에서도 사용가능하다.
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube"
    res.locals.routes = routes;

    next();
};