import React, { useState, useEffect } from 'react';
import Loader from '../../Loader/Loader';
import AddFeed from '../../AddFeed/AddFeed';
import FeedBody from '../FeedBody/FeedBody';
import { useNavigate } from 'react-router-dom';
import FeedFooter from '../FeedFooter/FeedFooter';
import FeedHeader from '../FeedHeader/FeedHeader';
import { getTimelineFeeds } from '../../../services/get_requests.service';
import './Feeds.css';

function Feeds() {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const [responseUpdated, setResponseUpdated] = useState(false);

  useEffect(() => {
    getData();
  }, [responseUpdated]);
  
  const getData = async () => {
    let response = await getTimelineFeeds();
    setResponse(response?.data);
  }
  
  if(!response?.statusCode) {
    return (
      <>
        <div className="d-flex flex-column justify-content-center align-items-center fw-bold my-2 fs-12">
          <Loader width={10} height={10} color={"grey"}/>
          <span className="mt-1">Please wait. While data loads :)</span>
        </div>
      </>
    )
  }

  const navigateToSearch = () => {
    navigate('/search');
  }

  return (
    <div className="container">
      <div className="wrapper-container">
        <div className="feed-container">
          <AddFeed responseUpdated={responseUpdated} setResponseUpdated={setResponseUpdated}/>
        </div>
        {
          (response?.statusCode && response?.feeds.length===0) && (
            <>
              <div className="d-flex flex-column justify-content-center align-items-center fw-bold my-2 fs-12">
                <span className="mt-1 text-align-center"><b className="hightlight" onClick={navigateToSearch}>Click here</b> to follow other users on social, or add new posts&#x261D;&#x261D;.</span>
              </div>
            </>
          )
        }
        {
          response?.feeds.map(feed => {
            return (
              <div className="feed-container" key={feed._id}>
                <FeedHeader timelineData={feed}/>
                <FeedBody postImg={feed.img}/>
                <FeedFooter username={feed.username} totalLikes={feed.likes} comments={feed.comments} caption={feed.desc} imgID={feed._id}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default Feeds;