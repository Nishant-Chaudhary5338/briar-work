import React, { useEffect, useState } from "react";
import axios from "axios";
import TokenExpiredPopup from "../small-components/TokenExpiredPopup";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../small-components/LogoutButton";
import LoadingSpinner from "../small-components/LoadingSpinner";
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
  const navigate = useNavigate();
  const handleRowClick = (NotifNumber) => {
    // Call the fetchData function with the NotifNumber from the clicked row
    fetchData(NotifNumber);

    // Navigate to UpdateSection and pass NotifNumber as a URL parameter
    navigate(`/update/${NotifNumber}`);
  };

  return (
    <div>
      {showTokenExpiredPopup && <TokenExpiredPopup />}{" "}
      {/* Show the TokenExpiredPopup when showTokenExpiredPopup is true */}
      <div className='h-12 bg-[#71a311] items-center flex justify-between px-2'>
        <h1 className='text-white text-2xl font-semibold '>
          List of All Notifications
        </h1>
        <LogoutButton />
      </div>
      {loading ? (
        <LoadingSpinner text='Loading...' />
      ) : (
        <div className='m-10 p-10'>
          <table className='table-fixed w-full border-collapse border border-[#b4ed47]'>
            <thead className=''>
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
                  className='hover:bg-[#b4ed47] text-center'
                  onClick={() => handleRowClick(item.Notification)} // Pass the NotifNumber from the clicked row
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
