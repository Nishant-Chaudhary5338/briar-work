import React from "react";
import ArrowDown from "../small-components/ArrowDown";
import DropDownButton from "../small-components/DropDownButton";
import SquareRadioButton from "../small-components/SquareRadioButton";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { IoMdCopy } from "react-icons/io";
import CTTable from "./CTTable";
import TZTable from "./TZTable";
import Section2 from "./Section2";
import Section1 from "./Section1";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Sections5";

const HeroSection = () => {
  return (
    <div className='bg-gray-50 h-screen w-full p-6 px-20 space-y-6'>
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
    </div>
  );
};

export default HeroSection;
