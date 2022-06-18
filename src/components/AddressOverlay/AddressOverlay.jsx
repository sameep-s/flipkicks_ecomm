import React, { useState } from 'react';
import { useAuth } from '../../util_Contexts/auth-context';
import './addressOverlay.css';

const AddressOverlay = ({ addressOverlayIsOpen, setAddressOverlayIsOpen, edit }) => {

    const { userState, dispatchUser } = useAuth();

    const initialAddressValue = {
        addName: "",
        address: "",
        pinCode: 123456,
        phone: 1234567890
    }

    const [addressValue, setAddressValue] = useState(initialAddressValue);


    function addAddressHandler(e) {
        e.preventDefault();
        dispatchUser({ type: "ADD_ADDRESS", payload: { address: addressValue } });
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
                    <form onSubmit={(e) => addAddressHandler(e)}>
                        <div className="form__input">
                            <input onChange={(e) => setAddressValue({ ...addressValue, addName: e.target.value })} type="text" className='input-txt' placeholder='Enter The address name eg: Home, Office' />
                        </div>

                        <div className="form__input">
                            <input onChange={(e) => setAddressValue({ ...addressValue, address: e.target.value })} type="text" className='input-txt' placeholder='Enter Complete Address' />
                        </div>

                        <div className="form__input">
                            <input onChange={(e) => setAddressValue({ ...addressValue, pinCode: e.target.value })} type="number" className='input-txt' placeholder='Enter Pincode' />
                        </div>

                        <div className="form__input">
                            <input onChange={(e) => setAddressValue({ ...addressValue, phone: e.target.value })} type="number" className='input-txt' placeholder='Enter Mobile Number' />
                        </div>
                        <div className="form__buttons flex jc-end">
                            <button className="btn btn-danger">Cancel</button>
                            <button onClick={(e) => addAddressHandler(e)} className="btn btn-primary">{edit ? "Edit" : "Submit"}</button>
                        </div>
                    </form>
                </div>

                <div
                    onClick={() => setAddressOverlayIsOpen(false)}
                    className="address__overlay__visible pos-fix"
                ></div>
            </div>
        </>
    );
};

export default AddressOverlay;