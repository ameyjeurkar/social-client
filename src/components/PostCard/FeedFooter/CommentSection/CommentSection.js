import React from 'react';
import './CommentSection.css';

function CommentSection({ comments }) {
    console.log("comments: ",comments);
    return (
        <div className="comment-section-container px-2 py-2">
            <span className="fs-14 fw-bold color-white">Comments</span>
            {
                comments.length>0 && comments.map(obj => {
                    return (
                        <div className="d-flex px-2" key={obj}>
                            <span className="fs-11 fw-bold color-white">{obj.username}&nbsp;&nbsp;</span>
                            <span className="fs-11 color-white">{obj.comment}</span>
                        </div>
                    )
                })
            }
            {
                comments.length===0 && <><br></br><span className="fs-12 color-white d-flex justify-content-center">No Comments :(</span></>
            }
        </div>
    )
}
export default CommentSection;