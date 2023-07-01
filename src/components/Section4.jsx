import React from "react";

const Section4 = () => {
  return (
    <div className='space-y-4 mt-6'>
      <div className='space-x-14'>
        <span>Item number</span>
        <span className='border border-teal-300 p-[2px] rounded-md pr-20'>
          188134846168464641
        </span>
      </div>
      <div className='space-x-[66px]'>
        <span>Description</span>
        <span className='border border-teal-300 p-[2px] rounded-md pr-20'>
          1681351698678465
        </span>
      </div>
      <div className='space-x-[70px]'>
        <span>Contract #</span>
        <span className='border border-teal-300 p-[2px] w-40 pr-40 rounded-md'></span>
      </div>
      <div className='space-x-[50px]'>
        <span>Contract type</span>
        <span className='border border-teal-300 p-[2px] rounded-md pr-40 w-40'></span>
      </div>
      <div className='space-x-[36px]'>
        <span>Start / End Date</span>
        <span className='border border-teal-300 p-[4px] rounded-md'>
          00/00/00 | 00/00/00
        </span>
      </div>
    </div>
  );
};

export default Section4;
