import axios from "axios";

export const deletePost = async (imgId) => {
    // return await axios.delete(`${process.env.REACT_APP_HEROKU_URL}/post/delete_post/${imgId}`);
    return await axios.delete(`${process.env.REACT_APP_HEROKU_URL}/post/delete_post/${imgId}`);
}