import React from 'react';
import '../pages-css/cart.css';
import CardCart from './CardCart';
import Navbar from './Navbar';

function Cart() {
    return (
        <>
            <Navbar />

            <main className="main-container-cart">
                <div className="cart-heading">My Cart(2)</div>
                <div className="content-wrapper-cart">
                    {/* <!-- container 1 --> */}
                    <div className="card-cart-container">
                        <CardCart />
                        <CardCart />
                        <CardCart />
                    </div>


                    {/* <!-- container 2 --> */}
                    <div className="cart-order-summary">
                        <div className="card-summary-heading">Price Details</div>
                        <hr />
                        <div className="detail-container">
                            <div className="card-detail-inner">
                                <div className="order-temp">Price(2 Items)</div>
                                <div className="order-value">$6000</div>
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
                                <div className="order-total-value">$5000</div>
                            </div>

                            <button className="btn-sq btn-dark">PLACE ORDER</button>
                        </div>
                    </div>
                </div>
                {/* <footer className="home-footer">CHOOSE YOUR KICKS @ FlipKicks</footer>  */}
            </main>
        </>
    )
}

export default Cart;