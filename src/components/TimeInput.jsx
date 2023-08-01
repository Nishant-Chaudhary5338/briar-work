import React, { useState, useEffect } from "react";

const TimeInput = ({ title, onTimeChange, reset }) => {
  const [selectedTime, setSelectedTime] = useState("");
  const [currentTimeSelected, setCurrentTimeSelected] = useState(false);

  useEffect(() => {
    if (reset) {
      setSelectedTime("");
      setCurrentTimeSelected(false);
    }
  }, [reset]);

  const handleInputClick = () => {
    if (!currentTimeSelected) {
      const currentDateTime = new Date();
      const currentTime = currentDateTime.toISOString().slice(11, 19); // Extract only the time part (hh:mm:ss)
      setSelectedTime(currentTime);
      setCurrentTimeSelected(true);
      onTimeChange(currentTime); // Call the callback function with the selected time
    } else {
      setSelectedTime("");
      setCurrentTimeSelected(false);
      onTimeChange(""); // Clear the selected time
    }
  };

  return (
    <div className='flex space-x-2'>
      <label
        className='text-sm text-gray-700 font-semibold w-28'
        htmlFor='time'
      >
        {title}
      </label>
      <input
        className='border border-[#b4ed47] p-[2px] rounded-md'
        placeholder='hh:mm:ss'
        type='time' // Use text type instead of time
        id='time'
        value={selectedTime}
        onClick={handleInputClick}
        readOnly
      />
    </div>
  );
};

export default React.memo(TimeInput);
