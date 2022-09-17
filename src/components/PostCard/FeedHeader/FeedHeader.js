import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedHeaderImage from './FeedHeaderImage/FeedHeaderImage';
import FeedHeaderOptions from './FeedHeaderOptions/FeedHeaderOptions';
import FeedHeaderUsername from './FeedHeaderUsername/FeedHeaderUsername';

function FeedHeader({timelineData}) {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getUsername();
  }, []);

  const getUsername = async () => {
    const response = await axios.get(`${process.env.REACT_APP_HEROKU_URL}/user/get_user/${timelineData.userId}`);
    setResponse(response.data);
    console.log("FeedHeader: ", response.data);
  }

  return (
    <div className="d-flex flex-row align-items-center">
      <FeedHeaderImage profilePicture={response?.profilePicture} username={response?.username}/>
      <FeedHeaderUsername username={timelineData?.username} location={timelineData?.location}/>
      <FeedHeaderOptions />
    </div>
  )
}
export default FeedHeader;