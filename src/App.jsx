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
import NotFoundPage from "./pages/not found/NotFoundPage";

const App = () => {
  const accessData = JSON.parse(localStorage.getItem("access_data"));
  const zv_web_AccType = accessData && accessData.zv_web_AccType;
  const pmNotifCr = zv_web_AccType?.PmNotifCr === "true";
  const pmNotifRep = zv_web_AccType?.PmNotifRep === "true";
  const pmNotifSuper = zv_web_AccType?.PmNotifSuper === "true";
  const stockTransf = zv_web_AccType?.StockTransf === "true";
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<HomePage />} />
      {pmNotifCr && <Route path='/entry' element={<CreateEntry />} />}
      {pmNotifRep && <Route path='/list' element={<NotificationList />} />}
      {pmNotifRep && (
        <Route path='/update/:NotificationNumber' element={<UpdatePage />} />
      )}
      {pmNotifSuper && (
        <Route path='/approve' element={<NotificationApprove />} />
      )}
      {pmNotifSuper && (
        <Route path='/approve/:NotificationNumber' element={<ApprovePage />} />
      )}
      {stockTransf && <Route path='/stockList' element={<StockList />} />}
      {stockTransf && (
        <Route path='/stockUpdate/:MaterialNumber' element={<StockUpdate />} />
      )}
      <Route path='*' element={<NotFoundPage />} />
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
