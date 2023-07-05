import React, { useState } from "react";
import axios from "axios";

const Popup = ({ onClose, onSave }) => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    onSave(text);
    axios
      .post(
        "https://dms-r9vvatw2.authentication.eu10.hana.ondemand.com/oauth/token?grant_type=client_credentials",
        { description: text },
        {
          headers: {
            Authorization:
              "Basic c2ItNzhmNGFiNWQtNGZkYy00MTJhLThmZGEtOGRiZDM3OWRlMjMzIWIyMDE3ODJ8c2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0OlVzS3hRbmI3elFvSGF6Z1c3b0tlek42R0Fabz0=",
          },
        },
      )
      .then((response) => {
        console.log("API request successful", response.status);
      })
      .catch((error) => {
        console.log("API request failed", error);
      });

    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-4 rounded-lg'>
        <textarea
          className='w-60 h-40 p-2 border border-gray-300 rounded-md resize-none'
          placeholder='Enter text (max 500 characters)'
          maxLength={500}
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <div className='flex justify-end mt-4'>
          <button
            className='px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 mr-2'
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className='px-4 py-2 text-sm text-gray-600 bg-gray-300 rounded hover:bg-gray-400'
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
