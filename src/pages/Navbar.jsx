import React from 'react';
import '../pages-css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart, faHeart, faUser, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useCart, useFilter } from '../util_Contexts';
import { useWishlist } from '../util_Contexts/wishlist-context';
import { useAuth } from '../util_Contexts/auth-context';
import { debounce } from '../util_fucntions/searchFilterProducts';

const Navbar = ({ search }) => {

    const { dispatch } = useFilter();
    const { state_Cart: { cart } } = useCart()
    const { user } = useAuth();
    const { state_Wishlist: { wishlist } } = useWishlist();


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
                                name="Search "
                                id="Search"
                                placeholder="Search 'Air Force' "
                                onChange={(e) => searchProductsHandler(e)}
                            />
                        </div>
                    }
                    <div className="navbar--container-end flex a-item-center">

                        <div className="nav-icon-container">
                            <div className="nav-heart-icon pos-rel">
                                <Link to="/profile">
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
                            <Link to='/products'>
                                <FontAwesomeIcon icon={faHome} className="nav__home" ></FontAwesomeIcon>
                            </Link>

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