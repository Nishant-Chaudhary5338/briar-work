import React, { useEffect, useState } from "react";
import Section4 from "../components/Section4";
import Section5 from "../components/Sections5";
import Section6 from "../components/Section6";
import TZTable from "../components/TZTable";
import CTTable from "../components/CTTable";
import axios from "axios";
import { useParams } from "react-router-dom";
import LogoutButton from "../small-components/LogoutButton";
import UpdateRender from "../components/UpdateRender";
import LoadingSpinner from "../small-components/LoadingSpinner";
const UpdateSection = () => {
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { NotificationNumber } = useParams();
  console.log(NotificationNumber);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      console.log(access_token);
      const response = await axios.post(
        "http://localhost:3002/api/service_details",
        { NotificationNumber },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );

      setResponseData(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=' bg-gray-50 h-screen'>
      <div className='h-12 bg-[#71a311] items-center flex justify-between px-2'>
        <h1 className='text-white text-2xl font-semibold '>
          Service Update of Notification - {NotificationNumber}
        </h1>
        <LogoutButton />
      </div>
      {loading ? (
        <LoadingSpinner text='Loading...' />
      ) : (
        <div className=''>
          <div className='p-10 m-10 rounded-3xl px-20 items-center flex justify-between shadow-2xl shadow-[#71a311]'>
            <UpdateRender
              data={
                responseData?.["n0:ZbapiAlmNotifGetDetailResponse"]?.ZgetDet
              }
            />
            <CTTable
              data={
                responseData?.["n0:ZbapiAlmNotifGetDetailResponse"]?.ZgetDet
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateSection;
