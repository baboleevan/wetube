import routes from "../routes/routes"
export const home = (req,res) => {
    res.render("home", { pageTitle : 'Home', videos});
};

export const search = (req,res) => {
    const {
        query : { term : searchingBy }
    } = req;
    res.render("search", { pageTitle: 'search', searchingBy, videos});
};

// export const search = (req, res) => {
//     const {
//       query: { term: searchingBy }
//     } = req;
//     res.render("search", { pageTitle: "Search", searchingBy });
//   };

export const getUpload = (req,res) => {
    res.render("upload",{pageTitle: 'upload'});
}
export const postUpload = (req,res) => {
    const {
        body : {
            file, title, description
        }
    } = req;
    // 할일 : 비디오 업로드 및 저장
    console.log(req.body);
    res.redirect(routes.videoDetail(12412421));
}

export const videoDetail = (req,res) => 
    res.render("videoDetail",{pageTitle: 'videoDetail'});
export const editVideo = (req,res) => 
    res.render("editVideo",{pageTitle: 'editVideo'});
export const deleteVideo = (req,res) => 
    res.render("deleteVideo",{pageTitle: 'deleteVideo'});