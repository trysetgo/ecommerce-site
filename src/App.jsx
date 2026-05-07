import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./pages/contact.jsx";
import Category from "./pages/category.jsx";
import Test from "./pages/test.jsx";
import Home from "./pages/home.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
