import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HeroSection from "./pages/HeroSection";
import HomePage from "./pages/HomePage";
import Tesr from "./components/Tesr";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Tesr />} />
      <Route path='/hero' element={<HeroSection />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
};

export default App;
