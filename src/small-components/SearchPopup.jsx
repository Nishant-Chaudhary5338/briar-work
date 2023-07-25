import React, { useState, useEffect } from "react";
import axios from "axios";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import TokenExpiredPopup from "./TokenExpiredPopup";
import LoadingSpinner from "./LoadingSpinner";

const SearchPopup = ({ onClose, onSelectEquipment }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showTokenExpiredPopup, setShowTokenExpiredPopup] = useState(false); // State to show/hide the popup

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the access_token from localStorage
        const accessToken = localStorage.getItem("access_token");

        const response = await axios.get(
          "http://localhost:3002/api/help_equipment",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, // Add the access_token to the headers
              "Content-Type": "application/json",
              Cookie:
                "JSESSIONID=3B48995A12DF2C9778BD76BD323DEA8AB1BEC7EAD24953B347FA944140687163; JTENANTSESSIONID_qpbplr2kwe=zY80O04wxtcAFo1%2BU2njdEbh3LxTRDkXRNfwi6em50o%3D; BIGipServerl201102iflmapavshcip.factoryap1.customdomain=!furmO4ClGSrZAsGyprTQI/c8TWu59E2HD4QjA30q9+HWbhxBI+tJVjk3P+TSl0VlLlqnBZiyMFw7NSs=; sap-usercontext=sap-client=300",
            },
          },
        );
        setData(response.data.znotifc_epqui_helpType);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
        setShowTokenExpiredPopup(true);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (equnr) => {
    setSelectedEquipment(equnr);
    onSelectEquipment(equnr);
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

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
      style={{ overflowY: "auto" }}
    >
      {showTokenExpiredPopup && <TokenExpiredPopup />}{" "}
      <div
        className='bg-white w-96 p-6 rounded-md'
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
        <div className='bg-gray-50 mt-4'>
          {loading ? (
            <LoadingSpinner text='Loading...' />
          ) : (
            <div style={{ width: "100%" }}>
              <table className='table-fixed'>
                <thead>
                  <tr>
                    <th className='w-1/3 px-4 border-[#b4ed47] border'>
                      Number
                    </th>
                    <th className='w-2/3 px-4 border-[#b4ed47] border '>
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item) => (
                    <tr
                      key={item.Equnr}
                      className={`cursor-pointer table-fixed hover:bg-[#b4ed47] ${
                        selectedEquipment === item.Equnr
                          ? "border border-[#b4ed47]"
                          : ""
                      }`}
                      onClick={() => handleRowClick(item.Equnr)}
                    >
                      <td className='border w-1/3 border-[#b4ed47] px-4'>
                        {item.Equnr}
                      </td>
                      <td className='border w-2/3 border-[#b4ed47] px-4'>
                        {item.Eqktx}
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
