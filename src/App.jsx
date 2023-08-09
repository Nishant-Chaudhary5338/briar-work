import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import EntrySection from "./pages/EntrySection";
import UpdateSection from "./pages/UpdateSection";
import NotificationTest from "./components/NotificationTest";
import StockList from "./components/StockList";
import StockUpdate from "./components/StockUpdate";

const App = () => {
  const username = localStorage.getItem("username");
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/entry' element={<EntrySection />} />
      {/* Add the route for UpdateSection with the NotificationNumber parameter */}
      <Route path='/list' element={<NotificationTest />} />
      {username === "Nick_Burr" && (
        <Route path='/approve' element={<NotificationTest />} />
      )}

      <Route path='/update/:NotificationNumber' element={<UpdateSection />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/stockList' element={<StockList />} />
      <Route path='/stockUpdate' element={<StockUpdate />} />
    </Routes>
  );
};

export default App;

// TODO
// => DONE =>>>>>>> Comment call number on entry page.
// make breakdown indicator unmarkable on entry page.
// => DONE =>>>>>>> map all values on update page and give list to SAP Team.
// => DONE =>>>>>>> make logout button and functionality.
// => DONE =>>>>>>> send data with dynamic user to backend and render list of notification using that user in filter as of now entry is created_by = "p001".
// => DONE =>>>>>>> save username in localStorage and send it while making entry call api.
// => DONE =>>>>>>> make animations more beautiful.
// make changes in update page fields.

// TODOS
// Disable button while making service entry call to avoid duplicate/multiple calls.
// make breakdown indicator unmarkable on entry page.
// pre- fetch help_equipment api for faster user experience
// move all api codes outside component
