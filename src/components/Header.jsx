import React from "react";
import { LiaSave } from "react-icons/lia";
import { AiOutlineClear, AiOutlineDoubleRight } from "react-icons/ai";
import { BsFillClipboard2PlusFill } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";
import { RiToolsFill } from "react-icons/ri";
import { MdHelp } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import { CiViewTable } from "react-icons/ci";
import { PiNewspaperClippingThin } from "react-icons/pi";
const Header = () => {
  return (
    <div className='bg-[#e2ffff] pt-1 flex justify-around border border-teal-400'>
      <div className='flex flex-col items-center'>
        <div className='flex space-x-2 items-center'>
          <div className=''>
            <PiNewspaperClippingThin size={30} color='#80857f' />
            <p>New</p>
          </div>
          <div>
            <LiaSave size={30} color='#80857f' />
            <p>Save</p>
          </div>
          <div>
            <AiOutlineClear size={30} color='#80857f' />
            <p>Clear</p>
          </div>
          <div className=''>
            <AiOutlineDoubleRight />
          </div>
        </div>
        <div className='pt-1'>
          <p className='text-[#0b111c]'>Actions</p>
        </div>
      </div>
      <div className='space-y-1 flex flex-col items-center'>
        <CiViewTable size={30} color='black' className='' />
        <p>View</p>
        <div className='pt-1'>
          <AiFillCaretDown color=' #008080' />
        </div>
      </div>
      <div className='space-y-1 flex flex-col items-center'>
        <BsFillClipboard2PlusFill size={30} color='gray' className='' />
        <p>Additional</p>
        <div className='pt-1'>
          <AiFillCaretDown color=' #008080' />
        </div>
      </div>
      <div className='space-y-1 flex flex-col items-center'>
        <AiFillFolderOpen size={30} color='brown' className='' />
        <p>File</p>
        <div className='pt-1'>
          <AiFillCaretDown color=' #008080' />
        </div>
      </div>
      <div className='space-y-1 flex flex-col items-center'>
        <RiToolsFill color='brown' size={30} className='' />
        <p>Tools</p>
        <div className='pt-1'>
          <AiFillCaretDown color=' #008080' />
        </div>
      </div>
      <div className='space-y-1 flex flex-col items-center'>
        <MdHelp color='blue' size={30} className='' />
        <p className=''>Help</p>
        <div className='pt-1'>
          <AiFillCaretDown color=' #008080' />
        </div>
      </div>
    </div>
  );
};

export default Header;

/*
AiOutlineDoubleRight
*/
