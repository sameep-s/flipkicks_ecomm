import React from 'react';
import '../pages-css/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"


const ProductList = () => {
    return (
        <>
            <nav class="navbar pos-stick flex jc-center a-item-center">
                <div class="nav-inner flex a-item-center jc-space-btw">
                    <div class="navbar--container-strt">
                        <a href="../index.html">
                            <div class="brand-name">FlipKicks</div>
                        </a>
                    </div>
                    <div class="navbar--container-middle flex a-item-center">
                        <button class="btn-search-nav">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="nav__icon_magnifying" ></FontAwesomeIcon>
                        </button>
                        <input
                            class="input-dark"
                            type="text"
                            name=""
                            id=""
                            placeholder="search"
                        />
                    </div>
                    <div class="navbar--container-end flex a-item-center">
                        <div class="nav-icon-container">
                            <div class="nav-heart-icon">
                                <a href="./wishlist.html">
                                    <div class="fa-solid fa-heart"></div>
                                </a>
                            </div>
                        </div>

                        <div class="nav-icon-container">
                            <div class="nav-cart-icon">
                                <a href="./cart.html">
                                    <div class="fa-solid fa-cart-shopping" id="cart-icon"></div>
                                </a>
                            </div>
                        </div>

                        <a href="./login.html" class="btn-nav jc-center a-item-center"
                        >Login</a
                        >
                    </div>
                </div>
            </nav>
        </>
    )
}

export default ProductList;