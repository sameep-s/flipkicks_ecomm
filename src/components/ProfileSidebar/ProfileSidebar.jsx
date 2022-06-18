import React from 'react';
import { NavLink } from 'react-router-dom';
import './profileSidebar.css';

const ProfileSidebar = () => {

    function styleActiveNav({ isActive }) {
        return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "var(--dark-primary)" : "",
        }
    }

    return (
        <>
            <div className="container__profile__sidebar pos-stick">

                <NavLink to='/profile' style={styleActiveNav}>
                    <div className="profile__sidebarItem">
                        Profile
                    </div>
                </NavLink>

                <NavLink to='/orders' style={styleActiveNav}>
                    <div className="profile__sidebarItem">
                        Orders
                    </div>
                </NavLink>

                <NavLink to='/address' style={styleActiveNav}>
                    <div className="profile__sidebarItem">
                        Addresses
                    </div>
                </NavLink>


                <div className="profile__sidebarItem red">
                    Logout
                </div>
            </div>
        </>
    )
}

export default ProfileSidebar;