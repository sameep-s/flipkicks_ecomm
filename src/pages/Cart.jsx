import React from 'react';
import '../pages-css/cart.css';
import CardCart from './CardCart';
import Navbar from './Navbar';

function Cart() {
    return (
        <>
            <Navbar />

            <main class="main-container-cart">
                <div class="cart-heading">My Cart(2)</div>
                <div class="content-wrapper-cart">
                    {/* <!-- container 1 --> */}
                    <div className="card-cart-container">
                        <CardCart />
                        <CardCart />
                        <CardCart />
                    </div>


                    {/* <!-- container 2 --> */}
                    <div class="cart-order-summary">
                        <div class="card-summary-heading">Price Details</div>
                        <hr />
                        <div class="detail-container">
                            <div class="card-detail-inner">
                                <div class="order-temp">Price(2 Items)</div>
                                <div class="order-value">$6000</div>
                            </div>
                            <div class="card-detail-inner">
                                <div class="order-temp">Discount</div>
                                <div class="order-value">-$1999</div>
                            </div>
                            <div class="card-detail-inner">
                                <div class="order-temp">Delivery Charges</div>
                                <div class="order-value">$10</div>
                            </div>
                            <hr />
                            <div class="card-detail-inner">
                                <div class="order-total-temp">TOTAL AMOUNT</div>
                                <div class="order-total-value">$5000</div>
                            </div>

                            <button class="btn-sq btn-dark">PLACE ORDER</button>
                        </div>
                    </div>
                </div>
                {/* <footer class="home-footer">CHOOSE YOUR KICKS @ FlipKicks</footer>  */}
            </main>
        </>
    )
}

export default Cart;