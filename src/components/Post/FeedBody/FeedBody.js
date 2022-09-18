import React from 'react';
import './FeedBody.css';

function FeedBody({postImg}) {
  return (
    <img src={postImg} className="auto-adjust-width" alt="posted-image"/>
  )
}
export default FeedBody;