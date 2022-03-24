import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Filters from './Filters';
import CardProduct from './CardProduct';
import { useFilter } from '../util_Contexts/filter-context';
import { getSortedProducts } from '../util_fucntions/getSortedProducts';
import '../pages-css/main.css';
import { dataFilterBrands } from '../util_fucntions/dataFilterBrands';


const ProductList = () => {

    const [productsData, setProductsData] = useState([]);

    const { state } = useFilter();
    const { sortBy, brand } = state;

    const productList = [...productsData];
    const sortedData = getSortedProducts(productList, sortBy);
    const filteredDataBrands = dataFilterBrands(sortedData, brand);
    console.log(filteredDataBrands);



    useEffect(() => {
        (async () => {
            const productsResponse = await axios.get('./api/products')
            setProductsData([...productsResponse.data.products])
        })();

    }, []);

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
                                {filteredDataBrands.map(({ _id, author, title, price, category }) => <CardProduct key={_id} author={author} title={title} price={price} category={category} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProductList;