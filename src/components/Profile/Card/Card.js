import React from 'react';
import './Card.css';

function Card({ imgUrl }) {
  const editPicDetails = () => {
    
  }

  return (
    <img src={imgUrl} className="image-style" onClick={() => editPicDetails()} width="100%" alt="pic"/>
  )
}
export default Card;