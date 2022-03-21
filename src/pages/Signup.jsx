import React from 'react';
import '../pages-css/main.css';

const Signup = () => {
    return (
        <>
            <main class="container-main">
                <form action="" class="form-wrapper">
                    <div class="form-heading">Sign Up</div>
                    <div class="form-body">
                        <input
                            type="text"
                            name=""
                            id="email"
                            class="form-input mt-4"
                            autocomplete="off"
                            placeholder="Email Adderess"
                        />

                        <input
                            type="password"
                            name=""
                            id="password"
                            class="form-input mt-2"
                            autocomplete="off"
                            placeholder="Choose Password"
                        />

                        <input
                            type="password"
                            name=""
                            id="confirm-password"
                            class="form-input mt-2"
                            autocomplete="off"
                            placeholder="Confirm Password"
                        />

                        <input
                            type="text"
                            name=""
                            id="fname"
                            class="form-input mt-2"
                            autocomplete="off"
                            placeholder="First Name"
                        />

                        <input
                            type="text"
                            name=""
                            id="confirm-password"
                            class="form-input mt-2"
                            autocomplete="off"
                            placeholder="Last Name"
                        />
                    </div>

                    <div class="form-utility mt-2">
                        <div class="form-utility-1 flex a-item-center">
                            <input type="checkbox" id="remembercheck" class="form-checkbox" />
                            <label for="remembercheck " class="form-check ml-1"
                            >Sign up for emails to get updates from FlipKicks.</label
                            >
                        </div>
                        <div class="form-utility-2 mt-2">
                            By creating an account, you agree to our
                            <a href="" class="form-link"> Privary Policy</a> and
                            <a href="" class="form-link"> Terms of service.</a>
                        </div>
                    </div>

                    <div class="from-button mt-3">
                        <button class="btn-sq btn-light">Join Us</button>
                    </div>

                    <div class="form-end form-utility mt-1">
                        Already have a Account?
                        <a href="./login.html" class="form-link"> Log in.</a>
                    </div>
                </form>
            </main>

        </>
    )
}

export default Signup