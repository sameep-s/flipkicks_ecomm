import React from 'react'
import '../pages-css/cart.css';
import { useCart } from '../util_Contexts';
import { useWishlist } from '../util_Contexts/wishlist-context';




const CardCart = (product) => {
    const { dispatch_Cart } = useCart();
    const { dispatch_Wishlist } = useWishlist();

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
                                    <button className="btn-cart-qty" onClick={() => dispatch_Cart({ type: "SUB_ITEM_QTY", payload: product })}>-</button>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="cart-info-qty-input"
                                        placeholder={product.qty}
                                    />
                                    <button className="btn-cart-qty" onClick={() => dispatch_Cart({ type: "ADD_ITEM_QTY", payload: product })} >+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart__button__container flex a-item-center">
                    <button className="btn-sq btn-dark btn-wislist">
                        Move To Wishlist
                    </button>
                    <button className="btn-sq btn-dark" onClick={() => dispatch_Cart({ type: "DELETE_ITEM_CART", payload: product })}>Remove from Cart</button>
                </div>
            </div>
        </>

    )
}

export default CardCart;