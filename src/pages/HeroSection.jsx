import React from "react";
import ArrowDown from "../small-components/ArrowDown";
import DropDownButton from "../small-components/DropDownButton";
import SquareRadioButton from "../small-components/SquareRadioButton";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { IoMdCopy } from "react-icons/io";
import CTTable from "../components/CTTable";
import TZTable from "../components/TZTable";
import Section2 from "../components/Section2";
import Section1 from "../components/Section1";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Sections5";
import Section6 from "../components/Section6";
import Header from "../components/Header";

const HeroSection = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='h-10 bg-[#71a311] text-white text-2xl font-semibold px-2'>
        Service Call Entry{" "}
      </div>
      <div className='bg-gray-50 h-screen w-full p-6 sm:px-16 space-y-6'>
        <div className='sm:flex sm:space-x-20 '>
          <div className='space-y-2'>
            <Section1 />
            <Section2 />
          </div>
          <div>
            <Section3 />
          </div>
        </div>
        <hr className='border-[#b4ed47] my-10 py-6' />

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

export default HeroSection;
