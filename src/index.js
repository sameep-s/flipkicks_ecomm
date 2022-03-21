import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


import ProductList from './pages/ProductList';


// import { makeServer } from "./server";
// import App from "./App";
// Call make Server
// makeServer();



ReactDOM.render(
  <React.StrictMode>
    <ProductList />
  </React.StrictMode>,
  document.getElementById("root")
);
