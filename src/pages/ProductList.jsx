import React from 'react';
import Navbar from './Navbar';
import Filters from './Filters';
import CardProduct from './CardProduct';
import '../pages-css/main.css';



const ProductList = () => {
    return (
        <>
            <Navbar />

            <main class="main-container-pList">
                <div class="content-wrap-pList">
                    <Filters />
                    {/* <!---------------------  main --> */}
                    <div class="main-pList">
                        <div class="main-pList-wrapper">
                            <div class="main-pList-heading">Showing All Products</div>
                            <div class="vert-space"></div>

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