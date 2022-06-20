import React from 'react';
import './orders.css';
import { Footer, OrderCard, ProfileSidebar } from '../../components';
import Navbar from '../Navbar';
import { useAuth } from '../../util_Contexts/auth-context';


const Orders = () => {

    const { stateUser: { orders } } = useAuth();

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


                            {[...orders]?.reverse().map((order) =>
                                <div key={order._id} className="order__container p-1 mb-2 mt-2">
                                    <div className="order__details">
                                        <div>Order ID: {order._id}</div>
                                    </div>
                                    <div className="user__order__area">
                                        {order?.orderItems?.map((item) => <OrderCard key={item._id} {...item} />)}
                                    </div>
                                </div>
                            )}


                        </div>
                    </div>

                </div>
            </main >
            <Footer />
        </>
    )
}

export default Orders