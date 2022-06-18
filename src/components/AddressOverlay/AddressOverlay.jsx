import React from 'react';
import './addressOverlay.css';

const AddressOverlay = ({ addressOverlayIsOpen, setAddressOverlayIsOpen, edit }) => {
    return (
        <>
            <div
                className="address__ovelay__container flex jc-center a-item-center pos-fix"
                style={{
                    display: addressOverlayIsOpen ? "flex" : "none",
                }}
            >

                <div className="container__form__address">
                    <form action="">
                        <div className="form__input">
                            <input type="text" className='input-txt' placeholder='Enter The address name eg: Home, Office' />
                        </div>

                        <div className="form__input">
                            <input type="text" className='input-txt' placeholder='Enter Complete Address' />
                        </div>

                        <div className="form__input">
                            <input type="number" className='input-txt' placeholder='Enter Pincode' />
                        </div>

                        <div className="form__input">
                            <input type="number" className='input-txt' placeholder='Enter Mobile Number' />
                        </div>
                        <div className="form__buttons flex jc-end">
                            <button className="btn btn-danger">Cancel</button>
                            <button className="btn btn-primary">{edit ? "Edit" : "Submit"}</button>
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