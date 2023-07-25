import React from "react";

import ServiceInput from "../components/ServiceInput";
import LogoutButton from "../small-components/LogoutButton";

const EntrySection = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='h-12 bg-[#71a311] items-center flex justify-between px-2'>
        <h1 className='text-white text-2xl font-semibold '>
          List of All Notifications
        </h1>
        <LogoutButton />
      </div>
      <div className='bg-gray-50 h-screen w-full p-6 sm:px-16 space-y-6'>
        <div className='sm:flex-col sm:space-x-20 '>
          <div className='space-y-2'>
            <ServiceInput />
          </div>
          <hr className='border-[#b4ed47] my-10 py-6' />
        </div>
      </div>
    </div>
  );
};

export default EntrySection;
