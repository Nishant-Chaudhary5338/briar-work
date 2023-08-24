import React, { useEffect, useState } from "react";
import DropDownButton from "../small-components/DropDownButton";
import DateInput from "./DateInput";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import { BiSolidPencil } from "react-icons/bi";
import { LiaSave } from "react-icons/lia";
import Popup from "./Popup";
import { createServiceEntry } from "../api/serviceEntry";
import SuccessPopup from "../small-components/SuccessPopup";
import ErrorPopup from "../small-components/ErrorPopup";
import SearchPopup from "../small-components/SearchPopup";
import TimeInput from "./TimeInput";
import { fetchHelpData } from "../api/searchHelp";

const ServiceInput = () => {
  const [callNumber, setCallNumber] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [savedText, setSavedText] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [equipmentNo, setEquipmentNo] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [notificationNo, setNotificationNo] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchPopup, setSearchPopup] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [help, setHelp] = useState([]);
  const [functionalLocation, setFunctionalLocation] = useState("");
  const [plannerGroup, setPlannerGroup] = useState([]);
  const [CrDate, setCrDate] = useState("");
  const [CrTime, setCrTime] = useState("");

  // pre-fetching serachHelp (Equipment etc)
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    const fetchHelp = async () => {
      try {
        const helpData = await fetchHelpData(accessToken);
        setHelp(helpData);
        console.log(helpData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchHelp();
  }, []);

  const handleCheckboxChange = (isChecked) => {
    setCheckboxChecked(isChecked);
  };
  const handleSelectEquipment = (equipmentNo) => {
    setEquipmentNo(equipmentNo); // Set the equipment number in the state of the parent component
  };

  const handleSelectFunctionalLocation = (functionalLocation) => {
    setFunctionalLocation(functionalLocation);
  };

  const handleSelectPlannerGroup = (plannerGroup) => {
    setPlannerGroup(plannerGroup);
  };
  console.log(functionalLocation);

  const handleSearchOpenPopup = () => {
    setSearchPopup(true);
  };

  const handleSearchClosePopup = () => {
    setSearchPopup(false);
  };

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

  //  create entry call
  const handleSendResponse = () => {
    const createdBy = localStorage.getItem("username");
    const formData = {
      checkboxChecked,
      createdBy,
      selectedOption,
      equipmentNo,
      startDate,
      startTime,
      shortDesc,
      savedText,
      plannerGroup,
      functionalLocation,
      CrDate,
      CrTime,
    };

    console.log(formData);

    if (
      !createdBy ||
      !selectedOption ||
      !equipmentNo ||
      !startDate ||
      !startTime ||
      !shortDesc ||
      !savedText ||
      !plannerGroup ||
      !functionalLocation ||
      !CrDate ||
      !CrTime
    ) {
      //console.log(data);
      alert("All fields are mandatory");
      return;
    }
    const data = {
      Header: {
        Breakdown: checkboxChecked,
        CreatedBy: createdBy,
        ServiceType: "P1",
        Priority: selectedOption,
        MatCode: "",
        CallStat: callNumber,
        EquipNo: equipmentNo,
        ZendD: startDate,
        ZendT: startTime,
        GenDesc1: shortDesc,
        GenDesc: savedText,
        PlanGrp: plannerGroup,
        FuncLoc: functionalLocation,
        CrDate: CrDate,
        CrTime: CrTime,
      },
    };
    console.log(data);
    createServiceEntry(data)
      .then((response) => {
        console.log(response);
        console.log(data);
        if (response.success && response.notificationNo) {
          setNotificationNo(response.notificationNo);
          setShowSuccessPopup(true);
          setSelectedOption("");
          setCallNumber("");
          setEquipmentNo("");
          setShortDesc("");
          setSavedText("");
        } else {
          setErrorMessage(response.error);
          setErrorPopup(true);
        }
      })
      .catch((error) => {
        console.error(error);

        setErrorMessage("API request failed");
        setErrorPopup(true);
      });
  };
  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  const handleCloseErrorPopup = () => {
    setErrorPopup(false);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleStartTimeChange = (time) => {
    setStartTime(time);
    console.log(time);
    // Do something with the selected time
  };

  const handlePlannerGroupChange = (event) => {
    setPlannerGroup(event.target.value); // Step 3: Update the state with the selected value
  };

  console.log("Planner Group", plannerGroup);

  return (
    <div>
      <div className='sm:flex 2xl:mx-[10%] 2xl:text-lg justify-between'>
        <div className=''>
          <div className='sm:space-x-16 flex'></div>
          <div>
            <div className='space-x-16'>
              {/*<label htmlFor='callNumber'>Call Number</label>
            <input
              id='CallNumber'
              value={callNumber}
              onChange={handleCallNumber}
              className='border border-[#b4ed47] p-[2px] rounded-md pr-20'
            ></input>
              */}
            </div>
            <div className='flex space-x-2 items-center'>
              <span className=' text-sm text-gray-700 font-semibold w-28'>
                Service Type
              </span>
              <span className='border border-[#b4ed47] p-[2px] rounded-md pr-20'>
                P1
              </span>
            </div>
          </div>
          <div className=' mt-2'>
            <div className='flex space-x-2 items-center'>
              <span className=' text-sm text-gray-700 font-semibold w-28'>
                Priority
              </span>

              <DropDownButton
                selectedOption={selectedOption}
                handleOptionChange={handleOptionChange}
                onCheckboxChange={handleCheckboxChange}
              />
            </div>
          </div>
          <div className='flex space-x-6 mt-2 items-center'>
            <span className='w-24 text-sm text-gray-700 font-semibold'>
              Start Time
            </span>
            <input
              onChange={(e) => setCrTime(e.target.value)}
              value={CrTime}
              className='custom-border rounded-md'
              type='time'
            />
          </div>

          <div className='flex space-x-6 mt-2 items-center'>
            <span className='w-24 text-sm text-gray-700 font-semibold'>
              Start Date
            </span>
            <input
              onChange={(e) => setCrDate(e.target.value)}
              value={CrDate}
              className='custom-border rounded-md'
              type='date'
            />
          </div>
          <div className='space-y-2 mt-2'>
            <div className='flex space-x-6 mt-2 items-center'>
              <span className='w-24 text-sm text-gray-700 font-semibold'>
                End Time
              </span>
              <input
                onChange={(e) => setStartTime(e.target.value)}
                value={startTime}
                className='custom-border rounded-md'
                type='time'
              />
            </div>

            <div className='flex space-x-6 mt-2 items-center'>
              <span className='w-24 text-sm text-gray-700 font-semibold'>
                End Date
              </span>
              <input
                onChange={(e) => setStartDate(e.target.value)}
                value={startDate}
                className='custom-border rounded-md'
                type='date'
              />
            </div>
          </div>
        </div>
        <div>
          <h4 className='text-md font-semibold'>Equipment Information:</h4>
          <div className='space-y-2 mt-4'>
            <div className='space-x-4  flex'>
              <span className='text-sm text-gray-700 font-semibold'>
                Equipment Number
              </span>
              <input
                value={equipmentNo}
                onChange={(e) => setEquipmentNo(e.target.value)}
                className='border border-[#b4ed47] p-[2px] rounded-md pr-16'
              ></input>
              <div className='flex items-center space-x-1'>
                <button onClick={handleSearchOpenPopup}>
                  <PiMagnifyingGlassDuotone
                    size={30}
                    color='#b4ed47'
                    className='border p-[2px] border-[#b4ed47] rounded-md'
                  />
                </button>
                {/* Render the SearchPopup */}
                {searchPopup && (
                  <SearchPopup
                    onClose={handleSearchClosePopup}
                    onSelectEquipment={handleSelectEquipment}
                    onSelectFunctionalLocation={handleSelectFunctionalLocation}
                    onSelectPlannerGroup={handleSelectPlannerGroup}
                    data={help}
                  />
                )}
              </div>
            </div>
            <div className='flex space-x-2 mt-1 items-center'>
              <span className=' text-sm text-gray-700 font-semibold mr-2'>
                Functional Location
              </span>
              <span className='border border-[#b4ed47] w-30 h-8 p-[2px] rounded-md pr-20'>
                {functionalLocation}
              </span>
            </div>
            <div className='flex space-x-2 mt-2 items-center'>
              <span className=' text-sm text-gray-700 font-semibold w-32'>
                Planner Group
              </span>
              <select
                value={plannerGroup}
                onChange={handlePlannerGroupChange}
                className='custom-border rounded-md'
              >
                <option value=''>Select an Option</option>
                <option value='N01'>Mechanical - N01</option>
                <option value='N02'>North Site - N02</option>
                <option value='N04'>Facilities - N03</option>
                <option value='N06'>E, I & C - N06</option>
                <option value='N08'>PPE Consumables - N08</option>
                <option value='N09'>Operational - N09</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className='space-x-4 text-sm text-gray-700 font-semibold flex items-center'>
              <span>General Description</span>
              <textarea
                onChange={handleChange}
                value={shortDesc}
                maxLength='40'
                className='border border-[#b4ed47] focus:outline-none focus:ring-[#b4ed47] focus:border-[#b4ed47]'
              />
              <div className='flex items-center space-x-2'>
                <button className='' onClick={handleOpenPopup}>
                  <BiSolidPencil />
                </button>

                {isPopupOpen && (
                  <Popup onClose={handleClosePopup} onSave={handleSaveText} />
                )}

                {showSuccessPopup && (
                  <SuccessPopup
                    notificationNo={notificationNo}
                    onClose={handleCloseSuccessPopup}
                  />
                )}
                {errorPopup && (
                  <ErrorPopup
                    message={errorMessage}
                    onClose={handleCloseErrorPopup}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <div
          onClick={handleSendResponse}
          className='flex items-center active:bg-blue-400 text-white rounded-md font-semibold rounde-md px-2 py-1  space-x-1 bg-[#71a311]'
        >
          <p>Save</p>
          <LiaSave
            size={30}
            color='white'
            className='bg-[#71a311] p-1 rounded-full'
            onClick={handleSendResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ServiceInput);
