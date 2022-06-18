import React from 'react';
import { AddressContainer } from '../../components';
import Navbar from '../Navbar';
import './checkout.css';

const Checkout = () => {
    return (
        <>
            <Navbar />
            <main className="container__main__checkout flex p-4">
                <div className="address__area">

                    <div className="address__area__heading flex a-item-center p-1">
                        Select Address
                        <span><button className="btn btn-primary"> Add Address+</button></span>
                    </div>
                    <div className="container__addresses p-1  flex flex-col jc-center a-item-center ">

                        {/* ---------------------------------------------- */}
                        <AddressContainer />
                        {/* ---------------------------------------------- */}


                    </div>
                </div>

                <div className="container__order__details">

                    <div className="order__details__heading txt-center h-4 ">
                        Order Details
                    </div>

                    <div className="purchased__item__container">
                        <div className="purchased__item__heading mt-1 h-5 txt-center">
                            Purchased Items
                        </div>

                        <div className=" p-1">
                            <div className="purchased__item__vals flex">
                                <span>Item Name</span>
                                <span className='itemPriceLabel' >Price</span>
                            </div>

                            <div className="container__purchased__item__area">

                                <div className="order__item__container mt-1 flex">
                                    <span>Jordan 1 X OFF-WHITE * 2</span>
                                    <span className='itemPriceLabel'>344456</span>
                                </div>


                            </div>
                        </div>

                    </div>

                    <div className="container__order__priceDetails">

                        <div className="heading__priceDetails h-5 txt-center">
                            Price Details
                        </div>

                        <div className="container__priceDetails p-1">

                            <div className="flex">
                                <span>Total Price:</span>
                                <span className='priceDetail__value' >787888</span>
                            </div>

                            <div className="flex">
                                <span>Disount</span>
                                <span className='priceDetail__value' >787888</span>
                            </div>

                            <div className="flex">
                                <span>Delivery Charges</span>
                                <span className='priceDetail__value' >787888</span>
                            </div>

                            <div className="flex finalPrice">
                                <span>Total</span>
                                <span className='priceDetail__value' >787888</span>
                            </div>

                        </div>
                    </div>

                    <button className="btn btn-primary">Place Order</button>

                </div>
            </main>
        </>
    )
}

export default Checkout