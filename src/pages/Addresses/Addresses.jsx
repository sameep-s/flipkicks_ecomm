import React, { useState } from 'react';
import './addresses.css';
import { AddressContainer, AddressOverlay, Footer, ProfileSidebar } from '../../components';
import Navbar from '../Navbar';
import { useAuth } from '../../util_Contexts/auth-context';

const Addresses = () => {

    const { stateUser } = useAuth();

    const [addressOverlayIsOpen, setAddressOverlayIsOpen] = useState(false);

    return (
        <>
            <Navbar />
            <main className="container__main__profile flex jc-center a-item-center">
                <div className="container__inner__profile flex">
                    <ProfileSidebar />

                    <div className="address__data__area">
                        <div className="address__profile__heading flex a-item-center h-5">
                            Addresses
                            <button onClick={() => setAddressOverlayIsOpen(true)} className="btn btn-primary">Add Address+</button>
                        </div>

                        <div className="addresses__area pt-1 pb-1">
                            {stateUser.addresses?.map((address) => <AddressContainer key={address._id} {...address} />)}
                        </div>
                    </div>

                </div>
            </main >
            <AddressOverlay
                addressOverlayIsOpen={addressOverlayIsOpen}
                setAddressOverlayIsOpen={setAddressOverlayIsOpen}
            />
            <Footer />
        </>
    )
}

export default Addresses