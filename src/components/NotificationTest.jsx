import React, { useEffect, useState } from "react";
import axios from "axios";
import TokenExpiredPopup from "../small-components/TokenExpiredPopup";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../small-components/LogoutButton";
import LoadingSpinner from "../small-components/LoadingSpinner";

const NotificationTest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTokenExpiredPopup, setShowTokenExpiredPopup] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState([]); // New state for filtered data

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Set filteredData to data whenever data changes (initial load or new API response)
    setFilteredData(data);
  }, [data]);

  const fetchData = async () => {
    try {
      // Get the access_token from local storage
      const access_token = localStorage.getItem("access_token");
      console.log(access_token);
      const reportedBy = localStorage.getItem("username");

      // Make the API call with the access_token in the headers
      const response = await axios.get(
        "http://localhost:3002/api/notification_list",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "X-Reported-By": reportedBy,
          },
        },
      );

      setData(response.data.znotifc_view_helpType);
      console.log(response.data.znotifc_view_helpType);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setShowTokenExpiredPopup(true);
    }
  };

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString();
  };

  const formatTime = (timeString) => {
    const timeObj = new Date(timeString);
    return timeObj.toLocaleTimeString();
  };

  const convertToISODate = (dateString) => {
    const parts = dateString.split("/");
    if (parts.length === 3) {
      return `${parts[2]}-${parts[0]}-${parts[1]}`;
    }
    return dateString;
  };

  const handleRowClick = (NotifNumber) => {
    // Call the fetchData function with the NotifNumber from the clicked row
    fetchData(NotifNumber);

    // Navigate to UpdateSection and pass NotifNumber as a URL parameter
    navigate(`/update/${NotifNumber}`);
  };

  const handleApplyFilter = () => {
    // Filter the data based on selected start and end dates
    const filteredData = data.filter((item) => {
      const notificationDate = new Date(item.Notification_Date).getTime();
      const startDateTime = startDate
        ? new Date(convertToISODate(startDate)).getTime()
        : 0;
      const endDateTime = endDate
        ? new Date(convertToISODate(endDate)).getTime()
        : Number.MAX_VALUE;

      return (
        notificationDate >= startDateTime && notificationDate <= endDateTime
      );
    });

    // Update the state with the filtered data
    setFilteredData(filteredData);
  };

  return (
    <div>
      {showTokenExpiredPopup && <TokenExpiredPopup />}
      {/* Show the TokenExpiredPopup when showTokenExpiredPopup is true */}
      <div className='h-12 bg-[#71a311] items-center flex justify-between px-2'>
        <h1 className='text-white text-2xl font-semibold '>
          List of All Notifications
        </h1>
        <LogoutButton />
      </div>
      <div className='flex justify-between my-4'>
        <div>
          <input
            type='date'
            className='border p-1'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <span className='mx-2'>to</span>
          <input
            type='date'
            className='border p-1'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <button
            className='px-4 py-2 bg-[#b4ed47] text-white rounded-md ml-2'
            onClick={handleApplyFilter}
          >
            Apply Filter
          </button>
        </div>
      </div>
      {loading ? (
        <LoadingSpinner text='Loading...' />
      ) : (
        <div className='m-10 p-10'>
          <table className='table-fixed w-full border-collapse border border-[#b4ed47]'>
            <thead className=''>
              <tr>
                <th className='w-1/6 custom-border'>Notification</th>
                <th className='w-1/6 custom-border'>Reported By</th>
                <th className='w-1/6 custom-border'>Equipment No.</th>
                <th className='w-1/6 custom-border'>Date</th>
                <th className='w-1/6 custom-border'>Time</th>
                <th className='w-2/6 custom-border'>Description</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr
                  key={item.Notification}
                  className='hover:bg-[#b4ed47] text-center'
                  onClick={() => handleRowClick(item.Notification)}
                >
                  <td className='custom-border'>{item.Notification}</td>
                  <td className='custom-border'>{item.Reported_By}</td>
                  <td className='custom-border'>{item.Equipment_number}</td>
                  <td className='custom-border'>
                    {formatDate(item.Notification_Date)}
                  </td>
                  <td className='custom-border'>
                    {formatTime(item.Notification_Time)}
                  </td>
                  <td className='custom-border'>{item.Description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NotificationTest;
