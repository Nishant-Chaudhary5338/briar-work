import React from "react";
import Section4 from "../components/Section4";
import Section5 from "../components/Sections5";
import Section6 from "../components/Section6";
import TZTable from "../components/TZTable";
import CTTable from "../components/CTTable";

const UpdateSection = () => {
  return (
    <div className=''>
      <div className='h-10 bg-[#71a311] text-white text-2xl font-semibold px-2'>
        Service Call Update
      </div>
      <div className='px-10'>
        <div className='sm:flex justify-between'>
          <div className='space-y-4'>
            <Section4 />
            <Section5 />
          </div>
          <CTTable />
        </div>

        <div className='sm:flex justify-between mb-10 pb-10'>
          <Section6 />
          <TZTable />
        </div>
      </div>
    </div>
  );
};

export default UpdateSection;
