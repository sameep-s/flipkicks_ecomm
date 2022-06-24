import React, { useEffect } from 'react';
import { Footer } from '../../components';
import Navbar from '../Navbar';
import './singleProduct.css';
import '../../pages-css/props.css'
import { useCart, useProducts } from '../../util_Contexts';
import { useAuth } from '../../util_Contexts/auth-context';
import CardProduct from '../CardProduct';

const SingleProduct = () => {

    const { state_Products: { products } } = useProducts();

    const getProduct = (products, pId = "1") => {
        return products.filter((product) => product.id === pId);
    }

    const product = getProduct(products);
    console.log(product);


    const { state_Cart: { cart }, dispatch_Cart } = useCart();
    const { user } = useAuth();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    function addToCartHandler() {
        user
            ?
            dispatch_Cart({ type: "ADD_TO_CART", payload: product })
            :
            navigate('/login', { replace: true })
    }

    return (
        <>
            <Navbar />

            <div className="wrapper__main__product flex jc-center">
                <div className="container__main__product flex">
                    <div className="container__product__image flex flex-col a-item-center jc-center">

                        <CardProduct {...product} />

                        {/* <img src="https://res.cloudinary.com/sameep1/image/upload/v1655715267/project_Ecomm/ecomm__downscaled/air2_lsfzfb_kp0oqw.jpg" alt="product__image" />

                        <div className="product__actions">
                            <button className="pList-card-btn" onClick={() => addToCartHandler()}>
                                {cart.filter(item => item._id === product._id).length === 1 ? "Added To Cart" : "BUY"}
                            </button>
                        </div> */}
                    </div>

                    {/* Product info */}
                    <div className="container__product__info flex flex-col jc-space-btw p-1">
                        <div className="product__name">Jordan 1 UNC Chicago</div>
                        <div className="product__brand"> <span>Brand: </span> NIKE</div>
                        <div className="product__size"> <span>size: </span> NIKE</div>
                        <div className="product__materials"> <span>Materials: </span> Rubber, Pu, Elastic, Mesh. </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default SingleProduct;