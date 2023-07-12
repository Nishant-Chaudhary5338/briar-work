import React, { useState } from "react";

const DateInput = ({ title }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleInputClick = () => {
    if (selectedDate) {
      setSelectedDate("");
    } else {
      const currentDate = new Date().toISOString().slice(0, 16);
      setSelectedDate(currentDate);
    }
  };

  return (
    <div className='space-x-20'>
      <label htmlFor='date'>{title}</label>
      <input
        className='border border-[#b4ed47] p-[2px] rounded-md'
        type='datetime-local'
        id='date'
        value={selectedDate}
        onClick={handleInputClick}
        readOnly
      />
    </div>
  );
};

export default DateInput;
