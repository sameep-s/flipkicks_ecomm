
export const CartReducer = (state_Cart, action_Cart) => {
    const { cart } = state_Cart
    console.log(cart);

    const isPresent = cart?.filter((item) => item._id === action_Cart.payload._id).length === 0 ? false : true;

    switch (action_Cart.type) {

        case "ADD_TO_CART":
            if (isPresent)
                return { cart: [...cart] }

            return { cart: [...cart, { ...action_Cart.payload, qty: 1 }] }

        case "REMOVE_FROM_CART":
            return { cart }

        case "ADD_ITEM_QTY":
            return {
                ...state_Cart, cart: cart.map(item => item._id === action_Cart.payload._id ? { ...item, qty: item.qty + 1 } : item)
            }

        case "SUB_ITEM_QTY":
            if (action_Cart.payload.qty === 0)
                return {
                    ...state, cart: cart.filter(item => item._id !== action_Cart.payload._id)
                }

            return {
                ...state_Cart, cart: cart.map(item => item._id === action_Cart.payload._id ? { ...item, qty: item.qty - 1 } : item)
            }

        case "DELETE_ITEM":
            return {
                ...state_Cart, cart: cart?.filter(item => item._id !== action_Cart.payload._id)
            }

        case "default":
            return { ...cart }
    }

}