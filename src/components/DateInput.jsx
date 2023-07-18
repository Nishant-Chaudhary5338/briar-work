import React, { useState, useEffect } from "react";

const DateInput = ({ title, onDateChange, reset }) => {
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    if (reset) {
      setSelectedDate("");
    }
  }, [reset]);

  const handleInputClick = () => {
    if (selectedDate) {
      setSelectedDate("");
      onDateChange(""); // Clear the selected date
    } else {
      const currentDate = new Date().toISOString().slice(0, 10); // Only retrieve the date part
      setSelectedDate(currentDate);
      onDateChange(currentDate); // Call the callback function with the selected date
    }
  };

  return (
    <div className='space-x-20'>
      <label htmlFor='date'>{title}</label>
      <input
        className='border border-[#b4ed47] p-[2px] rounded-md'
        type='date' // Change the input type to "date"
        id='date'
        value={selectedDate}
        onClick={handleInputClick}
        readOnly
      />
    </div>
  );
};

export default DateInput;
