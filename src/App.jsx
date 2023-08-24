import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import HomePage from "./pages/homePage/HomePage";
import StockUpdate from "./components/StockUpdate";
import CreateEntry from "./pages/create Entry/CreateEntry";
import NotificationList from "./pages/notification list/NotificationList";
import UpdatePage from "./pages/update page/UpdatePage";
import ApprovePage from "./pages/approve page/ApprovePage";
import NotificationApprove from "./pages/notification approve/NotificationApprove";
import StockList from "./pages/Stock page/StockList";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/entry' element={<CreateEntry />} />
      <Route path='/list' element={<NotificationList />} />
      <Route path='/update/:NotificationNumber' element={<UpdatePage />} />
      <Route path='/approve' element={<NotificationApprove />} />
      <Route path='/approve/:NotificationNumber' element={<ApprovePage />} />
      <Route path='/stockList' element={<StockList />} />
      <Route path='/stockUpdate/:MaterialNumber' element={<StockUpdate />} />
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
