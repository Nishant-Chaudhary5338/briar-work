import React, { useEffect, useState } from "react";
import LogoutButton from "../../small-components/LogoutButton";
import { useNavigate } from "react-router-dom";
import StockReportForm from "./StockReportForm";
import { encode } from "js-base64";
import { getStockHelp } from "../../api/stockHelp";

const StockList = () => {
  const navigate = useNavigate();
  const [reportData, setReportData] = useState([]);

  const handleDataReceived = (response) => {
    setReportData(response);
    console.log("response passed to list", response);
  };

  const formatStockQty = (stockQty) => {
    // Convert to a number and then back to a string with 2 decimal places
    return Number(stockQty).toFixed(2);
  };

  const access = localStorage.getItem("access_data");
  console.log(access);

  return (
    <div>
      <div className='bg-[#71a311] text-xl px-2 h-12 flex items-center justify-between'>
        <h1 className='text-white font-semibold'>Stock/Material List</h1>
        <LogoutButton />
      </div>
      <div>
        <StockReportForm onDataReceived={handleDataReceived} />
      </div>
      <div className='mx-2 mb-10'>
        {reportData.length > 0 ? ( // Check if reportData has items
          <table className='border-collapse w-full mt-4 table-fixed text-center'>
            <thead>
              <tr className='text-xs'>
                <th className='custom-border'>Material</th>
                <th className='custom-border w-3/12'>Material Description</th>
                <th className='custom-border'>Material Group</th>
                <th className='custom-border'>Batch No</th>
                <th className='custom-border'>Storage Location</th>
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
                  className='hover:bg-[#b4ed47] text-xs font-semibold'
                >
                  <td className='custom-border'>{item.material}</td>
                  <td className='custom-border'>{item.material_desc}</td>
                  <td className='custom-border'>{item.material_group}</td>
                  <td className='custom-border'>{item.batch}</td>
                  <td className='custom-border'>{item.storage_location}</td>
                  <td className='custom-border'>
                    {formatStockQty(item.STOCK_QTY)}
                  </td>
                  <td className='custom-border'>{item.base_unit}</td>
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
