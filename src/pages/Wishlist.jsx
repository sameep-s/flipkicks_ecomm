import React from 'react';
import '../pages-css/wishlist.css';
import CardProduct from './CardProduct';
import Navbar from './Navbar';
import { useWishlist } from '../util_Contexts/wishlist-context';
import { Footer } from '../components';


function Wishlist() {

    const { state_Wishlist: { wishlist } } = useWishlist();

    return (
        <>
            <Navbar />
            <main className="main-container-wishlist">
                <span className="wishlist-heading mt-4">My Wishlist({wishlist.length})</span>
                {wishlist.length === 0 ?
                    <div className="content-wrapper-wishlist txt-center">
                        <h1 className='mt-4'>You Don't Have Any Items In Wishlist.</h1>
                    </div>
                    :
                    <div className="content-wrapper-wishlist">
                        {wishlist?.map(product => <CardProduct key={product._id} {...product} />)}
                    </div>
                }
                <Footer />
            </main>
        </>
    )
}

export default Wishlist;