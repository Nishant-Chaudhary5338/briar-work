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
      <div className='mx-2'>
        <table className='border-collapse w-full mt-4 table-fixed text-center'>
          <thead>
            <tr className='text-xs'>
              <th className='custom-border'>Material</th>
              <th className='custom-border'>Plant</th>
              <th className='custom-border'>Location</th>
              <th className='custom-border'>SL</th>
              <th className='custom-border'>Base Unit</th>
              <th className='custom-border'>Quantity</th>
              <th className='custom-border'>Currency</th>
              <th className='custom-border'>Value</th>
              <th className='custom-border'>Transit</th>
              <th className='custom-border'>Difference</th>
              <th className='custom-border'>Inspection</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                onClick={() => navigate("/stockUpdate")}
                className='hover:bg-[#b4ed47]'
              >
                <td className='custom-border'>{item.Material}</td>
                <td className='custom-border'>{item.Plant}</td>
                <td className='custom-border'>{item.Location}</td>
                <td className='custom-border'>{item.SL}</td>
                <td className='custom-border'>{item.BaseUnit}</td>
                <td className='custom-border'>{item.Quantity}</td>
                <td className='custom-border'>{item.Currency}</td>
                <td className='custom-border'>{item.Value}</td>
                <td className='custom-border'>{item.Transit}</td>
                <td className='custom-border'>{item.Difference}</td>
                <td className='custom-border'>{item.Inspection}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockList;
