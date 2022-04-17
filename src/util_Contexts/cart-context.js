import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../util_reducers/cart-reducer";

const defaultCartContextValue = [{ products: "none" }]
const CartContext = createContext(defaultCartContextValue);


const CartProvider = ({ children }) => {

    const [state_Cart, dispatch_Cart] = useReducer(CartReducer, {
        cart: []
    })

    return (
        <>
            <CartContext.Provider value={{ state_Cart, dispatch_Cart }}>
                {children}
            </CartContext.Provider>
        </>
    );
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };


