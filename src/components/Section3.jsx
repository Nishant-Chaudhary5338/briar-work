import React from "react";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import SquareRadioButton from "../small-components/SquareRadioButton";

const Section3 = () => {
  return (
    <div className='space-y-2'>
      <h4 className='text-md font-semibold'>Equipment Information:</h4>
      <div className='space-y-2 mt-4'>
        <div className='space-x-4 flex'>
          <span>Equipment Number</span>
          <span className='border border-[#b4ed47] p-[2px] rounded-md pr-16'>
            711484515686888
          </span>
          <div className='flex items-center space-x-1'>
            <PiMagnifyingGlassDuotone
              size={30}
              color='#b4ed47'
              className='border p-[2px] border-[#b4ed47] rounded-md'
            />
            <SquareRadioButton />
            <span>PM</span>
          </div>
        </div>
        <div className='space-x-4 sm:flex items-center'>
          <span>General Description</span>
          <textarea
            rows='3'
            cols='30'
            className='border border-[#b4ed47] focus:outline-none focus:ring-[#b4ed47] focus:border-[#b4ed47]'
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
