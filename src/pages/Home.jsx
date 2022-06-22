import React from 'react';
import '../pages-css/main.css';
import Navbar from "./Navbar";
import BannerHome from './BannerHome';
import BannerHomeHalf from './BannerHomeHalf';
import { Footer } from '../components';

const Home = () => {
    return (
        <>
            <Navbar />

            <main className="main-container mt-4 flex flex-col a-item-center">
                <div className="content-wrapper-main">
                    <BannerHome
                        img="https://res.cloudinary.com/sameep1/image/upload/v1647955193/project_Ecomm/progress_cbtfxz.jpg"
                        heading="POWER YOUR PROGRESS"
                        msg="Member Access: 17 - 28 February."
                        subHeading="FIND YOUR FAST"
                        link="/products"
                    />

                    <BannerHomeHalf
                        heading="TRENDING"
                        img1="https://res.cloudinary.com/sameep1/image/upload/v1647955194/project_Ecomm/air1_jifei7.jpg"
                        img2="https://res.cloudinary.com/sameep1/image/upload/v1647955192/project_Ecomm/col-6-1_wz2zs2.jpg"
                        text1="RECHARGE WITH COLOR"
                        text2="WEAR THE LATEST"
                        link="/products"
                    />

                    <BannerHome
                        img="https://res.cloudinary.com/sameep1/image/upload/v1647955195/project_Ecomm/airbanner_sq6umr.jpg"
                        heading="Wear Royalty."
                        msg="The latest looks for kids keep them comfy no matter where the adcentures go."
                        subHeading="IMAGINATION AT PLAY"
                        link="/products"
                    />

                    <BannerHomeHalf
                        heading="JOIN THE AIR FORCE"
                        img1="https://res.cloudinary.com/sameep1/image/upload/v1647955194/project_Ecomm/aforce2_ope3pt.jpg"
                        img2="https://res.cloudinary.com/sameep1/image/upload/v1647955193/project_Ecomm/aforce1_h0lbzs.jpg"
                        text1="NEW COLORWAYS"
                        text2="THE BEST OF THE BEST"
                        link="/products"
                    />

                    <BannerHome
                        img="https://res.cloudinary.com/sameep1/image/upload/v1647955193/project_Ecomm/bannerLast_rlwqgi.jpg"
                        heading="DON'T MISS"
                        msg="Flow in classNameic design"
                        subHeading="ICON CLASH COLLECTION"
                        link="/products"
                    />

                </div>
                <Footer />
            </main>

        </>
    );
}

export default Home;