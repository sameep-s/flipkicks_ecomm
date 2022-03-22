import React from 'react';
import '../pages-css/main.css';

const Signup = () => {
    return (
        <>
            <main className="container-main">
                <form action="" className="form-wrapper">
                    <div className="form-heading">Sign Up</div>
                    <div className="form-body">
                        <input
                            type="text"
                            name=""
                            id="email"
                            className="form-input mt-4"
                            autocomplete="off"
                            placeholder="Email Adderess"
                        />

                        <input
                            type="password"
                            name=""
                            id="password"
                            className="form-input mt-2"
                            autocomplete="off"
                            placeholder="Choose Password"
                        />

                        <input
                            type="password"
                            name=""
                            id="confirm-password"
                            className="form-input mt-2"
                            autocomplete="off"
                            placeholder="Confirm Password"
                        />

                        <input
                            type="text"
                            name=""
                            id="fname"
                            className="form-input mt-2"
                            autocomplete="off"
                            placeholder="First Name"
                        />

                        <input
                            type="text"
                            name=""
                            id="confirm-password"
                            className="form-input mt-2"
                            autocomplete="off"
                            placeholder="Last Name"
                        />
                    </div>

                    <div className="form-utility mt-2">
                        <div className="form-utility-1 flex a-item-center">
                            <input type="checkbox" id="remembercheck" className="form-checkbox" />
                            <label for="remembercheck " className="form-check ml-1"
                            >Sign up for emails to get updates from FlipKicks.</label
                            >
                        </div>
                        <div className="form-utility-2 mt-2">
                            By creating an account, you agree to our
                            <a href="" className="form-link"> Privary Policy</a> and
                            <a href="" className="form-link"> Terms of service.</a>
                        </div>
                    </div>

                    <div className="from-button mt-3">
                        <button className="btn-sq btn-light">Join Us</button>
                    </div>

                    <div className="form-end form-utility mt-1">
                        Already have a Account?
                        <a href="./login.html" className="form-link"> Log in.</a>
                    </div>
                </form>
            </main>

        </>
    )
}

export default Signup