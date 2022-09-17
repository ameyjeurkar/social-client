import axios from "axios";

export const handleLikeDislike = async (request, imgID) => {
    return await axios.put(`${process.env.REACT_APP_HEROKU_URL}/post/${imgID}/likes`, request);
}

export const addPost = async (formDataRequest) => {
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    console.log(formDataRequest.get("image")); // Proper way to console.log formData request.
    return await axios.post(`${process.env.REACT_APP_HEROKU_URL}/post`, formDataRequest, config);
}

export const searchUsers = async (request) => {
    return axios.post(`${process.env.REACT_APP_HEROKU_URL}/user/search/people`, request);
}