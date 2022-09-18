import React,{useState} from 'react';
import { deletePost } from '../../../../services/delete_requests.service';
import './FeedHeaderOptions.css';

function FeedHeaderOptions({ imgId, userId }) {
  
  const deleteButtonClicked = async (imgId) => {
      const deletedPost = await deletePost(imgId);
  }

  const editButtonClicked = async () => {
    console.log("Edit Post");
  }

  return (
    <>
      {
        userId===sessionStorage.getItem("userId") && (
          <div className="dropdown-center">
            <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              &#8942;
            </button>
            <ul className="dropdown-menu">
              <li onClick={() => editButtonClicked(imgId)} className="fw-bold"><a className="far fa-edit px-2 icon-style" href="#"></a>Edit</li>
              <li onClick={() => deleteButtonClicked(imgId)} className="fw-bold"><a class="far fa-trash-alt mx-2 icon-style"></a>Delete</li>
            </ul>
          </div>
        )
      }
    </>
  )
}
export default FeedHeaderOptions;