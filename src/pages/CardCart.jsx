import React from 'react'
import '../pages-css/cart.css';


const CardCart = () => {
    return (
        <>
            <div class="cart-product-wrapper">
                <div class="cart-product-container">
                    <div class="cart-product-image">
                        <img src="https://images.unsplash.com/photo-1610870372593-a8647b04451f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="product-image" />
                    </div>
                    <div class="cart-product-info">
                        <div class="cart-info-cont-left">
                            <div class="cart-sub-cont1">
                                <div class="cart-info-cont-heading">Nike Air Jordans1</div>
                                <div class="cart-info-price">$6000</div>
                                <div class="cart-info-discount">50% off</div>
                            </div>
                            <div class="cart-sub-cont2">
                                <div class="cart-info-qty">Quantity:</div>
                                <div class="cart-qty-btn">
                                    <button class="btn-cart-qty">-</button>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        class="cart-info-qty-input"
                                        placeholder="1"
                                    />
                                    <button class="btn-cart-qty">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart__button__container flex a-item-center">
                    <button class="btn-sq btn-dark btn-wislist">
                        Move To Wishlist
                    </button>
                    <button class="btn-sq btn-dark">Remove from Cart</button>
                </div>
            </div>
        </>

    )
}

export default CardCart;