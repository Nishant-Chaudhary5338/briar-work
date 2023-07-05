import React, { useState } from "react";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import SquareRadioButton from "../small-components/SquareRadioButton";
import { LiaSave } from "react-icons/lia";
import { BiSolidPencil } from "react-icons/bi";
import Popup from "./Popup";
import axios from "axios";

const Section3 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [savedText, setSavedText] = useState("");
  const [shortDesc, setShortDesc] = useState("");

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSaveText = (text) => {
    setSavedText(text);
  };
  const handleChange = (e) => {
    setShortDesc(e.target.value);
  };
  const handleShortText = () => {
    if (shortDesc === "") {
      return;
    }
    axios
      .post(
        "https://dms-r9vvatw2.authentication.eu10.hana.ondemand.com/oauth/token?grant_type=client_credentials",
        { short_description: shortDesc },
        {
          headers: {
            Authorization:
              "Basic c2ItNzhmNGFiNWQtNGZkYy00MTJhLThmZGEtOGRiZDM3OWRlMjMzIWIyMDE3ODJ8c2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0OlVzS3hRbmI3elFvSGF6Z1c3b0tlek42R0Fabz0=",
          },
        },
      )
      .then((response) => {
        console.log("API request successful", response.status);
      })
      .catch((error) => {
        console.log("API request failed", error);
      });
    setShortDesc("");
  };
  return (
    <div className='space-y-2'>
      <h4 className='text-md font-semibold'>Equipment Information:</h4>
      <div className='space-y-2 mt-4'>
        <div className='space-x-4 flex'>
          <span>Equipment Number</span>
          <span className='border border-[#b4ed47] p-[2px] rounded-md pr-16'>
            711484515686888
          </span>
          <div className='flex items-center space-x-1'>
            <PiMagnifyingGlassDuotone
              size={30}
              color='#b4ed47'
              className='border p-[2px] border-[#b4ed47] rounded-md'
            />
            <SquareRadioButton />
            <span>PM</span>
          </div>
        </div>
        <div className='space-x-4 sm:flex items-center'>
          <span>General Description</span>
          <textarea
            onChange={handleChange}
            value={shortDesc}
            maxLength='80'
            className='border border-[#b4ed47] focus:outline-none focus:ring-[#b4ed47] focus:border-[#b4ed47]'
          />
          <div className='flex items-center space-x-2'>
            <button className='' onClick={handleOpenPopup}>
              <BiSolidPencil />
            </button>

            {isPopupOpen && (
              <Popup onClose={handleClosePopup} onSave={handleSaveText} />
            )}

            <div>
              <p>Saved Text: {savedText}</p>
            </div>
            <p>Save</p>
            <LiaSave
              size={30}
              color='white'
              className='bg-[#b4ed47] p-1 rounded-full'
              onClick={handleShortText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
