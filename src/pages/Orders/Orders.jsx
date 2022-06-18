import React from 'react';
import './orders.css';
import { Footer, OrderCard, ProfileSidebar } from '../../components';
import Navbar from '../Navbar';
import { useCart } from '../../util_Contexts';


const Orders = () => {

    const { state_Cart } = useCart();
    const cartItems = state_Cart.cart;
    console.log(cartItems);

    return (
        <>
            <Navbar />
            <main className="container__main__profile flex jc-center a-item-center">
                <div className="container__inner__profile flex">
                    <ProfileSidebar />

                    <div className="profile__data__area">
                        <div className="user__profile__orders">
                            <div className="orders__profile__heading h-4 flex">
                                Orders
                            </div>

                            <div className="order__container p-1 mb-2 mt-2">
                                <div className="order__details">
                                    <div>Order ID: 234234fwfd</div>
                                </div>
                                <div className="user__order__area">
                                    {cartItems.map((item) => <OrderCard key={item._id} {...item} />)}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main >
            <Footer />
        </>
    )
}

export default Orders