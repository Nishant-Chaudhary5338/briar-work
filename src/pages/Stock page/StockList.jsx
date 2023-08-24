import React, { useState } from "react";
import LogoutButton from "../../small-components/LogoutButton";
import { useNavigate } from "react-router-dom";
import StockReportForm from "./StockReportForm";
import { encode } from "js-base64";

const StockList = () => {
  const navigate = useNavigate();
  const [reportData, setReportData] = useState([]);

  const handleDataReceived = (response) => {
    setReportData(response);
    console.log("response passed to list", response);
  };

  return (
    <div>
      <div className='bg-[#71a311] text-xl px-2 h-12 flex items-center justify-between'>
        <h1 className='text-white font-semibold'>Stock/Material List</h1>
        <LogoutButton />
      </div>
      <div>
        <StockReportForm onDataReceived={handleDataReceived} />
      </div>
      <div className='mx-2'>
        {reportData.length > 0 ? ( // Check if reportData has items
          <table className='border-collapse w-full mt-4 table-fixed text-center'>
            <thead>
              <tr className='text-xs'>
                <th className='custom-border'>Material</th>
                <th className='custom-border'>Material Description</th>
                <th className='custom-border'>Batch No</th>
                <th className='custom-border'>Storage Location Location</th>
                <th className='custom-border'>Quantity</th>
                <th className='custom-border'>Base Unit</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((item, index) => (
                <tr
                  key={index}
                  onClick={() =>
                    navigate(`/stockUpdate/${encode(JSON.stringify(item))}`)
                  }
                  className='hover:bg-[#b4ed47]'
                >
                  <td className='custom-border'>{item.MaterialCode}</td>
                  <td className='custom-border'>{item.MaterialDesc}</td>
                  <td className='custom-border'>{item.BatchNo}</td>
                  <td className='custom-border'>{item.StorageLoc}</td>
                  <td className='custom-border'>{item.UnrestQty}</td>
                  <td className='custom-border'>{item.Uom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className='text-center font-semibold'>No data available yet.</p>
        )}
      </div>
    </div>
  );
};

export default StockList;
