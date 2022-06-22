import React from 'react';
import { Link } from 'react-router-dom';
import '../pages-css/main.css';

const BannerHomeHalf = ({ heading = "Heading", img1, img2, text1, text2, link = "#" }) => {
    return (
        <>
            <div className="item-container mb-4">
                <div className="item-heading">{heading}</div>
                <div className="item-content">
                    <div className="img-wrapper flex jc-space-btw">
                        <div className="img-col-div pos-rel">
                            <Link to={link}>
                                <img
                                    src={img1}
                                    alt="image"
                                    className="img-col {}skeleton-img"
                                    loading="lazy"
                                />
                            </Link>
                            <div className="ovelay-container pos-abs">
                                <div className="overlay-text mb-1">{text1}</div>
                                <div className="container-overlay-button">
                                    <Link to={link} >
                                        <button className="btn-overlay pr-2 pl-2">Shop All</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="img-col-div pos-rel">
                            <Link to={link}>
                                <img
                                    src={img2}
                                    alt="image"
                                    className="img-col skeleton-img"
                                    loading="lazy"
                                />
                            </Link>
                            <div className="ovelay-container pos-abs">
                                <div className="overlay-text mb-1">{text2}</div>
                                <div className="container-overlay-button">
                                    <Link to={link}>
                                        <button className="btn-overlay pr-2 pl-2">Shop All</button>
                                    </Link>
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