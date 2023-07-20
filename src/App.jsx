import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

import HomePage from "./pages/HomePage";

import EntrySection from "./pages/EntrySection";
import UpdateSection from "./pages/UpdateSection";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/entry' element={<EntrySection />} />
      <Route path='/update' element={<UpdateSection />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
};

export default App;
