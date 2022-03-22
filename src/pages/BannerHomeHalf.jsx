import React from 'react';
import '../pages-css/main.css';

const BannerHomeHalf = ({ heading = "Heading", img1, img2, text1, text2 }) => {
    return (
        <>
            <div class="item-container mb-4">
                <div class="item-heading">{heading}</div>
                <div class="item-content">
                    <div class="img-wrapper flex jc-space-btw">
                        <div class="img-col-div pos-rel">
                            <img
                                src={img1}
                                alt="image"
                                class="img-col skeleton-img"
                                loading="lazy"
                            />
                            <div class="ovelay-container pos-abs">
                                <div class="overlay-text mb-1">{text1}</div>
                                <div class="container-overlay-button">
                                    <button class="btn-overlay pr-2 pl-2">Shop All</button>
                                </div>
                            </div>
                        </div>
                        <div class="img-col-div pos-rel">
                            <img
                                src={img2}
                                alt="image"
                                class="img-col skeleton-img"
                                loading="lazy"
                            />
                            <div class="ovelay-container pos-abs">
                                <div class="overlay-text mb-1">{text2}</div>
                                <div class="container-overlay-button">
                                    <button class="btn-overlay pr-2 pl-2">Shop All</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerHomeHalf;