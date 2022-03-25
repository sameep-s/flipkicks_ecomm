import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from '../util_Contexts';


const CardProduct = (product) => {

    const { image, title, author, price } = product;

    const { dispatch_Cart } = useCart()

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
                    <button className="pList-card-btn" onClick={() => dispatch_Cart({ type: "ADD_TO_CART", payload: product })}>BUY</button>
                </div>


                <div className="pList-card-badge pos-abs">
                    <FontAwesomeIcon icon={faHeart} className="card-icon-heart card-icon-liked " onClick={() => dispatch_Cart({ type: "DELETE_ITEM", payload: product })} />
                </div>
            </div>

        </>
    );
}

export default CardProduct;