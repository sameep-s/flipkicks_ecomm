import React from 'react';
import "./App.css";
import Mockman from 'mockman-js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Footer } from './components/index';

function App() {


  return (
    <BrowserRouter>
      <Routes  >
        <Route path="/" element={<Home />} />
        <Route path='/mock' element={<Mockman />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>

      <div className="App">
      </div>
    </BrowserRouter>
  );
}

export default App;
