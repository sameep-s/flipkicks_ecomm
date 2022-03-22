import React from 'react'
import '../pages-css/cart.css';


const CardCart = () => {
    return (
        <>
            <div className="cart-product-wrapper">
                <div className="cart-product-container">
                    <div className="cart-product-image">
                        <img src="https://images.unsplash.com/photo-1610870372593-a8647b04451f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="product-image" />
                    </div>
                    <div className="cart-product-info">
                        <div className="cart-info-cont-left">
                            <div className="cart-sub-cont1">
                                <div className="cart-info-cont-heading">Nike Air Jordans1</div>
                                <div className="cart-info-price">$6000</div>
                                <div className="cart-info-discount">50% off</div>
                            </div>
                            <div className="cart-sub-cont2">
                                <div className="cart-info-qty">Quantity:</div>
                                <div className="cart-qty-btn">
                                    <button className="btn-cart-qty">-</button>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="cart-info-qty-input"
                                        placeholder="1"
                                    />
                                    <button className="btn-cart-qty">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart__button__container flex a-item-center">
                    <button className="btn-sq btn-dark btn-wislist">
                        Move To Wishlist
                    </button>
                    <button className="btn-sq btn-dark">Remove from Cart</button>
                </div>
            </div>
        </>

    )
}

export default CardCart;