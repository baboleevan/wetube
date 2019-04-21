import routes from "../routes/routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    // 모든 비디오를 찾아서 최신순으로 정렬해서 videos 에 넣어준다.
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = async (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      // 제목으로 검색을 하는데  포함되는 단어를 찾으면서 options에 i를 붙임으로 대소문자 구분 X
      title: { $regex: searchingBy, $options: "i" }
    });
    res.render("search", { pageTitle: "search", searchingBy, videos });
  } catch (error) {
    console.log(error);
    res.render("search", { pageTitle: "search", searchingBy, videos });
  }
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "upload" });
};
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  console.log(newVideo);
  // 할일 : 비디오 업로드 및 저장
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "videoDetail", video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: video.title, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Video.findByIdAndRemove({ _id: id });
    res.redirect(routes.home);
  } catch (error) {
    res.redirect(routes.home);
  }
};
