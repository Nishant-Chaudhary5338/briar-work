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
          <span className='border border-teal-300 p-[2px] rounded-md pr-16'>
            711484515686888
          </span>
          <div className='flex items-center space-x-1'>
            <PiMagnifyingGlassDuotone
              size={30}
              color='#4db6ac'
              className='border p-[2px] border-teal-300  rounded-md'
            />
            <SquareRadioButton />
            <span>On Hold</span>
          </div>
        </div>
        <div className='space-x-4'>
          <span>General Description</span>
          <span className='border border-teal-300 p-[2px] rounded-md pr-20'>
            Order replacement valve
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section3;
