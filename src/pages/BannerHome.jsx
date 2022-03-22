import React from 'react';
import '../pages-css/main.css';

const BannerHome = ({ heading, img, msg, subHeading, link = "#" }) => {
    return (
        <>

            <div className="item-container-full mb-4">
                <div className="heading-full">{heading}</div>
                <div className="content-full">
                    <a href={link}>
                        <img
                            src={img}
                            alt="image"
                            className="img-full skeleton-img"
                            loading="lazy"
                        />
                    </a>
                </div>

                <div
                    className="text-container mt-4 flex flex-col jc-center a-item-center"
                >
                    <div className="text-container-heading flex flex-col jc-center a-item-center">
                        <div className="text-heading-sub">
                            {msg}
                        </div>
                        <div className="text-heading-main">{subHeading}</div>
                    </div>
                    <a href={link}>
                        <button
                            className="btn-sq btn-dark btn-text mt-2 jc-center a-item-center"
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