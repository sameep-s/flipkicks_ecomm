import React from 'react';
import '../pages-css/wishlist.css';
import CardProduct from './CardProduct';
import Navbar from './Navbar';


function Wishlist() {
    return (
        <>
            <Navbar />

            <main class="main-container-wishlist">
                <span class="wishlist-heading mt-4">My Wishlist(2)</span>
                <div class="content-wrapper-wishlist mt-4">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
                {/* <footer class="home-footer">CHOOSE YOUR KICKS @ FlipKicks</footer>  */}
            </main>
        </>
    )
}

export default Wishlist;