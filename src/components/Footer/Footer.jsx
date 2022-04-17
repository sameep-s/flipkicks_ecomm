import React from 'react';
import './footer.css';
import { footerData } from '../../Frontend-data/footer-data';
import { LinkContainer } from '..';


const Footer = () => {
    return (
        <>
            <footer className="container__main__footer flex jc-center">

                <div className="container__inner__footer p-2 flex ">

                    {footerData?.map((data) => <LinkContainer key={data._id}  {...data} />)}

                </div>

            </footer>
        </>
    )
}

export default Footer;