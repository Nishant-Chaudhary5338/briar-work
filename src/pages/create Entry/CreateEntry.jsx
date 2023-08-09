import React from "react";

import ServiceInput from "../../components/ServiceInput";
import LogoutButton from "../../small-components/LogoutButton";

const CreateEntry = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='h-12 bg-[#71a311] items-center flex justify-between px-2'>
        <h1 className='text-white text-2xl font-semibold '>
          Create Plant maintenance Notification
        </h1>
        <LogoutButton />
      </div>
      <div className='bg-gray-50 h-screen w-full p-6 sm:px-16 space-y-6'>
        <div className=''>
          <div className='bg-white shadow-[#b4ed47] rounded-2xl p-10 shadow-2xl'>
            <ServiceInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEntry;
