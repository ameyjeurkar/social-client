import React, { useState } from 'react';
import Profile from '../Profile/Profile';
import { useNavigate } from 'react-router-dom';
import ReactRoundedImage from "react-rounded-image";
import { searchUsers } from '../../services/requests';
import ProfilePic from '../../assets/images/profile-user.png';
import './SearchUsers.css';

function SearchUsers() {
    const navigate = useNavigate();
    const [foundUsers, setFoundUsers] = useState([]);

    const search = async (value) => {
        const allMatchedUsers = await searchUsers(value);
        console.log(allMatchedUsers);
        setFoundUsers(allMatchedUsers.data.users);
    }

    const goToProfile = (userId) => {
        navigate(`/profile/${userId}`);
    }

    return (
        <div className="container">
            <input type="text" className="form-control m-2" placeholder="Search using username, email" onChange={(event) => search(event.target.value)}/>
            
            {
                foundUsers.map(user => {
                    return (
                        <div className="m-2 border" key={user._id}>
                            <div className="row" onClick={() => goToProfile(user._id)}>
                                <div className="col-2">
                                    <ReactRoundedImage
                                        image={user?.profilePicture ? user?.profilePicture : ProfilePic}
                                        imageWidth="50"
                                        imageHeight="50"
                                        roundedSize="5"
                                        roundedColor="#bdbdbd"
                                        borderRadius="100"
                                    />
                                </div>
                                <div className="col-10 d-flex flex-column">
                                    <span className="fw-bold">{user?.username}</span>
                                    <span>{user?.city}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default SearchUsers;