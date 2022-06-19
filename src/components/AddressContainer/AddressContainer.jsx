import React, { useState } from 'react';
import { useAuth } from '../../util_Contexts/auth-context';
import AddressOverlay from '../AddressOverlay/AddressOverlay';
import './addressContainer.css';

const AddressContainer = (address, { show }) => {

    const [editOverlayIsOpen, setEditOverlayIsOpen] = useState(false);
    const { dispatchUser } = useAuth();


    function removeAddress() {
        dispatchUser({ type: "REMOVE__ADDRESS", payload: { address: address } })
    }

    return (
        <>
            <div className="container__address p-1">
                <div className="user__place__address">{address.addName}</div>
                <div className="container__address__info flex pt-1">
                    {
                        show &&
                        <div className="address__action__button">
                            <input type="radio" name="address" id="address" />
                        </div>
                    }

                    <div className="user__address__info flex flex-col">
                        <div className="address__lane">Address: {address.address}</div>
                        <div className="user__pincode mt-1">Pincode: {address.pinCode}</div>
                        <div className="user__contactNumber mt-1">Mobile No: {address.phone}</div>

                        <div className="address__actions flex mt-1">
                            <button onClick={() => setEditOverlayIsOpen(true)} className="btn">Edit</button>
                            <button onClick={removeAddress} className="btn btn-danger">Remove</button>
                        </div>

                    </div>
                </div>
            </div>
            <AddressOverlay
                edit
                address={address}
                addressOverlayIsOpen={editOverlayIsOpen}
                setAddressOverlayIsOpen={setEditOverlayIsOpen}
            />
        </>
    )
}

export default AddressContainer;