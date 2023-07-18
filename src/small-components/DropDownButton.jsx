import React, { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import SquareRadioButton from "./SquareRadioButton";

const DropDownButton = ({ onChange }) => {
  const [selectedValue, setSelectedValue] = useState("1");

  useEffect(() => {
    onChange(selectedValue);
  }, [onChange, selectedValue]);

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const options = [
    { value: "1", label: "P1-Emergency" },
    { value: "2", label: "P2-Risk" },
    { value: "3", label: "P3-Repair/replace" },
  ];

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
      <SquareRadioButton selectedValue={selectedValue === "1"} />
    </div>
  );
};

export default DropDownButton;
