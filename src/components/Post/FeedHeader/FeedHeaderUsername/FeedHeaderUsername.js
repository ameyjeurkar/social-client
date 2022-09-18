import React from 'react';
import './FeedHeaderUsername.css';

function FeedHeaderUsername({username, location}) {
  return (
    <div className="d-flex flex-column mx-2 username-stretched">
      <span className="fs-14 fw-bold custom-font">{username}</span>
      {
        location!==null ? <span className="fs-12 fw-light">{location}</span> : <></>
      }
    </div>
  )
}
export default FeedHeaderUsername;