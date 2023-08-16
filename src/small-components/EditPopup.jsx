import React, { useState } from "react";
import axios from "axios";
import { saveTextUpdate } from "../api/textUpdate";

const EditPopup = ({
  onClose,
  onSave,
  zNumber,
  initialShortText,
  initialLongText,
}) => {
  const [shortInputValue, setShortInputValue] = useState(initialShortText);
  const [longInputValue, setLongInputValue] = useState(initialLongText);

  const handleShortInputChange = (event) => {
    const value = event.target.value;
    if (value.length <= 40) {
      setShortInputValue(value);
    }
  };

  const handleLongInputChange = (event) => {
    const value = event.target.value;
    if (value.length <= 500) {
      setLongInputValue(value);
    }
  };

  const handleSave = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const response = await saveTextUpdate(
        zNumber,
        shortInputValue,
        longInputValue,
        access_token,
      );
      console.log(response);
      onSave(shortInputValue, longInputValue);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white w-80 p-6 rounded-md'>
        <h2 className='text-2xl text-center font-bold mb-4'>
          Edit Description of {zNumber}
        </h2>
        <input
          type='text'
          value={shortInputValue}
          onChange={handleShortInputChange}
          className='border border-gray-300 rounded-md px-3 py-2 mb-4 w-full'
          placeholder='Short Text (Max 40 characters)'
        />
        <textarea
          value={longInputValue}
          onChange={handleLongInputChange}
          className='border border-gray-300 rounded-md px-3 py-2 mb-4 w-full'
          rows='4'
          placeholder='Long Text (Max 500 characters)'
        />
        <div className='flex space-x-4'>
          <button
            className='flex-1 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600'
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className='flex-1 py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400'
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPopup;
