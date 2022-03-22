import React from 'react';
import '../pages-css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
        <>
            <nav className="navbar pos-stick flex jc-center a-item-center">
                <div className="nav-inner flex a-item-center jc-space-btw">
                    <div className="navbar--container-strt flex a-item-center">
                        <a href="../index.html">
                            <div className="brand-name">FlipKicks</div>
                        </a>
                    </div>
                    <div className="navbar--container-middle flex a-item-center">
                        <button className="btn-search-nav">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="nav__icon_magnifying" ></FontAwesomeIcon>
                        </button>
                        <input
                            className="input-dark"
                            type="text"
                            name=""
                            id=""
                            placeholder="search"
                        />
                    </div>
                    <div className="navbar--container-end flex a-item-center">
                        <div className="nav-icon-container">
                            <div className="nav-heart-icon">
                                <a href="./wishlist.html">
                                    <FontAwesomeIcon icon={faShoppingCart} className="nav__icons" ></FontAwesomeIcon>
                                </a>
                            </div>
                        </div>

                        <div className="nav-icon-container">
                            <div className="nav-cart-icon">
                                <a href="./cart.html">
                                    <FontAwesomeIcon icon={faHeart} className="nav__icons" ></FontAwesomeIcon>
                                    <div className="fa-solid fa-cart-shopping" id="cart-icon"></div>
                                </a>
                            </div>
                        </div>

                        <a href="./login.html" className="btn-nav jc-center a-item-center"
                        >Login</a
                        >
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;