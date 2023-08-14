import React, { useState, useEffect } from "react";
import axios from "axios";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import TokenExpiredPopup from "./TokenExpiredPopup";
import LoadingSpinner from "./LoadingSpinner";

const SearchPopup = ({
  onClose,
  onSelectEquipment,
  data,
  onSelectFunctionalLocation,
}) => {
  const [loading, setLoading] = useState(true);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showTokenExpiredPopup, setShowTokenExpiredPopup] = useState(false); // State to show/hide the popup
  const [selectedFunctionalLocation, setSelectedFunctionalLocation] =
    useState(null);

  const handleRowClick = (equnr, funcation_location) => {
    setSelectedEquipment(equnr);
    onSelectEquipment(equnr);
    setSelectedFunctionalLocation(funcation_location);
    onSelectFunctionalLocation(funcation_location);
    onClose();
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter the data based on the search term
  const filteredData = data.filter(
    (item) =>
      item.Equnr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Eqktx.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    // Set loading to false when data is available
    if (data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
      style={{ overflowY: "auto" }}
    >
      {showTokenExpiredPopup && <TokenExpiredPopup />}{" "}
      <div
        className='bg-white h-3/4 w-[500px] p-6 rounded-md'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-end'></div>
        <h2 className='text-2xl font-bold mb-4'>Select Equipment</h2>
        <div className='relative'>
          <input
            type='text'
            className='border border-[#b4ed47] rounded-md w-full p-2 pl-10'
            placeholder='Search Equipment'
            value={searchTerm}
            onChange={handleInputChange}
          />
          <span className='absolute left-3 top-2'>
            <PiMagnifyingGlassDuotone size={18} color='#b4ed47' />
          </span>
        </div>
        <div style={{ overflowY: "auto" }} className='bg-gray-50 mt-4'>
          {loading ? (
            <LoadingSpinner text='Loading...' />
          ) : (
            <div style={{ maxHeight: "300px" }}>
              <table className='table-fixed w-full overflow-y-auto'>
                <thead>
                  <tr>
                    <th className='w-1/3 px-4 border-[#b4ed47] border'>
                      Number
                    </th>
                    <th className='w-1/3 px-4 border-[#b4ed47] border '>
                      Description
                    </th>
                    <th className='w-1/3 px-4 border-[#b4ed47] border '>
                      Functional Location
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item) => (
                    <tr
                      key={item.Equnr}
                      className={`cursor-pointer table-fixed  hover:bg-[#b4ed47] ${
                        selectedEquipment === item.Equnr ||
                        selectedFunctionalLocation === item.funcation_location
                          ? "border border-[#b4ed47]"
                          : ""
                      }`}
                      onClick={() =>
                        handleRowClick(item.Equnr, item.funcation_location)
                      }
                    >
                      <td className='border w-1/3 border-[#b4ed47] px-4'>
                        {item.Equnr}
                      </td>
                      <td className='border w-1/3 border-[#b4ed47] px-4'>
                        {item.Eqktx}
                      </td>
                      <td className='border w-1/3 border-[#b4ed47] px-4'>
                        {item.funcation_location}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className='flex justify-center mt-4'>
          <button
            className='px-4 py-2 bg-[#b4ed47] text-white rounded-md'
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
