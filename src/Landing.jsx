import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Details from "./Components/Details";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

export const Landing = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <BrowserRouter>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route path="/redux-e-commerce" element={<Home search={search} />} />
          <Route path="/redux-e-commerce/cart" element={<Cart />} />
          <Route path="/redux-e-commerce/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
