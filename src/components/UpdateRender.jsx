import React from "react";

const UpdateRender = ({ data }) => {
  return (
    <div className=''>
      <div className='space-y-2'>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Notification No:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.ZitemNo}
          </span>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Description:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4 py-2 min-w-[200px] whitespace-pre-wrap'>
            {data?.Zdesc}
          </span>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Equipment:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.EquipmentNo}
          </span>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Priority:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.Priority}
          </span>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Start Date / Time:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.CreatedDate} / {data?.CreatedTime}
          </span>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            End Date / Time:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.ZendD} / {data?.ZendT}
          </span>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Work Centre:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.WorkCentre}
          </span>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Cost Centre:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.ZcostCentre}
          </span>
        </div>
        <div className='flex space-x-2 items-center'>
          <span className='text-sm text-gray-700 font-semibold w-28'>
            Location:
          </span>
          <span className='border border-[#b4ed47] rounded-md px-4'>
            {data?.FunctLoc}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpdateRender;
