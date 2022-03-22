import React from 'react';
import '../pages-css/main.css';

const BannerHome = ({ heading, img, msg, subHeading, link = "#" }) => {
    return (
        <>

            <div class="item-container-full mb-4">
                <div class="heading-full">{heading}</div>
                <div class="content-full">
                    <a href={link}>
                        <img
                            src={img}
                            alt="image"
                            class="img-full skeleton-img"
                            loading="lazy"
                        />
                    </a>
                </div>

                <div
                    class="text-container mt-4 flex flex-col jc-center a-item-center"
                >
                    <div class="text-container-heading flex flex-col jc-center a-item-center">
                        <div class="text-heading-sub">
                            {msg}
                        </div>
                        <div class="text-heading-main">{subHeading}</div>
                    </div>
                    <a href={link}>
                        <button
                            class="btn-sq btn-dark btn-text mt-2 jc-center a-item-center"
                        >
                            Shop All
                        </button>
                    </a>
                </div>
            </div>

        </>
    )
}

export default BannerHome;