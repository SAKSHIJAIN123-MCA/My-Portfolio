// src/pages/Home.jsx

import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Certificates from "../components/Certificates";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Hero />
      <About />
      <Services />
      <Certificates />
      <Skills />
    </div>
  );
};

export default Home;
