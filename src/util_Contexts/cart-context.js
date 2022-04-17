import { createContext, useContext, useReducer, useEffect } from "react";
import { CartReducer } from "../util_reducers/cart-reducer";
import axios from "axios";


const defaultCartContextValue = [{ products: "none" }]
const CartContext = createContext(defaultCartContextValue);


const signupHandler = async () => {
    try {
        const response = await axios.post(`/api/auth/login`, {
            email: "adarshbalika@gmail.com",
            password: "ab1"
        });

        // saving the encodedToken in the localStorage
        localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
        console.log(error.response);
    }
};

const CartProvider = ({ children }) => {



    signupHandler();

    // useEffect(() => {


    // });

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


