import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Footer } from '../components';
import '../pages-css/cart.css';
import { useCart } from '../util_Contexts';
import { getCheckoutDetails, getTotalAmount } from '../util_fucntions/checkout/checkout-functions';
import CardCart from './CardCart';
import Navbar from './Navbar';

const Cart = () => {

    const { state_Cart } = useCart();
    const cartItems = state_Cart.cart;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { priceTotal, itemsTotal } = getCheckoutDetails(cartItems);
    const totalAmount = getTotalAmount(priceTotal);

    return (
        <>
            <Navbar />

            <main className="main-container-cart">
                <div className="cart-heading">My Cart({cartItems.length})</div>
                {cartItems.length === 0 ?

                    <div className="content-wrapper-cart">
                        <h1>You Don't have any items in Cart</h1>
                    </div>
                    :

                    <div className="content-wrapper-cart">
                        {/* <!-- container 1 --> */}
                        <div className="card-cart-container">
                            {cartItems?.map(product => <CardCart key={product._id} {...product} />)}
                        </div>


                        {/* <!-- container 2 --> */}
                        <div className="cart-order-summary">
                            <div className="card-summary-heading">Price Details</div>
                            <hr />
                            <div className="detail-container">
                                <div className="card-detail-inner">
                                    <div className="order-temp">Price ({itemsTotal} Items)</div>
                                    <div className="order-value">{priceTotal}</div>
                                </div>
                                <div className="card-detail-inner">
                                    <div className="order-temp">Discount</div>
                                    <div className="order-value">-$1999</div>
                                </div>
                                <div className="card-detail-inner">
                                    <div className="order-temp">Delivery Charges</div>
                                    <div className="order-value">$10</div>
                                </div>
                                <hr />
                                <div className="card-detail-inner">
                                    <div className="order-total-temp">TOTAL AMOUNT</div>
                                    <div className="order-total-value">${totalAmount}</div>
                                </div>

                                <NavLink to='/checkout'>
                                    <button className="btn-sq btn-dark">PROCEED TO CHECKOUT</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                }
            </main>
            <Footer />
        </>
    )
}

export default Cart;