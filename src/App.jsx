import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HeroSection from "./pages/HeroSection";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/hero' element={<HeroSection />} />
    </Routes>
  );
};

export default App;
