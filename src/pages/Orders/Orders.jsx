import React from 'react';
import './orders.css';
import { Footer, ProfileSidebar } from '../../components';
import Navbar from '../Navbar';


const Orders = () => {
    return (

        <>
            <Navbar />
            <main className="container__main__profile flex jc-center a-item-center">
                <div className="container__inner__profile flex">
                    <ProfileSidebar />

                    <div className="profile__data__area">
                        Hii
                    </div>

                </div>
            </main >
            <Footer />
        </>
    )
}

export default Orders