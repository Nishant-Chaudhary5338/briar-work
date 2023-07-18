import React, { useState } from "react";
import DropDownButton from "../small-components/DropDownButton";
import DateInput from "./DateInput";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { BiSolidPencil } from "react-icons/bi";
import { LiaSave } from "react-icons/lia";
import Popup from "./Popup";
import { createServiceEntry } from "../api/serviceEntry";

const ServiceInput = () => {
  const [callNumber, setCallNumber] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [savedText, setSavedText] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [equipmentNo, setEquipmentNo] = useState("");
  const [resetDateInput, setResetDateInput] = useState(false);
  const options = [
    { value: "1", label: "P1-Emergency" },
    { value: "2", label: "P2-Risk" },
    { value: "3", label: "P3-Repair/replace" },
  ];

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

  const handleSendResponse = () => {
    const data = {
      Header: {
        CreatedBy: "p001",
        ServiceType: "P1",
        Priority: selectedOption,
        MatCode: "",
        CallStat: callNumber,
        EquipNo: equipmentNo,
        ZendD: startDate,
        ZendT: "15:33:25",
        GenDesc1: shortDesc,
        GenDesc: savedText,
      },
    };
    console.log(data);
    createServiceEntry(data)
      .then((response) => {
        console.log(response);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleCallNumber = (e) => {
    setCallNumber(e.target.value);
  };

  return (
    <div className='sm:flex justify-between'>
      <div className=''>
        <div className='sm:space-x-16 flex'></div>
        <div>
          <div className='space-x-16'>
            <label htmlFor='callNumber'>Call Number</label>
            <input
              id='CallNumber'
              value={callNumber}
              onChange={handleCallNumber}
              className='border border-[#b4ed47] p-[2px] rounded-md pr-20'
            ></input>
          </div>
          <div className='space-x-16 mt-2'>
            <span>Service Type</span>
            <span className='border border-[#b4ed47] p-[2px] rounded-md pr-20'>
              P1
            </span>
          </div>
        </div>
        <div className='space-y-2 mt-2'>
          <div className='space-x-4 sm:flex items-center sm:space-x-[98px]'>
            <span className=''>Priority</span>
            <DropDownButton
              value={selectedOption}
              onChange={handleOptionChange}
              options={options}
            />
          </div>
        </div>
        <div className='space-y-2 mt-2 pr-20'>
          <DateInput title='Start Date' onDateChange={handleStartDateChange} />
          <DateInput title='End Date' onDateChange={handleEndDateChange} />
        </div>
      </div>
      <div>
        <h4 className='text-md font-semibold'>Equipment Information:</h4>
        <div className='space-y-2 mt-4'>
          <div className='space-x-4 flex'>
            <span>Equipment Number</span>
            <input
              value={equipmentNo}
              onChange={(e) => setEquipmentNo(e.target.value)}
              className='border border-[#b4ed47] p-[2px] rounded-md pr-16'
            ></input>
            <div className='flex items-center space-x-1'>
              <PiMagnifyingGlassDuotone
                size={30}
                color='#b4ed47'
                className='border p-[2px] border-[#b4ed47] rounded-md'
              />
            </div>
          </div>
          <div className='space-x-4 flex items-center'>
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

              <p>Save</p>
              <LiaSave
                size={30}
                color='white'
                className='bg-[#b4ed47] p-1 rounded-full'
                onClick={handleSendResponse}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInput;
