import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Categories from "./Pages/Categories";
import All from "./Components/Categories-pages/All";
import Chairs from "./Components/Categories-pages/Chairs";
import Furnitures from "./Components/Categories-pages/Furnitures";
import Electronics from "./Components/Categories-pages/Electronics";
import Lamps from "./Components/Categories-pages/Lamps";
import Kitchen from "./Components/Categories-pages/Kitchen";
import SkinCare from "./Components/Categories-pages/SkinCare";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />}>
          <Route path="/categories/all" element={<All />} />
          <Route path="/categories/chairs" element={<Chairs />} />
          <Route path="/categories/furnitures" element={<Furnitures />} />
          <Route path="/categories/electronics" element={<Electronics />} />
          <Route path="/categories/lamps" element={<Lamps />} />
          <Route path="/categories/kitchen" element={<Kitchen />} />
          <Route path="/categories/skin-care" element={<SkinCare />} />
        </Route>
        <Route path="/categories/product/:id" element={<ProductPage />} />
        {/* <Route path="/cartPage" element={<CartPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
