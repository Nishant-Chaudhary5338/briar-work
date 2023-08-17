import React, { useState } from "react";
import axios from "axios";
import StatusChangedPopup from "../../small-components/StatusChangedPopup";
import EditPopup from "../../small-components/EditPopup";

const UpdateRender = ({ data }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState({ status: "", typ: "" });
  const [editPopupVisible, setEditPopupVisible] = useState(false);
  const [zNumber, setZNumber] = useState(data?.ZitemNo);
  const [editedShortText, setEditedShortText] = useState(data?.Zdesc); // Initialize with original value
  const [editedLongText, setEditedLongText] = useState(data?.Desc2);
  console.log(data?.ZitemNo);
  const Znumber = data?.ZitemNo;

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
          <span className='border border-[#b4ed47] rounded-md px-4 py-2 '>
            {editedLongText || data?.Desc2}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpdateRender;
