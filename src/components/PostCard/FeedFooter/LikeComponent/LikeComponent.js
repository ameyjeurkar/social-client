import React from 'react';
import './LikeComponent.css';

function LikeComponent({ liked, handleLikeButton }) {
  return (
    <span className="px-2 cursor-pointer">
      {
        (liked) ? <i className="fa fa-heart fa-xl liked-class" onClick={()=> handleLikeButton(false)}></i> : <i className="far fa-heart fa-xl" onClick={()=> handleLikeButton(true)}></i>
      }
    </span>
  )
}
export default LikeComponent;