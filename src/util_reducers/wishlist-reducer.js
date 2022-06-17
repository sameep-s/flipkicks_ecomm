export const WishlistReducer = (state_Wishlist, action_Wishlist) => {

    const { wishlist } = state_Wishlist;

    switch (action_Wishlist.type) {
        case "ADD_TO_WISHLIST":
            if (wishlist.filter(item => item._id === action_Wishlist.payload._id).length === 1)
                return { ...state_Wishlist, wishlist: [...wishlist.filter(item => item._id !== action_Wishlist.payload._id)] }

            return { ...state_Wishlist, wishlist: [...wishlist, action_Wishlist.payload] }

        case "REMOVE_FROM_WISHLIST":
            return { ...state_Wishlist, wishlist: [...wishlist.filter(item => item._id !== action_Wishlist.payload._id)] }

        case "CLEAR_WISHLIST":
            return { ...state_Wishlist, wishlist: [] };

        case "default":
            return state_Wishlist;
    }
}