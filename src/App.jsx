import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Category from "./pages/category.jsx";
import Test from "./pages/test.jsx";
import Home from "./pages/home.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/category" element={<Category />} />
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
