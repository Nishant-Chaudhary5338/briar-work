import React, { useState } from "react";
import StatusChangedPopup from "../../small-components/StatusChangedPopup";
import EditPopup from "../../small-components/EditPopup";
import { ApproveRejectEntry } from "../../api/approval-rejection";
import { useNavigate } from "react-router-dom";

const ApproveRender = ({ data }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState({ status: "", typ: "" });
  const [editPopupVisible, setEditPopupVisible] = useState(false);
  const [zNumber, setZNumber] = useState(data?.ZitemNo);
  const [editedShortText, setEditedShortText] = useState(data?.Zdesc); // Initialize with original value
  const [editedLongText, setEditedLongText] = useState(data?.Desc2);
  console.log(data?.ZitemNo);
  const Znumber = data?.ZitemNo;
  const navigate = useNavigate();

  const handleClick = async (statusInt) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const response = await ApproveRejectEntry(
        Znumber,
        statusInt,
        access_token,
      );

      console.log("payload", { Znumber, statusInt, access_token });
      console.log("API Response:", response);

      // Open the popup with the API response
      setPopupVisible(true);
      setPopupContent(response);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    navigate("/approve");
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
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Planner Group:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.FunctLoc}
          </span>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Description:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4 py-2 min-w-[200px] whitespace-pre-wrap'>
            {editedShortText || data?.Zdesc}
          </span>

          <button
            onClick={() => setEditPopupVisible(true)}
            className='text-blue-500 underline'
          >
            Edit
          </button>
          {editPopupVisible && (
            <EditPopup
              onClose={() => setEditPopupVisible(false)}
              onSave={(shortText, longText) => {
                setEditedShortText(shortText);
                setEditedLongText(longText);
              }}
              zNumber={zNumber}
              initialShortText={data?.Zdesc}
              initialLongText={data?.Desc2}
            />
          )}
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Long Description:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4 py-2 min-w-[200px] whitespace-pre-wrap'>
            {editedLongText || data?.Desc2}
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
