import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchUsers } from '../../services/requests';
import { debounce } from '../../common/Debounce';
import ReactRoundedImage from "react-rounded-image";
import ProfilePic from '../../assets/images/profile-user.png';
import './SearchUsers.css';

function SearchUsers() {
    const navigate = useNavigate();
    const [foundUsers, setFoundUsers] = useState([]);

    const search = async (value) => {
        const request = {
            searchedKeyword: value
        }
        const allMatchedUsers = await searchUsers(request);
        setFoundUsers(allMatchedUsers.data.users);
    }

    const goToProfile = (userId) => {
        navigate(`/profile/${userId}`);
    }

    const navigateToFeeds = () => {
        navigate('/feeds');
    }

    const handleChange = (value) => {
        debounced(value);
    }

    const debounced = debounce(search, 400);

    return (
        <div className="container mt-3">
            <div className="d-flex justify-content-center">
                <input
                    type="text" 
                    className="form-control m-2" 
                    placeholder="Search using username, email"
                    onChange={(event) => handleChange(event.target.value)}
                />
                <div className="d-flex align-items-center">
                    <span onClick={navigateToFeeds}><i className="d-flex align-items-center fa fa-times-circle cursor-pointer fs-24"></i></span>
                </div>
            </div>
            <div className="d-flex flex-column">
                {
                    foundUsers.map(user => {
                        return (
                            <div className="mx-2 my-1 border" key={user._id}>
                                <div className="row" onClick={() => goToProfile(user._id)}>
                                    <div className="col-2">
                                        <ReactRoundedImage
                                            image={user?.profilePicture ? user?.profilePicture : ProfilePic}
                                            imageWidth="40"
                                            imageHeight="40"
                                            roundedSize="5"
                                            roundedColor="#bdbdbd"
                                            borderRadius="100"
                                        />
                                    </div>
                                    <div className="col-10 d-flex flex-column mx-0">
                                        <span className="fw-bold fs-14">{user?.username}</span>
                                        <span className="fs-12">{user?.city}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default SearchUsers;