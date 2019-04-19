import routes from "../routes/routes";

export const getJoin = (req,res) => {
    res.render("join", {pageTitle : 'join'});
};

export const postJoin = (req,res) => {
    const {
        body: { name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join", {pageTitle : 'join'});
    } else {
        // To Do : 사용자 등록
        // To Do : Log user in
        res.redirect(routes.home);
    }
}


export const getlogin = (req, res) => {
    res.render("login", {pageTitle : 'login'});
}
export const postLogin = (req, res) => {
    res.redirect(routes.home)
}


export const logout = (req, res) => {
    //할일 : 프로세스 로그아웃
    res.redirect(routes.home);
}

export const users = (req, res) => res.render("users", {pageTitle : 'users'})
export const userDetail = (req, res) => res.render("userDetail", {pageTitle : 'userDetail'})
export const editProfile = (req, res) => res.render("editProfile", {pageTitle : 'editProfile'})
export const changePassword = (req, res) => res.render("changePassword", {pageTitle : 'changePassword'})