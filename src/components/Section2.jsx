import React from "react";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";

const Section2 = () => {
  return (
    <div className='flex space-x-[70px]'>
      <div>Call status:</div>
      <div className='space-x-1 flex items-center'>
        <span className='border border-teal-300 p-[2px] rounded-md'>14</span>
        <PiMagnifyingGlassDuotone
          size={30}
          color='#4db6ac'
          className='border border-teal-300 p-[2px] rounded-md'
        />
        <span className='border border-teal-300 p-[2px] pr-20 rounded-md'>
          Approved
        </span>
      </div>
    </div>
  );
};

export default Section2;
