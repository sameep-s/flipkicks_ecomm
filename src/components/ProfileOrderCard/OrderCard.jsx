import React from 'react';
import './orderCard.css';

const OrderCard = (item) => {
    return (
        <>
            <div className="profile__order__card mt-1 mb-1 flex">
                <div className="order__image">
                    <img src={item?.image} alt="order__image" />
                </div>

                <div className="order__info m-2">
                    <span>{item.productName}</span>
                    <span className='ml-2'>Qty: {item.qty}</span>
                </div>
            </div>
        </>
    )
}

export default OrderCard