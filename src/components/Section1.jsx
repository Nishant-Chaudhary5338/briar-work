import React from "react";
import DropDownButton from "../small-components/DropDownButton";
import SquareRadioButton from "../small-components/SquareRadioButton";

const Section1 = () => {
  return (
    <div className=' pt-4'>
      <div className='space-y-2'>
        <div className='space-x-16'>
          <span className=''>Record type:</span>

          <span className=' items-center space-x-2'>
            <DropDownButton />
            <SquareRadioButton />
            <span>On Hold</span>
          </span>
        </div>
        <div className='space-x-16'>
          <span>Call Number</span>
          <span className='border border-teal-300 p-[2px] rounded-md pr-20'>
            00000075555
          </span>
        </div>
        <div className='space-x-16'>
          <span>Service Type</span>
          <span className='border border-teal-300 p-[2px] rounded-md pr-20'>
            M10
          </span>
        </div>
      </div>
      <div className='space-y-2 mt-2'>
        <div className='space-x-[98px]'>
          <span className=''>Priorty</span>
          <DropDownButton />
        </div>
        <div className='space-x-[53px]'>
          <span className=''>Material code</span>
          <span>
            <DropDownButton />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section1;