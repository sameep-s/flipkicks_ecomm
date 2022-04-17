import React from 'react';
import '../pages-css/props.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from '../util_Contexts';
import { useWishlist } from '../util_Contexts/wishlist-context';


const CardProduct = (product) => {

    const { image, title, author, price } = product;

    const { state_Cart: { cart }, dispatch_Cart } = useCart()
    const { state_Wishlist: { wishlist }, dispatch_Wishlist } = useWishlist();

    return (
        <>

            <div className="pList-card-wrapper pos-rel">
                <div className="pList-card-img">
                    <img src={image} alt="product-image" />
                </div>

                <div className="pList-card-body">
                    <div className="pList-card-title mt-1">
                        {author}
                    </div>
                    <div className="pList-card-subtitle mt-1 txt-gray">
                        {title}
                    </div>

                    <div className="pList-card-price mt-1">{price}</div>
                    <button className="pList-card-btn" onClick={() => dispatch_Cart({ type: "ADD_TO_CART", payload: product })}>
                        {cart.filter(item => item._id === product._id).length === 1 ? "Addded To Cart" : "BUY"}
                    </button>
                </div>


                <div className="pList-card-badge pos-abs " onClick={() => dispatch_Wishlist({ type: "ADD_TO_WISHLIST", payload: product })}>
                    <FontAwesomeIcon
                        icon={faHeart}
                        className={wishlist.filter(item => item._id === product._id).length === 1 ? "card-icon-heart card-icon-liked" : "card-icon-heart"} />
                </div>
            </div>

        </>
    );
}

export default CardProduct;