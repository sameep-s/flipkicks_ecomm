import React from 'react';
import '../pages-css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { useCart, useFilter } from '../util_Contexts';
import { useWishlist } from '../util_Contexts/wishlist-context';
import { useAuth } from '../util_Contexts/auth-context';
import { debounce } from '../util_fucntions/searchFilterProducts';

const Navbar = ({ search }) => {

    const { state, dispatch } = useFilter();
    const { state_Cart: { cart }, dispatch_Cart } = useCart()
    const { user, setUser } = useAuth();
    const { state_Wishlist: { wishlist }, dispatch_Wishlist } = useWishlist();

    const navigate = useNavigate();

    function logOutHandler() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        dispatch_Cart({ type: "CLEAR_CART" });
        dispatch_Wishlist({ type: "CLEAR_WISHLIST" });
        navigate('/', { replace: true });
    }

    const searchProductsHandler = debounce((e) => dispatch({ type: "SEARCH", payload: { searchVal: e.target.value } }))

    return (
        <>
            <nav className="navbar pos-stick flex jc-center a-item-center">
                <div className="nav-inner flex a-item-center jc-space-btw">
                    <div className="navbar--container-strt flex a-item-center">
                        <Link to="/">
                            <div className="brand-name">FlipKicks</div>
                        </Link>
                    </div>

                    {
                        search
                        &&
                        <div className="navbar--container-middle flex a-item-center">
                            <button className="btn-search-nav">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="nav__icon_magnifying" ></FontAwesomeIcon>
                            </button>
                            <input
                                className="input-dark"
                                type="text"
                                name="Search"
                                id="Search"
                                placeholder="search"
                                onChange={(e) => searchProductsHandler(e)}
                            />
                        </div>
                    }
                    <div className="navbar--container-end flex a-item-center">

                        <div className="nav-icon-container">
                            <div className="nav-heart-icon pos-rel">
                                <Link to="/">
                                    <FontAwesomeIcon icon={faUser} className="nav__icons" />
                                </Link>
                            </div>
                        </div>

                        <div className="nav-icon-container">
                            <div className="nav-heart-icon pos-rel">
                                <Link to="/cart">
                                    <FontAwesomeIcon icon={faShoppingCart} className="nav__icons" />
                                    {cart?.length === 0 || <div className="badge badge-danger">{cart?.length}</div>}
                                </Link>
                            </div>
                        </div>

                        <div className="nav-icon-container">
                            <div className="nav-cart-icon pos-rel">
                                <Link to="/wishlist">
                                    <FontAwesomeIcon icon={faHeart} className="nav__icons" ></FontAwesomeIcon>
                                    <div className="fa-solid fa-cart-shopping" id="cart-icon"></div>
                                    {wishlist?.length === 0 || <div className="badge badge-danger">{wishlist?.length}</div>}
                                </Link>
                            </div>
                        </div>


                        {user ?
                            <button
                                onClick={logOutHandler}
                                className="btn-nav jc-center a-item-center">Log Out</button>
                            :
                            <Link to="/login" className="btn-nav jc-center a-item-center">
                                Login
                            </Link>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;