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
import { RequireAuth } from './components';
import Checkout from './pages/Checkout/Checkout';
import { Addresses, Orders, Profile } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes  >
        <Route path="/" element={<Home />} />
        <Route path='/mock' element={<Mockman />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        {/* Private Routes */}
        <Route path='/cart' element={<RequireAuth><Cart /></RequireAuth>} />
        <Route path='/wishlist' element={<RequireAuth><Wishlist /></RequireAuth>} />
        <Route path='/checkout' element={<RequireAuth><Checkout /></RequireAuth>} />
        <Route path='/profile' element={<RequireAuth> <Profile /> </RequireAuth>} />
        <Route path='/address' element={<RequireAuth> <Addresses /> </RequireAuth>} />
        <Route path='/orders' element={<RequireAuth> <Orders /> </RequireAuth>} />


      </Routes>

      <div className="App">
      </div>
    </BrowserRouter>
  );
}

export default App;
