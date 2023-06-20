import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroImage from "./assets/images/illustration-hero.svg";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Extension from "./components/Extension";
import FaqTest from "./components/FaqTest";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white min-w-[300px]">
      <div className="lg:px-16">
        <Navbar />
        <Hero />
        <Features />
        <Extension />
        <FaqTest />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
