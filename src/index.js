import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FilterProvider } from "./util_Contexts/filter-context";
import { CartProvider } from "./util_Contexts/cart-context";
import { ProductsProvider } from "./util_Contexts/products-context";

import { makeServer } from "./server";
import { WishlistProvider } from "./util_Contexts/wishlist-context";
import { AuthProvider } from "./util_Contexts/auth-context";

// Call make Server
makeServer();



ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <AuthProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </AuthProvider>
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
