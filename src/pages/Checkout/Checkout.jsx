import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import { useNavigate } from 'react-router-dom';
import { AddressContainer, AddressOverlay } from '../../components';
import { useCart } from '../../util_Contexts';
import { useAuth } from '../../util_Contexts/auth-context';
import { getCheckoutDetails, getTotalAmount } from '../../util_fucntions/checkout/checkout-functions';
import Navbar from '../Navbar';
import './checkout.css';

const Checkout = () => {

    const { state_Cart: { cart }, dispatch_Cart } = useCart();


    const initialOrderVal = {
        _id: uuid(),
        orderAddress: "",
        orderItems: cart
    }

    const [order, setOrder] = useState(initialOrderVal);
    const [addressOverlayIsOpen, setAddressOverlayIsOpen] = useState(false);

    const { stateUser, dispatchUser } = useAuth();
    const navigate = useNavigate();

    console.log(`cart`, cart);
    console.log(`order`, order);


    const { priceTotal, itemsTotal } = getCheckoutDetails(cart);
    const totalAmount = getTotalAmount(priceTotal);

    function orderHandler() {

        dispatchUser({ type: "NEW__ORDER", payload: { order: { ...order } } });
        navigate('/orders');

        setOrder(initialOrderVal);
        dispatch_Cart({ type: "CLEAR_CART" });
    }

    return (
        <>
            <Navbar />
            <main className="container__main__checkout flex p-4">
                <div className="address__area">

                    <div className="address__area__heading flex a-item-center p-1">
                        Select Address
                        <span><button onClick={() => setAddressOverlayIsOpen(true)} className="btn btn-primary"> Add Address+</button></span>
                    </div>
                    <div className="container__addresses p-1  flex flex-col jc-center a-item-center ">

                        {stateUser?.addresses?.map((address) => <AddressContainer show setOrder={setOrder} order={order} key={address._id} {...{ address }} />)}

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

                                {cart?.map((item) =>
                                    <div key={item._id} className="order__item__container mt-1 flex">
                                        <span>{item.productName} * {item.qty} </span>
                                        <span className='itemPriceLabel'>{item.price}</span>
                                    </div>
                                )}



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
                                <span className='priceDetail__value' >{priceTotal}</span>
                            </div>

                            <div className="flex">
                                <span>Disount</span>
                                <span className='priceDetail__value' >-$1999</span>
                            </div>

                            <div className="flex">
                                <span>Delivery Charges</span>
                                <span className='priceDetail__value' >$10</span>
                            </div>

                            <div className="flex finalPrice">
                                <span>Total</span>
                                <span className='priceDetail__value' >{totalAmount}</span>
                            </div>

                        </div>
                    </div>

                    <button onClick={() => orderHandler()} className="btn btn-primary " disabled={order.orderAddress === ""} >Place Order</button>

                </div>
            </main>

            <AddressOverlay
                show
                addressOverlayIsOpen={addressOverlayIsOpen}
                setAddressOverlayIsOpen={setAddressOverlayIsOpen}
            />
        </>
    )
}

export default Checkout