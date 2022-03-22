import React from 'react';
import Navbar from './Navbar';
import Filters from './Filters';
import CardProduct from './CardProduct';
import '../pages-css/main.css';



const ProductList = () => {
    return (
        <>
            <Navbar />

            <main className="main-container-pList">
                <div className="content-wrap-pList">
                    <Filters />
                    {/* <!---------------------  main --> */}
                    <div className="main-pList">
                        <div className="main-pList-wrapper">
                            <div className="main-pList-heading">Showing All Products</div>
                            <div className="vert-space"></div>

                            <div className="main-card-area">
                                <CardProduct />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProductList;