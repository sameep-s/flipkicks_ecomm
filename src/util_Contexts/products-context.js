import axios from "axios";
import { useContext, createContext, useReducer, useEffect } from "react";
import { productsReducer } from "../util_reducers/products-reducer";

const defaultProductsValue = [{ products: "pro" }]
const ProductsContext = createContext(defaultProductsValue);


const ProductsProvider = ({ children }) => {

    const [state_Products, dispatch] = useReducer(productsReducer, {
        loading: true,
        products: [],
        error: ""
    });


    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('/api/products');
                dispatch({ type: "SUCCESS", payload: data.products })
            }
            catch (e) {
                dispatch({ type: "ERROR", payload: e.message })

            }
        })();

    }, []);



    return (
        <>
            <ProductsContext.Provider value={{ state_Products, dispatch }}>
                {children}
            </ProductsContext.Provider>
        </>
    )
}

const useProducts = () => useContext(ProductsContext);


export { ProductsProvider, useProducts }