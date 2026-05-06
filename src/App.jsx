import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact.jsx";
import Category from "./pages/Category.jsx";
import Test from "./pages/Test.jsx";
import Home from "./pages/Home.jsx";

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
