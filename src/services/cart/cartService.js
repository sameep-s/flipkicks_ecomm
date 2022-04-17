import axios from "axios"


export const addToCart = async (dispatch_Cart, product, token) => {
    try {
        const { data: { cart } } = await axios.post('/api/user/cart', {
            product
        },
            {
                headers: {
                    authorization: token,
                }
            }
        );
        cart && dispatch_Cart({ type: "CART_INIT", payload: { cart: cart } })
    }
    catch (e) {
        console.error(e)
    }
}


export const removeFromCart = async (dispatch_Cart, id, token) => {
    try {
        const { data: { cart } } = await axios.delete(`/api/user/cart/${id}`,
            {
                headers: {
                    authorization: token,
                }
            }
        );
        cart && dispatch_Cart({ type: "CART_INIT", payload: { cart: cart } })
    }
    catch (e) {
        console.error(e)
    }
}


export const updateQtyCart = async (dispatch_Cart, id, action, token) => {
    try {
        const { data: { cart } } = await axios.post(`api/user/cart/${id}`,
            {
                action: {
                    type: action === "INC_QTY" ? "increment" : "decrement",
                },
            },
            {
                headers: {
                    authorization: token,
                },
            }
        );

        cart && dispatch_Cart({ type: "CART_INIT", payload: { cart: cart } })

    } catch (e) {
        console.error(e)
    }
}