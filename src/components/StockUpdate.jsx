import React from "react";
import LogoutButton from "../small-components/LogoutButton";

const StockUpdate = () => {
  return (
    <div className='bg-gray-50'>
      <div className='bg-[#71a311] px-2 text-xl h-12 flex items-center justify-between'>
        <h1 className='text-white font-semibold'>Stock Updates</h1>
        <LogoutButton />
      </div>
      <div className='p-10 m-20 rounded-3xl px-20 items-center flex justify-between shadow-2xl shadow-[#71a311]'>
        <div className='space-y-2'>
          <div className='flex space-x-2 items-center'>
            <span className=' text-sm text-gray-700 font-semibold w-28'>
              Material
            </span>
            <span className='border border-[#b4ed47] p-[2px] rounded-md pr-20'>
              P1
            </span>
          </div>
          <div className='flex space-x-2 items-center'>
            <span className=' text-sm text-gray-700 font-semibold w-28'>
              Plant
            </span>
            <span className='border border-[#b4ed47] p-[2px] rounded-md pr-20'>
              P1
            </span>
          </div>
          <div className='flex space-x-2 items-center'>
            <span className=' text-sm text-gray-700 font-semibold w-28'>
              Location
            </span>
            <span className='border border-[#b4ed47] p-[2px] rounded-md pr-20'>
              P1
            </span>
          </div>
          <div className='flex space-x-2 items-center'>
            <span className=' text-sm text-gray-700 font-semibold w-28'>
              Spec. Stock
            </span>
            <span className='border border-[#b4ed47] p-[2px] rounded-md pr-20'>
              P1
            </span>
          </div>
          <div className='flex space-x-2 items-center'>
            <span className=' text-sm text-gray-700 font-semibold w-28'>
              Quantity
            </span>
            <span className='border border-[#b4ed47] p-[2px] rounded-md pr-20'>
              P1
            </span>
          </div>
          <div className='flex space-x-2 items-center'>
            <span className=' text-sm text-gray-700 font-semibold w-28'>
              Extra
            </span>
            <span className='border border-[#b4ed47] p-[2px] rounded-md pr-20'>
              P1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockUpdate;
