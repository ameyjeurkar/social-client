import React from 'react';
import './CommentComponent.css';

function CommentComponent({ openCommentSection }) {
  return (
    <span className="px-2 cursor-pointer">
      <i className="fa fa-comment fa-xl" onClick={() => openCommentSection()}></i>
    </span>
  )
}
export default CommentComponent;