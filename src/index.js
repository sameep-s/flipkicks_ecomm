import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


import Home from './pages/Home';

// import { makeServer } from "./server";
// import App from "./App";
// Call make Server
// makeServer();



ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
