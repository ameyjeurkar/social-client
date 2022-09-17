import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import ReactRoundedImage from "react-rounded-image";
import { useNavigate, useParams } from 'react-router-dom';
import ProfilePic from '../../assets/images/profile-user.png';
import { followUser, unFollowUser } from '../../services/put_requests.service';
import { getLoggedInUserDetails, getAllPostsOfUser } from '../../services/get_requests.service';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState(null);
  const [following, setFollowing] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(sessionStorage.getItem("userId"));
  const { userId } = useParams();

  
  useEffect(() => {
    getAllPosts();
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const user = await getLoggedInUserDetails(userId);
    setUserData(user.data);
  }

  const getAllPosts = async () => {
    const posts = await getAllPostsOfUser(userId);
    setPosts(posts.data);
  }

  const followUnfollow = async (userIDToFollowUnfollow) => {
    await !following ? followUser(loggedInUser, userIDToFollowUnfollow) : unFollowUser(loggedInUser, userIDToFollowUnfollow);
    setFollowing(!following);
  }

  const close = () => {
    navigate(-1);
  }

  return (
    <div className="container">
      <span className="close-icon fw-bold" onClick={() => close()}>&times;</span>
      <div className="row">
          {/* Basic Information Section */}
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="basic-information-section">
              <div className="col-lg-3 col-md-3 col-sm-12 display-center">
                <ReactRoundedImage
                  image={userData?.profilePicture ? userData?.profilePicture : ProfilePic}
                  imageWidth="150"
                  imageHeight="150"
                  roundedSize="5"
                  roundedColor="#bdbdbd"
                  borderRadius="100"
                />
              </div>

              <div className="col-lg-9 col-md-9 col-sm-12 mx-3">
                <div className="details-container">
                  <span className="username">{userData?.username}</span>
                  <div className="location-email-container mt-1">
                    {
                      userData?.city && (
                        <div>
                          <i className="fa fa-map-marker"></i>&nbsp;
                          <span className="color-grey">{userData?.city}</span>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                      )
                    }
                    {
                      userData?.email && (
                        <div>
                          <i className="fa fa-envelope"></i>&nbsp;
                          <span className="color-grey">{userData?.email}</span>
                        </div>
                      )
                    }
                  </div>
                  <div className="location-email-container">
                    {
                      userData?.desc && (
                        <span className="justify-content">{userData?.desc}</span>
                      )
                    }
                  </div>

                  {/* Follow Unfollow */}
                  {
                    userData?._id!==loggedInUser && (
                      <div className="my-2 d-flex justify-content-space-center">
                        {
                          following ? (
                            <button className="btn btn-sm message-button" onClick={() => followUnfollow(userData._id)}>
                              <span className='fa fa-check'>&nbsp;&nbsp;</span>
                              Following
                            </button>) : (
                            <button className="btn btn-sm follow-button" onClick={() => followUnfollow(userData._id)}>
                              <span className='fa fa-add'>&nbsp;&nbsp;</span>
                              Follow
                            </button>
                            )
                        }
                        <button className="btn btn-sm message-button mx-3">
                          <span className='fa fa-message'>&nbsp;&nbsp;</span>
                          Message
                        </button>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>

            {/* Post followers following */}
            <div className="col-lg-12 col-md-12 col-sm-12 followers-following-section">
              <div className="d-flex flex-column align-items-center">
                <span className="post-title">Posts</span>
                <span className="post-value">{posts?.posts?.length}</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span className="post-title">Followers</span>
                <span className="post-value">{userData?.followers?.length || 0}</span>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span className="post-title">Following</span>
                <span className="post-value">{userData?.following?.length || 0}</span>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="photo-gallery">
            {
              posts?.posts?.length ? (
                <div className="masonry-layout">
                  {
                    posts?.posts?.map(post => {
                      return (
                        <div className='box'>
                          <Card key={post._id} imgUrl={post.img} />
                        </div>
                      )
                    })
                  }
                </div>
                ) : (
                  <div className="d-flex justify-content-center align-items-center w-100">
                    <span className="d-flex justify-content-center fs-3 ff-fantasy my-5 no-post-container">No Posts Yet</span>
                  </div>
                )
            }
            </div>
          </div>
      </div>
      {/* <EditModal openDialog={openDialog}/> */}
    </div>
  )
}
export default Profile;