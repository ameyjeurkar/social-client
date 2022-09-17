import React, { useState, useEffect } from 'react';
import AddFeed from '../../AddFeed/AddFeed';
import FeedBody from '../FeedBody/FeedBody';
import FeedFooter from '../FeedFooter/FeedFooter';
import FeedHeader from '../FeedHeader/FeedHeader';
import { getTimelineFeeds } from '../../../services/get_requests.service';
import './Feeds.css';
import Header from '../../Header/Header';

function Feeds() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  
  const getData = async () => {
    let response = await getTimelineFeeds();
    setResponse(response?.data?.feeds);
  }
  
  if(response?.length === 0) {
    return <div className="d-flex justify-content-center align-items-center">No Feeds Available</div>
  }

  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div className="wrapper-container">
        <div className="feed-container">
          <AddFeed />
        </div>
        {
          response.map(feed => {
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