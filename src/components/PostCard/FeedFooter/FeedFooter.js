import React, { useState, useEffect } from 'react';
import { handleLikeDislike } from '../../../services/requests';
import LikeComponent from './LikeComponent/LikeComponent';
import CommentComponent from './CommentComponent/CommentComponent';
import './FeedFooter.css';
import CommentSection from './CommentSection/CommentSection';

export default function FeedFooter({username, totalLikes, comments, caption, imgID}) {
  const [liked, setLiked] = useState(null);
  const [opened, setOpened] = useState(false);
  const [totalLikesCount, setTotalLikesCount] = useState(totalLikes.length);

  const request = {
    userId: sessionStorage.getItem("userId")
  }

  // first time load check if post is liked or not.
  useEffect(() => {
    totalLikes.includes(sessionStorage.getItem("userId")) ? setLiked(true) : setLiked(false);
  }, [])

  // liking/disliking a post
  const handleLikeButton = (likedORdisliked) => {
    likedORdisliked ? setTotalLikesCount(prev => prev + 1) : setTotalLikesCount(prev => prev - 1);
    setLiked(!liked);
    handleLikeDislike(request, imgID);
  }

  // Opening/Closing comment section
  const openCommentSection = () => {
    console.log("opened")
    setOpened(!opened);
  }

  return (
    <div className="d-flex flex-column">
      <div className="d-flex custom-Height py-1">
        <LikeComponent liked={liked} handleLikeButton={handleLikeButton}/>
        <CommentComponent openCommentSection={openCommentSection}/>
      </div>
      {
        totalLikesCount ? <span className="py-1 px-2 fw-bold fs-14">{totalLikesCount} likes</span> : <></>
      }
      {
        caption ? <span className="px-2 fs-12">{caption}</span> : <></>
      }
      {
        opened ? <CommentSection comments={comments}/> : <></>
      }
    </div>
  )
}
