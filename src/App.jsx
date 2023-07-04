import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HeroSection from "./pages/HeroSection";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/hero' element={<HeroSection />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
};

export default App;
