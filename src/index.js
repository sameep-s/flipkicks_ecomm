import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Home from './pages/Home'
// import { makeServer } from "./server";

// Call make Server
// makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
