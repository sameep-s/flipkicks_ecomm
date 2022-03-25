import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../util_reducers/cart-reducer";



const defaultCartContextValue = []
const CartContext = createContext(defaultCartContextValue);

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, {})


    return (
        <>
            <CartContext.Provider value={{ state, dispatch }}>
                {children}
            </CartContext.Provider>
        </>
    );
}



const useCart = () => useContext(CartContext);



export { CartProvider, useCart };


