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
    <div>
      <Header />
      <div className='bg-gray-50 h-screen w-full p-6 sm:px-16 space-y-6'>
        <div className='sm:flex justify-between items-center'>
          <Section1 />
          <TZTable />
        </div>
        <Section2 />
        <div className='sm:flex justify-between'>
          <div>
            <Section3 />
            <Section4 />
          </div>
          <CTTable />
        </div>

        <Section5 />
        <Section6 />
      </div>
    </div>
  );
};

export default HeroSection;
