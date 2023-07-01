import React from "react";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";

const Section6 = () => {
  return (
    <div className='space-y-1'>
      <div className='flex space-x-20'>
        <span>Cost Center</span>
        <div className='flex space-x-1'>
          <span className='border border-teal-300 p-[2px] rounded-md pr-40'></span>
          <PiMagnifyingGlassDuotone
            size={30}
            color='#4db6ac'
            className='border p-[2px] border-teal-300  rounded-md'
          />
          <span className='border border-teal-300 p-[2px] rounded-md pr-40'></span>
        </div>
      </div>
      <div className='flex space-x-20'>
        <span>Location</span>
        <div className='flex space-x-1'>
          <span className='border border-teal-300 p-[2px] rounded-md pr-40'></span>
          <PiMagnifyingGlassDuotone
            size={30}
            color='#4db6ac'
            className='border p-[2px] border-teal-300  rounded-md'
          />
          <span className='border border-teal-300 p-[2px] rounded-md pr-40'></span>
        </div>
      </div>
      <div className='flex space-x-20'>
        <span>Tech ID</span>
        <div className='flex space-x-1'>
          <span className='border border-teal-300 p-[2px] rounded-md pr-40'></span>
          <PiMagnifyingGlassDuotone
            size={30}
            color='#4db6ac'
            className='border p-[2px] border-teal-300  rounded-md'
          />
          <span className='border border-teal-300 p-[2px] rounded-md pr-40'></span>
        </div>
      </div>
      <div className='flex space-x-20'>
        <span>Terms ID</span>
        <div className='flex space-x-1'>
          <span className='border border-teal-300 p-[2px] rounded-md pr-40'></span>
          <PiMagnifyingGlassDuotone
            size={30}
            color='#4db6ac'
            className='border p-[2px] border-teal-300  rounded-md'
          />
          <span className='border border-teal-300 p-[2px] rounded-md pr-40'></span>
        </div>
      </div>
      <div className='flex space-x-20'>
        <span>Currency ID</span>
        <div className='flex space-x-1'>
          <span className='border border-teal-300 p-[2px] rounded-md pr-40'></span>
          <PiMagnifyingGlassDuotone
            size={30}
            color='#4db6ac'
            className='border p-[2px] border-teal-300  rounded-md'
          />
          <span className='border border-teal-300 p-[2px] rounded-md pr-40'></span>
        </div>
      </div>
    </div>
  );
};

export default Section6;
