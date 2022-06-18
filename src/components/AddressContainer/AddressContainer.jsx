import React from 'react';
import './addressContainer.css';

const AddressContainer = ({ show }) => {
    return (
        <>
            <div className="container__address p-1">
                <div className="user__place__address">Home</div>
                <div className="container__address__info flex pt-1">
                    {
                        show &&
                        <div className="address__action__button">
                            <input type="radio" name="address" id="address" />
                        </div>
                    }

                    <div className="user__address__info">
                        <div className="address__lane">H.no-22 Sec-3 Trikuta Nagar, Jammu.</div>
                        <div className="user__pincode mt-1">Pincode: 1800xx</div>
                        <div className="user__contactNumber mt-1">Mobile No.: 1234567890</div>

                        <div className="address__actions flex mt-1">
                            <button className="btn">Edit</button>
                            <button className="btn btn-danger">Remove</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressContainer;