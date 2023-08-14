import React, { useState } from "react";
import axios from "axios";

const EditPopup = ({ onClose, onSave }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSave = async () => {
    onClose();
    try {
      // Call the onSave function with the input value

      // Close the popup
      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white w-80 p-6 rounded-md'>
        <h2 className='text-2xl text-center font-bold mb-4'>
          Edit Description
        </h2>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          className='border border-gray-300 rounded-md px-3 py-2 mb-4 w-full'
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
