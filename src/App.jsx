import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import TestPage from './pages/Test.jsx';
import CategoryPage from './pages/Category.jsx';
import ContactPage from './pages/Contact.jsx';
import MarketingEstateHomePagePage from './pages/MarketingEstateHomePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/marketing-estate-home-page" element={<MarketingEstateHomePagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
