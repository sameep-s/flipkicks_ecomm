import { loginService } from "./auth/loginService";
import { signupService } from "./auth/signupService";
import { addToWishlist, removeFromWishlist } from "./wishlist/wishlistService";
import { addToCart, removeFromCart, updateQtyCart } from "./cart/cartService";


export {
    loginService,
    signupService,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    removeFromCart,
    updateQtyCart,
};