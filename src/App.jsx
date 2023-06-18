import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroImage from "./assets/images/illustration-hero.svg";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Extension from "./components/Extension";
import Faq from "./components/FAQ";
import FaqTest from "./components/FaqTest";

function App() {
  return (
    <div className="bg-white lg:px-20">
      <Navbar />
      <Hero />
      <Features />
      <Extension />
      <FaqTest />
    </div>
  );
}

export default App;
