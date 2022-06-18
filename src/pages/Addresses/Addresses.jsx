import React from 'react';
import './addresses.css';
import { Footer, ProfileSidebar } from '../../components';
import Navbar from '../Navbar';

const Addresses = () => {
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

export default Addresses