import React, { useEffect, useState } from "react";
import Section4 from "../components/Section4";
import Section5 from "../components/Sections5";
import Section6 from "../components/Section6";
import TZTable from "../components/TZTable";
import CTTable from "../components/CTTable";
import axios from "axios";
import { useParams } from "react-router-dom";
import LogoutButton from "../small-components/LogoutButton";
const UpdateSection = () => {
  const [responseData, setResponseData] = useState(null);
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
      <div className='p-20 m-20 bg-white rounded-lg shadow-lg '>
        <div className='sm:flex justify-between'>
          <div className='space-y-4'>
            <Section4
              data={
                responseData?.["n0:ZbapiAlmNotifGetDetailResponse"]?.ZgetDet
              }
            />
            <Section5
              data={
                responseData?.["n0:ZbapiAlmNotifGetDetailResponse"]?.ZgetDet
              }
            />
          </div>
          <CTTable
            data={responseData?.["n0:ZbapiAlmNotifGetDetailResponse"]?.ZgetDet}
          />
        </div>

        <div className='sm:flex justify-between mb-10 pb-10'>
          <Section6
            data={responseData?.["n0:ZbapiAlmNotifGetDetailResponse"]?.ZgetDet}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateSection;
