import React, { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const DropDownButton = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    setSelectedValue("P1-Emergency");
  }, []);

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className='flex items-center'>
      <div className='relative'>
        <select
          value={selectedValue}
          onChange={handleDropdownChange}
          className='block appearance-none w-60 px-3 border border-[#b4ed47] bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-8'
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
          <RiArrowDownSLine className='text-gray-500' />
        </div>
      </div>
      {selectedValue === "P1-Emergency" ? (
        <div className='inline-flex items-center ml-2'>
          <input
            type='radio'
            className='appearance-none w-4 h-4 border border-gray-400 rounded-sm checked:bg-blue-500 checked:border-transparent focus:outline-none'
            checked={true}
            onChange={() => {}}
          />
        </div>
      ) : (
        <div className='inline-flex items-center ml-2'>
          <input
            type='radio'
            className='appearance-none w-4 h-4 border border-gray-400 rounded-sm checked:bg-blue-500 checked:border-transparent focus:outline-none'
            checked={false}
            onChange={() => {}}
          />
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
