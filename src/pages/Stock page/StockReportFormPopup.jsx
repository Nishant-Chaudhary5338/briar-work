import React, { useState } from "react";
import { getStockReport } from "../../api/stockReport"; // Path to your API module

const StockReportFormPopup = ({ onClose, onDataReceived }) => {
  const [material, setMaterial] = useState("1000000007");
  const [matGrp, setMatGrp] = useState("DFF");
  const [stgeLoc, setStgeLoc] = useState("NA");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getStockReport(material, matGrp, stgeLoc);
      const response = data["n0:ZfmMb02BackgroundResponse"]["Data"]["item"];
      onDataReceived(response);
      console.log(response);
      onClose();
    } catch (error) {
      console.error(error);
      onClose();
    }
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white w-80 p-6 rounded-md'>
        <h2 className='text-2xl text-center font-bold mb-4'>
          Stock Report Form
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Material'
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className='border border-gray-300 rounded-md px-3 py-2 mb-4 w-full'
          />
          <input
            type='text'
            placeholder='Material Group'
            value={matGrp}
            onChange={(e) => setMatGrp(e.target.value)}
            className='border border-gray-300 rounded-md px-3 py-2 mb-4 w-full'
          />
          <input
            type='text'
            placeholder='Storage Location'
            value={stgeLoc}
            onChange={(e) => setStgeLoc(e.target.value)}
            className='border border-gray-300 rounded-md px-3 py-2 mb-4 w-full'
          />
          <button
            type='submit'
            className='py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600'
          >
            Get Stock Report
          </button>
        </form>
      </div>
    </div>
  );
};

export default StockReportFormPopup;
