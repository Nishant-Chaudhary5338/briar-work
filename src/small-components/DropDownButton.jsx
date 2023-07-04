import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const DropDownButton = () => {
  return (
    <div className='inline-block relative'>
      <select className='block appearance-none w-60 px-3 border border-[#b4ed47] bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </select>
      <div className='absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none'>
        <RiArrowDownSLine className='text-gray-500' />
      </div>
    </div>
  );
};

export default DropDownButton;
