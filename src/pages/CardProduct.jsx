import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHeart } from "@fortawesome/free-solid-svg-icons";


function CardProduct({ author, title, price, category }) {
    return (
        <>

            <div className="pList-card-wrapper pos-rel">
                <div className="pList-card-img">
                    <img src="https://images.unsplash.com/photo-1610870372593-a8647b04451f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="product-image" />
                </div>

                <div className="pList-card-body">
                    <div className="pList-card-title mt-1">
                        {author}
                    </div>
                    <div className="pList-card-subtitle mt-1 txt-gray">
                        {title}
                    </div>

                    <div className="pList-card-price mt-1">{price}</div>
                    <button className="pList-card-btn">BUY</button>
                </div>


                <div className="pList-card-badge pos-abs">
                    <FontAwesomeIcon icon={faHeart} className="card-icon-heart card-icon-liked " />
                </div>
            </div>

        </>
    );
}

export default CardProduct;