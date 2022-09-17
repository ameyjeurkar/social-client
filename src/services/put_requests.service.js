import axios from "axios";

export const followUser = async (loggedInUser, userIDToFollow) => {
    const request = {
        userId: userIDToFollow
    }
    return await axios.put(`${process.env.REACT_APP_HEROKU_URL}/user/${loggedInUser}/follow`, request);
}

export const unFollowUser = async (loggedInUser, userIDToUnfollow) => {
    const request = {
        userId: userIDToUnfollow
    }
    return await axios.put(`${process.env.REACT_APP_HEROKU_URL}/user/${loggedInUser}/unfollow`, request);
}