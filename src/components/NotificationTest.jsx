import React, { useEffect, useState } from "react";
import axios from "axios";

const NotificationTest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the access_token from local storage
        const access_token = localStorage.getItem("access_token");
        console.log("call from glass", access_token);

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
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString();
  };

  const formatTime = (timeString) => {
    const timeObj = new Date(timeString);
    return timeObj.toLocaleTimeString();
  };

  return (
    <div>
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
                <th className='w-1/6 p-4 border border-[#b4ed47]'>
                  Notification
                </th>
                <th className='w-1/6 p-4 border border-[#b4ed47]'>
                  Reported By
                </th>
                <th className='w-1/6 p-4 border border-[#b4ed47]'>Date</th>
                <th className='w-1/6 p-4 border border-[#b4ed47]'>Time</th>
                <th className='w-2/6 p-4 border border-[#b4ed47]'>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
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
