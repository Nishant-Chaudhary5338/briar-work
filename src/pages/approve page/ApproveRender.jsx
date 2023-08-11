import React, { useState } from "react";
import axios from "axios";
import StatusChangedPopup from "../../small-components/StatusChangedPopup";

const ApproveRender = ({ data }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState({ status: "", typ: "" });
  console.log(data?.ZitemNo);
  const Znumber = data?.ZitemNo;
  const handleClick = async (statusInt) => {
    try {
      const payload = {
        Imp: {
          Znumber: Znumber,
          StatusInt: statusInt,
          StatusExt: "Stri",
        },
      };

      const access_token = localStorage.getItem("access_token");
      const response = await axios.post(
        "http://localhost:3002/api/update_entry",
        payload,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );

      console.log("payload", payload);
      console.log("API Response:", response.data);

      // Open the popup with the API response
      setPopupVisible(true);
      setPopupContent(response.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className=''>
      <div className='space-y-2'>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Notification No:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.ZitemNo}
          </span>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Description:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4 py-2 min-w-[200px] whitespace-pre-wrap'>
            {data?.Zdesc}
          </span>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Equipment:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.EquipmentNo}
          </span>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Priority:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.Priority}
          </span>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Start Date / Time:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.CreatedDate} / {data?.CreatedTime}
          </span>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            End Date / Time:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.ZendD} / {data?.ZendT}
          </span>
        </div>

        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Cost Centre:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.ZcostCentre}
          </span>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Location:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.FunctLoc}
          </span>
        </div>
        <div className='flex pt-6 text-white font-semibold space-x-4'>
          <button
            className='px-4 py-2 rounded-md bg-blue-500'
            onClick={() => {
              console.log("Button clicked - Approve Request");
              handleClick("APP");
            }}
          >
            Approve Request
          </button>
          <button
            className='px-4 py-2 rounded-md bg-red-500'
            onClick={() => {
              console.log("Button clicked - Reject Request");
              handleClick("REJ");
            }}
          >
            Reject Request
          </button>
        </div>
        {popupVisible && (
          <StatusChangedPopup
            onClose={handleClosePopup}
            statusResponse={popupContent}
          />
        )}
      </div>
    </div>
  );
};

export default ApproveRender;

/*
const handleClick = async (statusInt) => {
  try {
    // ... (rest of the code)

    if (
      response.data &&
      response.data["n0:ZbapiAlmNotifChangeusrstatResponse"]
    ) {
      const responseData =
        response.data["n0:ZbapiAlmNotifChangeusrstatResponse"];
      const status = responseData.Status;
      const typ = responseData.Typ;

      console.log("Setting popup content and visibility...");

      // Open the success or error popup based on the 'typ' value
      if (typ === "S") {
        setPopupVisible(true);
        setPopupContent({ status, typ });
      } else if (typ === "E") {
        setPopupVisible(true);
        setPopupContent({ status, typ });
      }
    }

    // ... (rest of the code)
  } catch (error) {
    console.error("API Error:", error);
  }
};
*/
