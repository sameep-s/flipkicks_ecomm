import axios from "axios";


export const addToWishlist = async (dispatch_Wishlist, product, token) => {
    try {
        (() => {
            const { data: { wishlist } } = axios.post("api/user/wishlist", {
                product
            },
                {
                    headers: {
                        authorization: token
                    }
                }
            );
            wishlist && dispatch_Wishlist({ type: "WISHLIST_INIT", payload: { wishlist: wishlist } })
        })();
    }
    catch (e) {
        console.error(e)
    }
}

export const removeFromWishlist = async (dispatch_Wishlist, id, token) => {
    try {
        (() => {
            const { data: { wishlist } } = axios.delete(`api/user/wishlist/${id}`,
                {
                    headers: {
                        authorization: token
                    }
                }
            );
            wishlist && dispatch_Wishlist({ type: "WISHLIST_INIT", payload: { wishlist: wishlist } })
        })();
    }
    catch (e) {
        console.error(e)
    }
}