import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroImage from "./assets/images/illustration-hero.svg";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Extension from "./components/Extension";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Extension />
    </div>
  );
}

export default App;
