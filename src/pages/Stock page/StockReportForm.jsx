import React, { useState } from "react";
import { getStockReport } from "../../api/stockReport"; // Path to your API module
import { PiMagnifyingGlassDuotone } from "react-icons/pi";
import StockHelp from "../../small-components/StockHelp";

const StockReportForm = ({ onDataReceived }) => {
  const [material, setMaterial] = useState("1000000007");
  const [matGrp, setMatGrp] = useState("DFF");
  const [stgeLoc, setStgeLoc] = useState("NA");
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getStockReport(material, matGrp, stgeLoc);
      const response = data.ZV_MB52_BRType;
      onDataReceived(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenPopup = () => {
    setPopupVisible(true);
    console.log("clicked");
  };

  return (
    <div className=''>
      <div className='my-10'>
        <form
          className='flex items-center mx-10 space-x-10 '
          onSubmit={handleSubmit}
        >
          <div className='flex items-center space-x-2'>
            <label htmlFor='material'>Material:</label>
            <input
              id='material'
              type='text'
              placeholder='Material'
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className='custom-border rounded-md px-3 py-1 w-full'
            />
            <div onClick={handleOpenPopup}>
              <PiMagnifyingGlassDuotone
                size={30}
                color='#b4ed47'
                className='border p-[2px] border-[#b4ed47] rounded-md cursor-pointer'
              />
            </div>
            {popupVisible && (
              <StockHelp
                isOpen={popupVisible}
                onClose={() => setPopupVisible(false)}
              />
            )}
          </div>
          <div className='flex items-center space-x-2'>
            <label htmlFor='matGrp'>Group:</label>
            <input
              id='matGrp'
              type='text'
              placeholder='Material Group'
              value={matGrp}
              onChange={(e) => setMatGrp(e.target.value)}
              className='custom-border rounded-md px-3 py-1 w-full'
            />
            <button>
              <PiMagnifyingGlassDuotone
                size={30}
                color='#b4ed47'
                className='border p-[2px] border-[#b4ed47] rounded-md'
              />
            </button>
          </div>
          <div className='flex items-center space-x-2'>
            <label htmlFor='stgeLoc'>Location:</label>
            <input
              id='stgeLoc'
              type='text'
              placeholder='Storage Location'
              value={stgeLoc}
              onChange={(e) => setStgeLoc(e.target.value)}
              className='custom-border rounded-md px-3 py-1 w-full'
            />
            <button>
              <PiMagnifyingGlassDuotone
                size={30}
                color='#b4ed47'
                className='border p-[2px] border-[#b4ed47] rounded-md'
              />
            </button>
          </div>
          <button
            type='submit'
            className='py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600'
          >
            Execute
          </button>
        </form>
      </div>
    </div>
  );
};

export default StockReportForm;
