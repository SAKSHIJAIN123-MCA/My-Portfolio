// src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Portfolio from "./components/portfolio";
import Education from "./components/Education";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
