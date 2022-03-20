import React from 'react';
import '../pages-css/main.css';

const Home = () => {
    return (
        <>
            <main class="container-main">
                <form action="" class="form-wrapper">
                    <div class="form-heading">Welcome Back</div>
                    <div class="form-body">
                        <label for="email" class="form-label mt-3">Enter your Email.</label>
                        <input
                            type="text"
                            name=""
                            id="email"
                            class="form-input mt-1"
                            autocomplete="off"
                        />

                        <label for="password" class="form-label mt-3"
                        >Enter your password</label
                        >
                        <input
                            type="password"
                            name=""
                            id="password"
                            class="form-input mt-1"
                            autocomplete="off"
                        />
                    </div>

                    <div class="form-utility mt-2">
                        <div class="form-utility-1 flex a-item-center">
                            <input type="checkbox" id="remembercheck" class="form-checkbox" />
                            <label for="remembercheck " class="form-check ml-1"
                            >Remember Me</label
                            >

                            <a href="" class="forgot-pwrd">Forgot Password?</a>
                        </div>
                        <div class="form-utility-2 mt-2">
                            By logging in, you agree to our
                            <a href="" class="form-link"> Privary Policy</a> and
                            <a href="" class="form-link"> Terms of service.</a>
                        </div>
                    </div>

                    <div class="from-button mt-3">
                        <button class="btn-sq btn-light">Login</button>
                    </div>

                    <div class="form-end form-utility mt-1">
                        Not a Member? <a href="./signup.html" class="form-link">Sign in.</a>
                    </div>
                </form>
            </main>
        </>
    );
}

export default Home;