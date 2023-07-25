import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

import HomePage from "./pages/HomePage";

import EntrySection from "./pages/EntrySection";
import UpdateSection from "./pages/UpdateSection";
import NotificationTest from "./components/NotificationTest";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/entry' element={<EntrySection />} />
      {/* Add the route for UpdateSection with the NotificationNumber parameter */}
      <Route path='/list' element={<NotificationTest />} />

      <Route path='/update/:NotificationNumber' element={<UpdateSection />} />
      <Route path='/home' element={<HomePage />} />
    </Routes>
  );
};

export default App;

// Comment call number on entry page
// make breakdown indicator unmarkable on entry page
// map all values on update page and give list to SAP Team
// make logout button
// send data with another user to backend and render list of notification using that user in filter
// as of now entry is created_by = "p001"
// save username in localStorage and send it while making entry call api
// make animations more beautiful
