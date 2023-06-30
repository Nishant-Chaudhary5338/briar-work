import React from "react";
import { HiOutlineNewspaper } from "react-icons/hi";
import { GiSave } from "react-icons/gi";
import { RiArrowGoBackFill } from "react-icons/ri";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsFillClipboard2PlusFill } from "react-icons/bs";
import { FcViewDetails } from "react-icons/fc";
import { AiFillFolderOpen } from "react-icons/ai";
import { RiToolsFill } from "react-icons/ri";
import { MdHelp } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
const Header = () => {
  return (
    <div className='bg-teal-50 pt-1 flex justify-around border border-black '>
      <div className='flex flex-col items-center'>
        <div className='flex space-x-2 items-center'>
          <div className=''>
            <HiOutlineNewspaper size={60} />
            <p>New</p>
          </div>
          <div>
            <GiSave size={60} color='#63605f' />
            <p>Save</p>
          </div>
          <div>
            <RiArrowGoBackFill size={60} color='blue' />
            <p>Clear</p>
          </div>
          <div className='border border-black py-8'>
            <AiOutlineDoubleRight />
          </div>
        </div>
        <div className='pt-6'>
          <p className='text-[#0b111c]'>Actions</p>
        </div>
      </div>
      <div className='space-y-4 flex flex-col items-center'>
        <FcViewDetails
          size={30}
          color='white'
          className='border border-black p-1 rounded-md'
        />
        <p>View</p>
        <div className='pt-10'>
          <AiFillCaretDown color=' #008080' />
        </div>
      </div>
      <div className='space-y-4 flex flex-col items-center'>
        <BsFillClipboard2PlusFill
          size={30}
          color='gray'
          className='border border-black p-1 rounded-md'
        />
        <p>Additional</p>
        <div className='pt-10'>
          <AiFillCaretDown color=' #008080' />
        </div>
      </div>
      <div className='space-y-4 flex flex-col items-center'>
        <AiFillFolderOpen
          size={30}
          color='brown'
          className='border border-black p-1 rounded-md'
        />
        <p>File</p>
        <div className='pt-10'>
          <AiFillCaretDown color=' #008080' />
        </div>
      </div>
      <div className='space-y-4 flex flex-col items-center'>
        <RiToolsFill
          color='brown'
          size={30}
          className='border border-black p-1 rounded-md'
        />
        <p>Tools</p>
        <div className='pt-10'>
          <AiFillCaretDown color=' #008080' />
        </div>
      </div>
      <div className='space-y-4 flex flex-col items-center'>
        <MdHelp
          color='blue'
          size={30}
          className='border border-black p-1 rounded-md'
        />
        <p className='space-y-4'>Help</p>
        <div className='pt-10'>
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
