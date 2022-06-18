import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../../util_Contexts';
import { useAuth } from '../../util_Contexts/auth-context';
import { useWishlist } from '../../util_Contexts/wishlist-context';
import './profileSidebar.css';

const ProfileSidebar = () => {

    const navigate = useNavigate();
    const { setUser } = useAuth();
    const { dispatch_Cart } = useCart();
    const { dispatch_Wishlist } = useWishlist();

    function styleActiveNav({ isActive }) {
        return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "var(--dark-primary)" : "",
        }
    }

    function logOutHandler() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        dispatch_Cart({ type: "CLEAR_CART" });
        dispatch_Wishlist({ type: "CLEAR_WISHLIST" });
        navigate('/', { replace: true });
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


                <div onClick={logOutHandler} className="profile__sidebarItem red">
                    Logout
                </div>
            </div>
        </>
    )
}

export default ProfileSidebar;