import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroImage from "./assets/images/illustration-hero.svg";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
