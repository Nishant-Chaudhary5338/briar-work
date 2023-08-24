import React, { useState } from "react";
import { getStockReport } from "../../api/stockReport"; // Path to your API module

const StockReportForm = ({ onDataReceived }) => {
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=''>
      <div className='my-10'>
        <form
          className='flex items-center mx-10 space-x-10 '
          onSubmit={handleSubmit}
        >
          <label htmlFor='material'>Material:</label>
          <input
            id='material'
            type='text'
            placeholder='Material'
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className='custom-border rounded-md px-3 py-1 w-full'
          />
          <label htmlFor='matGrp'>Group:</label>
          <input
            id='matGrp'
            type='text'
            placeholder='Material Group'
            value={matGrp}
            onChange={(e) => setMatGrp(e.target.value)}
            className='custom-border rounded-md px-3 py-1 w-full'
          />
          <label htmlFor='stgeLoc'>Location:</label>
          <input
            id='stgeLoc'
            type='text'
            placeholder='Storage Location'
            value={stgeLoc}
            onChange={(e) => setStgeLoc(e.target.value)}
            className='custom-border rounded-md px-3 py-1 w-full'
          />
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
