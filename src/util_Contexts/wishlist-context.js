import { createContext, useReducer, useContext } from "react"
import { WishlistReducer } from "../util_reducers/wishlist-reducer";

const defaultWishlistContextVal = { wishlist: [] }
const WishListContext = createContext(defaultWishlistContextVal);

const WishlistProvider = ({ children }) => {

    const [state_Wishlist, dispatch_Wishlist] = useReducer(WishlistReducer, { wishlist: [] })


    return (
        < WishListContext.Provider value={{ state_Wishlist, dispatch_Wishlist }} >
            {children}
        </WishListContext.Provider >
    )
}

const useWishlist = () => useContext(WishListContext);

export { WishlistProvider, useWishlist };