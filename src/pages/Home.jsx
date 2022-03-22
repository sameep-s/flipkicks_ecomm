import React from 'react';
import '../pages-css/main.css';

import Navbar from "./Navbar";

const Home = () => {
    return (
        <>
            <Navbar />

            <main class="main-container mt-4 flex flex-col a-item-center">
                <div class="content-wrapper-main">
                    {/*  container 1 */}
                    <div class="item-container-full mb-4">
                        <div class="heading-full">POWER YOUR PROGRESS</div>
                        <div class="content-full">
                            <img
                                src="https://lh3.googleusercontent.com/t4rQDNBdMwNtM89kKGCu61cd8oAvBc3rMOCqh746kBN2fsT_BOKh3Y9Ti4hGtySGnKQox1S6ht0VHLRJa2p-ZisXsJHSZYCZVB7ub3YWOJy6S3Hi3IDTkHfXnNAbMIvkBR7zEj7FjH3EvS_5W6Xaunq5gK4cLIZ-la1ruBNHVDQkOTGLCvwz1vFlueqycBL8-OdYn3_cbWYaQsB64nfOtXi-8RCQDTzS7ktl4oEpXjYX0JGtgB_zPbRls99jgVXqC_Jtd94COS9Ywr8h6_TrEvJhAtZz-Jq0ZHXKzA-0r4HBtXKoVtugxrDNPFhxrBegUGTn5UdmH7lvk56Ue0t3vjHv-xmy1W0DRNBQeTwskSI8xBGqW9bt2sVrXXlF7wDcc-OvhssTvOJfLZCImTmO1_IGQgNWBbXTm97-0PEjdADRVjC-Yr8RaXQLsEd3j49CVwXCsRA-2y0tAf81_ay9tUeblIw-DQ1UKhgjL4bblFfUbZ0ntgen4PQHj6NUy3R5aTBA1r2QpADoYJPfXBjzSsYqRkbNFrFqT8DvZGV7Yh0GjJVpCF3oP05XUceGQvUW7RdFt1iZnUkIcdKlkCjVSH3Z1kJkleN1PYq0UpQQUm9d65d9eM2fVE0FzHTgElC1YZzxqIAN6-rUYxE4ylt6hTbyhBL7_njSY--Q3W-cOv2r9Phs99Shax5bunpjjpDFu6ex6WNppIwp7zHDB1OOYYDt5ijV389JbaFFOkif42JoURYS6e91XkWpnJ70Pg=w1200-h749-no?authuser=0"
                                alt="image"
                                class="img-full skeleton-img"
                                loading="lazy"
                            />
                        </div>

                        <div
                            class="text-container mt-4 flex flex-col jc-center a-item-center"
                        >
                            <div class="text-container-heading flex flex-col jc-center a-item-center">
                                <div class="text-heading-sub">
                                    Member Access: 17 - 28 February.
                                </div>
                                <div class="text-heading-main">FIND YOUR FAST</div>
                            </div>
                            <button
                                class="btn-sq btn-dark btn-text mt-2 jc-center a-item-center"
                            >
                                Shop All
                            </button>
                        </div>
                    </div>

                    {/* container 2 */}
                    <div class="item-container mb-4">
                        <div class="item-heading">Trending</div>
                        <div class="item-content">
                            <div class="img-wrapper-two flex jc-space-btw">
                                <div class="img-col-div pos-rel">
                                    <img
                                        src="../assets/images/col-6-1.jpg"
                                        alt="image"
                                        class="img-col skeleton-img"
                                        loading="lazy"
                                    />
                                    <div class="ovelay-container pos-abs">
                                        <div class="overlay-text mb-1">RECHARGE WITH COLOR</div>
                                        <div class="container-overlay-button">
                                            <button class="btn-overlay pr-2 pl-2">Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="img-col-div pos-rel">
                                    <img
                                        src="../assets/images/offjordan.jpg"
                                        alt="image"
                                        class="img-col skeleton-img"
                                        loading="lazy"
                                    />
                                    <div class="ovelay-container pos-abs">
                                        <div class="overlay-text mb-1">Wear The Latest</div>
                                        <div class="container-overlay-button">
                                            <button class="btn-overlay pr-2 pl-2">Shop All</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* container 3  */}
                    <div class="item-container-full mt-4 mb-4">
                        <div class="heading-full">Wear Royalty.</div>
                        <div class="content-full">
                            <img
                                src="../assets/images/airbanner.jpg"
                                alt="image"
                                class="img-full skeleton-img"
                                loading="lazy"
                            />
                        </div>

                        <div
                            class="text-container mt-4 flex flex-col jc-center a-item-center"
                        >
                            <div
                                class="text-container-heading flex flex-col jc-center a-item-center"
                            >
                                <div class="text-heading-sub txt-center">
                                    The latest looks for kids keep them comfy no matter where their
                                    adcentures go.
                                </div>
                                <div class="text-heading-main">IMAGINATION AT PLAY</div>
                            </div>
                            <button
                                class="btn-sq btn-dark btn-text mt-2 jc-center a-item-center"
                            >
                                Shop the looks
                            </button>
                        </div>
                    </div>

                    {/* <!-- container 4  */}
                    <div class="item-container mb-4">
                        <div class="item-heading">Join The Air Force</div>
                        <div class="item-content">
                            <div class="img-wrapper flex jc-space-btw">
                                <div class="img-col-div pos-rel">
                                    <img
                                        src="https://photos.google.com/photo/AF1QipPOunN3V3MlFK1ZyXtx98JzaLBmEhAlGmHI0WR5"
                                        alt="image"
                                        class="img-col skeleton-img"
                                        loading="lazy"
                                    />
                                    <div class="ovelay-container pos-abs">
                                        <div class="overlay-text mb-1">NEW COLORWAYS</div>
                                        <div class="container-overlay-button">
                                            <button class="btn-overlay pr-2 pl-2">Shop All</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="img-col-div pos-rel">
                                    <img
                                        src="../assets/images/aforce2.jpg"
                                        alt="image"
                                        class="img-col skeleton-img"
                                        loading="lazy"
                                    />
                                    <div class="ovelay-container pos-abs">
                                        <div class="overlay-text mb-1">THE BEST OF THE BEST</div>
                                        <div class="container-overlay-button">
                                            <button class="btn-overlay pr-2 pl-2">Shop All</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- conteiner 5 --> */}
                    <div class="item-container-full mt-4 mb-4">
                        <div class="heading-full">DON'T MISS</div>
                        <div class="content-full">
                            <img
                                src="../assets/images/bannerLast.jpg"
                                alt="image"
                                class="img-full skeleton-img"
                                loading="lazy"
                            />
                        </div>
                        <div
                            class="text-container mt-4 flex flex-col jc-center a-item-center"
                        >
                            <div
                                class="text-container-heading flex flex-col jc-center a-item-center"
                            >
                                <div class="text-heading-sub">Flow in classic design</div>
                                <div class="text-heading-main">ICON CLASH COLLECTION</div>
                            </div>
                            <button
                                class="btn-sq btn-dark btn-text mt-2 jc-center a-item-center"
                            >
                                Shop All
                            </button>
                        </div>
                    </div>
                </div>
                <footer class="home-footer flex jc-center a-item-center">
                    CHOOSE YOUR KICKS @ FlipKicks
                </footer>
            </main>

        </>
    );
}

export default Home;