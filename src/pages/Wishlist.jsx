import React from 'react';
import '../pages-css/wishlist.css';
import CardProduct from './CardProduct';
import Navbar from './Navbar';


function Wishlist() {
    return (
        <>
            <Navbar />

            <main className="main-container-wishlist">
                <span className="wishlist-heading mt-4">My Wishlist(2)</span>
                <div className="content-wrapper-wishlist mt-4">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
                {/* <footer className="home-footer">CHOOSE YOUR KICKS @ FlipKicks</footer>  */}
            </main>
        </>
    )
}

export default Wishlist;