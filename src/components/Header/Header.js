import React from 'react';
import { useNavigate } from 'react-router-dom';
import Feeds from '../Post/Feeds/Feeds';
import './Header.css';

const verticalMenuBar = [
    {
        id: 1,
        name: "Search",
        icon: "fa fa-search",
        path: "/search"
    },
    {
        id: 2,
        name: "Home",
        icon: "fa fa-home",
        path: "/feeds"
    },
    {
        id: 3,
        name: "Profile",
        icon: "fa fa-user",
        path: "/profile"
    }
]

function Header() {
    let navigate = useNavigate();
    const userId = sessionStorage.getItem("userId");

    const navigateTo = (path, name) => {
        name==="Profile" ? navigate(`${path}/${userId}`) : navigate(path); 
    }

    return (
        <div className="container">
            <div className="headers">
                {
                    verticalMenuBar.map(menu => {
                        return (
                            <div key={menu.id} className="nav-item cursor-pointer" onClick={() => navigateTo(menu.path, menu.name)}>
                                <i className={`${menu.icon} py-3 px-2 fs-3`}></i>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <Feeds />
            </div>
        </div>
    )
}
export default Header;