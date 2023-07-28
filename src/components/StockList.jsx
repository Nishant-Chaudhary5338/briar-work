import React from "react";
import LogoutButton from "../small-components/LogoutButton";
import { useNavigate } from "react-router-dom";

const StockList = () => {
  const navigate = useNavigate();
  const tableData = [
    {
      Material: "Material 1",
      Plant: "Plant A",
      Location: "Location X",
      SL: "SL-001",
      BaseUnit: "Pcs",
      Quantity: 100,
      Currency: "USD",
      Value: 500,
      Transit: "Yes",
      Difference: "No",
      Inspection: "Passed",
    },
    // Add more data as needed
  ];
  return (
    <div>
      <div className='bg-[#71a311] text-xl px-2 h-12 flex items-center justify-between'>
        <h1 className='text-white font-semibold'>Stock/Material List</h1>
        <LogoutButton />
      </div>
      <div>
        <table className='border-collapse w-full mt-4 table-fixed text-center'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-[#b4ed47] p-2'>Material</th>
              <th className='border border-[#b4ed47] p-2'>Plant</th>
              <th className='border border-[#b4ed47] p-2'>Location</th>
              <th className='border border-[#b4ed47] p-2'>SL</th>
              <th className='border border-[#b4ed47] p-2'>Base Unit</th>
              <th className='border border-[#b4ed47] p-2'>Quantity</th>
              <th className='border border-[#b4ed47] p-2'>Currency</th>
              <th className='border border-[#b4ed47] p-2'>Value</th>
              <th className='border border-[#b4ed47] p-2'>Transit</th>
              <th className='border border-[#b4ed47] p-2'>Difference</th>
              <th className='border border-[#b4ed47] p-2'>Inspection</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                onClick={() => navigate("/stockUpdate")}
                className='hover:bg-[#b4ed47]'
              >
                <td className='border border-[#b4ed47] p-2'>{item.Material}</td>
                <td className='border border-[#b4ed47] p-2'>{item.Plant}</td>
                <td className='border border-[#b4ed47] p-2'>{item.Location}</td>
                <td className='border border-[#b4ed47] p-2'>{item.SL}</td>
                <td className='border border-[#b4ed47] p-2'>{item.BaseUnit}</td>
                <td className='border border-[#b4ed47] p-2'>{item.Quantity}</td>
                <td className='border border-[#b4ed47] p-2'>{item.Currency}</td>
                <td className='border border-[#b4ed47] p-2'>{item.Value}</td>
                <td className='border border-[#b4ed47] p-2'>{item.Transit}</td>
                <td className='border border-[#b4ed47] p-2'>
                  {item.Difference}
                </td>
                <td className='border border-[#b4ed47] p-2'>
                  {item.Inspection}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockList;
