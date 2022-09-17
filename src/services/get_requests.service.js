import axios from "axios";

export const getTimelineFeeds = async () => {
  const request = {
    userId: sessionStorage.getItem("userId")
  }
  return await axios.get(`${process.env.REACT_APP_HEROKU_URL}/post/${request.userId}/timeline/feeds`);
}

export const getAllPostsOfUser = async (userId) => {
  return await axios.get(`${process.env.REACT_APP_HEROKU_URL}/post/${userId}/allposts`);
}

export const getLoggedInUserDetails = async (userId) => {
  return await axios.get(`${process.env.REACT_APP_HEROKU_URL}/user/get_user/${userId}`);
}