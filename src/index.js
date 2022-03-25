import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FilterProvider } from "./util_Contexts/filter-context";
import { makeServer } from "./server";
import { CartProvider } from "./util_Contexts/cart-context";
import { ProductsProvider } from "./util_Contexts/products-context";

// Call make Server
makeServer();



ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
