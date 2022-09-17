import React, { useState } from 'react';
import { addPost } from '../../services/requests';
import './AddFeed.css';

function AddFeed() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageParams, setImageParams] = useState({
        userId: sessionStorage.getItem('userId'),
        username: sessionStorage.getItem('emailORusername'),
        desc: "",
        location: "",
        image: null
    });
    
    const handleInputChange = (event) => {
        setImageParams({...imageParams, [event.target.name]: event.target.value})
    }

    const removeSelectedImage = () => {
        setSelectedImage(null);
    }

    const imageChange = (e) => {
        if(e.target.files && e.target.files.length>0) {
            setSelectedImage(e.target.files[0]);
        }
    }

    const addFeed = async (event) => {
        event.preventDefault();
        if(selectedImage !== null) {
            let formData = new FormData();
            formData.append("userId", sessionStorage.getItem('userId'));
            formData.append("username", sessionStorage.getItem('emailORusername'));
            formData.append("desc", imageParams.desc || "");
            formData.append("location", imageParams.location || "");
            formData.append("image", selectedImage);
            const response = await addPost(formData);
            response.data.statusCode===200 && setSelectedImage(null);
            // response.data.statusCode === 200 && <Feeds />
        }
    }

    return (
        <div className="d-flex flex-column">
            {
                !selectedImage && (
                    <label className="custom-file-upload btn btn-secondary">
                        <input type="file" accept="image/*,video/*" onChange={imageChange} className="add-button"/>
                        Upload
                    </label>
                )
            }
            {
                selectedImage && (
                    <div className="img-container">
                        <img src={URL.createObjectURL(selectedImage)} alt="img_preview" className="align-items-center w-100"/>
                        <span onClick={removeSelectedImage}><i className="fa fa-times-circle cursor-pointer m-1"></i></span>
                    </div>
                )
            }
            {
                selectedImage && (
                    <div className="d-flex flex-column my-1">
                        <form onSubmit={addFeed}>
                            <textarea className="form-control w-100 mb-1" placeholder="Express the image" name="desc" value={imageParams.desc} onChange={handleInputChange} rows="2" maxLength="500"></textarea>
                            <div className="input-group mb-3 w-100 mb-1">
                                <span className="input-group-text" id="basic-addon1"><i className="fa fa-map-marker"></i></span>
                                <input type="text" className="form-control" placeholder="Location" name="location" value={imageParams.location} onChange={handleInputChange} aria-label="Location" />
                            </div>
                            <button type="submit" value="submit" className="btn btn-secondary w-100">Post</button>
                        </form>
                    </div>
                )
            }
        </div>
    )
}
export default AddFeed;