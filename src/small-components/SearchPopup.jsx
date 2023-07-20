import React, { useState, useEffect } from "react";
import axios from "axios";
import { PiMagnifyingGlassDuotone } from "react-icons/pi";

const SearchPopup = ({ onClose, onSelectEquipment }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/api/help_equipment",
        );
        setData(response.data.znotifc_epqui_helpType);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (equnr) => {
    setSelectedEquipment(equnr);
    console.log(equnr);
    onSelectEquipment(equnr);
  };

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
      style={{ overflowY: "auto" }}
    >
      <div
        className='bg-white w-96 p-6 rounded-md'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-end'>
          <button onClick={onClose} className='text-gray-500'>
            <PiMagnifyingGlassDuotone size={24} color='#b4ed47' />
          </button>
        </div>
        <h2 className='text-2xl font-bold mb-4'>Select Equipment</h2>
        <div className='bg-gray-50 p-1'>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className='table-auto'>
              <thead>
                <tr>
                  <th className='px-4 py-2'>Number</th>
                  <th className='px-4 py-2'>Description</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.Equnr}
                    className={`cursor-pointer ${
                      selectedEquipment === item.Equnr
                        ? "border border-[#b4ed47]"
                        : ""
                    }`}
                    onClick={() => handleRowClick(item.Equnr)}
                  >
                    <td className='border px-4 py-2'>{item.Equnr}</td>
                    <td className='border px-4 py-2'>{item.Eqktx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
