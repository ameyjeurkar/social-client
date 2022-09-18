import React from 'react';
import ProfileUserThumbnail from '../../../../assets/images/profile-user.png';
import ReactRoundedImage from "react-rounded-image";
import './FeedHeaderImage.css';

function FeedHeaderImage({profilePicture, username}) {
  return (
    <>
      {/* <img src={profilePicture ? profilePicture : ProfileUserThumbnail} className="thumbnail-image" alt={username}/> */}
      <div className="m-1">
        <ReactRoundedImage
          image={profilePicture ? profilePicture : ProfileUserThumbnail}
          imageWidth="45"
          imageHeight="45"
          roundedSize="5"
          roundedColor="#bdbdbd"
          borderRadius="100"
        />
      </div>
    </>
  )
}
export default FeedHeaderImage;