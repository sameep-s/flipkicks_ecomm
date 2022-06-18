import React from 'react';
import './addresses.css';
import { AddressContainer, Footer, ProfileSidebar } from '../../components';
import Navbar from '../Navbar';

const Addresses = () => {
    return (
        <>
            <Navbar />
            <main className="container__main__profile flex jc-center a-item-center">
                <div className="container__inner__profile flex">
                    <ProfileSidebar />

                    <div className="address__data__area">
                        <div className="address__profile__heading flex a-item-center h-5">
                            Addresses
                            <button className="btn btn-primary">Add Address+</button>
                        </div>

                        <div className="addresses__area pt-1 pb-1">
                            <AddressContainer />
                        </div>
                    </div>

                </div>
            </main >
            <Footer />
        </>
    )
}

export default Addresses