import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useAuth } from '../../util_Contexts/auth-context';
import './addressOverlay.css';

const AddressOverlay = ({ addressOverlayIsOpen, setAddressOverlayIsOpen, edit, address }) => {


    const initialAddressValue = {
        _id: uuid(),
        addName: "",
        address: "",
        pinCode: "",
        phone: ""
    }

    const [addressValue, setAddressValue] = useState(edit ? address : initialAddressValue);
    const { dispatchUser } = useAuth();

    console.log(`overlay address`, address, edit);
    console.log(` addressVal`, addressValue);


    function addAddressHandler(e) {
        e.preventDefault();
        dispatchUser({ type: "ADD_ADDRESS", payload: { address: addressValue } });
        setAddressOverlayIsOpen(false);
        setAddressValue(initialAddressValue);
    }

    function editAddressHandler(e) {
        e.preventDefault();
        dispatchUser({ type: "EDIT__ADDRESS", payload: { address: addressValue } });
        setAddressOverlayIsOpen(false);
        setAddressValue(addressValue);
    }

    function cancelAddressSubmission() {
        setAddressValue(initialAddressValue);
        setAddressOverlayIsOpen(false);
    }


    return (
        <>
            <div
                className="address__ovelay__container flex jc-center a-item-center pos-fix"
                style={{
                    display: addressOverlayIsOpen ? "flex" : "none",
                }}
            >

                <div className="container__form__address">
                    <form onSubmit={(e) => edit ? editAddressHandler(e) : addAddressHandler(e)}>
                        <div className="form__input">
                            <input value={addressValue.addName} onChange={(e) => setAddressValue({ ...addressValue, addName: e.target.value })} type="text" className='input-txt' placeholder='Enter The address name eg: Home, Office' />
                        </div>

                        <div className="form__input">
                            <input value={addressValue.address} onChange={(e) => setAddressValue({ ...addressValue, address: e.target.value })} type="text" className='input-txt' placeholder='Enter Complete Address' />
                        </div>

                        <div className="form__input">
                            <input value={addressValue.pinCode} onChange={(e) => setAddressValue({ ...addressValue, pinCode: e.target.value })} type="number" className='input-txt' placeholder='Enter Pincode' />
                        </div>

                        <div className="form__input">
                            <input value={addressValue.phone} onChange={(e) => setAddressValue({ ...addressValue, phone: e.target.value })} type="number" className='input-txt' placeholder='Enter Mobile Number' />
                        </div>
                        <div className="form__buttons flex jc-end">
                            <button onClick={(e) => edit ? editAddressHandler(e) : addAddressHandler(e)} className="btn btn-primary">{edit ? "Edit" : "Submit"}</button>
                        </div>
                    </form>
                </div>

                <div
                    onClick={cancelAddressSubmission}
                    className="address__overlay__visible pos-fix"
                ></div>
            </div>
        </>
    );
};

export default AddressOverlay;