import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Mega from "./Components/Mega";
import Page from "./Components/Page";
import Product from "./Components/Product";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/page" element={<Page />} />
          <Route exact path="/mega" element={<Mega />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
