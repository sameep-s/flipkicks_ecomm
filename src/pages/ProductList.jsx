import React from 'react';
import '../pages-css/main.css';
import Navbar from './Navbar';
import Filters from './Filters';
import CardProduct from './CardProduct';
import { useFilter, useProducts } from '../util_Contexts/';
import { dataFilterBrands, getFilteredDataPrice, getFilteredDataSize, getSortedProducts } from '../util_fucntions/';


const ProductList = () => {

    const { state } = useFilter();
    const { sortBy, rangeValue, brand, size } = state;

    const { state_Products } = useProducts();
    const productList = [...state_Products.products];

    const sortedData = getSortedProducts(productList, sortBy);
    const filteredDataBrands = dataFilterBrands(sortedData, brand);
    const filteredDataSize = getFilteredDataSize(filteredDataBrands, size);
    const filteredDataPrice = getFilteredDataPrice(filteredDataSize, rangeValue)


    return (
        <>
            <Navbar />

            <main className="main-container-pList">
                <div className="content-wrap-pList">
                    <Filters />

                    <div className="main-pList">
                        <div className="main-pList-wrapper">
                            <div className="main-pList-heading">Showing All Products</div>
                            <div className="vert-space"></div>
                            <div className="main-card-area">
                                {filteredDataPrice?.map((product) => <CardProduct key={product._id} {...product} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProductList;