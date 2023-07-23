import React, { useEffect, useState } from "react";
import axios from "axios";
import TokenExpiredPopup from "../small-components/TokenExpiredPopup";

const NotificationTest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("Notification_Date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [showTokenExpiredPopup, setShowTokenExpiredPopup] = useState(false); // State to show/hide the popup

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Get the access_token from local storage
      const access_token = localStorage.getItem("access_token");
      console.log(access_token);

      // Make the API call with the access_token in the headers
      const response = await axios.get(
        "http://localhost:3002/api/notification_list",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );

      setData(response.data.znotifc_view_helpType);
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

  // Function to handle sorting based on selected column and order
  const handleSort = (column) => {
    if (sortBy === column) {
      // If the same column is clicked, toggle the sort order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // If a different column is clicked, set the new column and default to ascending order
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  // Function to sort the data based on the selected column and order
  const sortedData = () => {
    const sortedArray = data.sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy].localeCompare(b[sortBy]);
      } else {
        return b[sortBy].localeCompare(a[sortBy]);
      }
    });
    return sortedArray;
  };

  return (
    <div>
      {showTokenExpiredPopup && <TokenExpiredPopup />}{" "}
      {/* Show the TokenExpiredPopup when showTokenExpiredPopup is true */}
      <h1 className="className='h-10 bg-[#71a311] text-white text-2xl font-semibold px-2">
        List of All Notifications
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='m-10 p-10'>
          <table className='table-fixed w-full border-collapse border border-[#b4ed47]'>
            <thead className='bg-gray-100'>
              <tr>
                <th
                  className='w-1/6 p-4 border border-[#b4ed47]'
                  onClick={() => handleSort("Notification")}
                >
                  Notification
                </th>
                <th
                  className='w-1/6 p-4 border border-[#b4ed47]'
                  onClick={() => handleSort("Reported_By")}
                >
                  Reported By
                </th>
                <th
                  className='w-1/6 p-4 border border-[#b4ed47]'
                  onClick={() => handleSort("Notification_Date")}
                >
                  Date
                </th>
                <th
                  className='w-1/6 p-4 border border-[#b4ed47]'
                  onClick={() => handleSort("Notification_Time")}
                >
                  Time
                </th>
                <th
                  className='w-2/6 p-4 border border-[#b4ed47]'
                  onClick={() => handleSort("Description")}
                >
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedData().map((item) => (
                <tr
                  key={item.Notification}
                  className='hover:bg-gray-50 text-center'
                >
                  <td className='p-4 border border-[#b4ed47]'>
                    {item.Notification}
                  </td>
                  <td className='p-4 border border-[#b4ed47]'>
                    {item.Reported_By}
                  </td>
                  <td className='p-4 border border-[#b4ed47]'>
                    {formatDate(item.Notification_Date)}
                  </td>
                  <td className='p-4 border border-[#b4ed47]'>
                    {formatTime(item.Notification_Time)}
                  </td>
                  <td className='p-4 border border-[#b4ed47]'>
                    {item.Description}
                  </td>
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
