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
          <Route path="/" element={<Home search={search} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
