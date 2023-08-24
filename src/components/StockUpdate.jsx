import React, { useEffect, useState } from "react";
import LogoutButton from "../small-components/LogoutButton";
import { useParams } from "react-router-dom";
import { decode } from "js-base64";

const StockUpdate = () => {
  const [data, setData] = useState("");
  const { MaterialNumber } = useParams();

  useEffect(() => {
    try {
      const decodedMaterialNumber = decode(MaterialNumber);
      const decodedData = JSON.parse(decodedMaterialNumber);
      setData(decodedData);
      console.log(decodedData);

      // Rest of your StockUpdate component code
    } catch (error) {
      console.error("Error parsing data:", error);
      // Handle error, e.g., show an error message
    }
  }, [MaterialNumber]);
  if (!data) {
    return <div>Loading...</div>; // Show loading state until data is ready
  }
  return (
    <div className='bg-gray-50'>
      <div className='bg-[#71a311] px-2 text-xl h-12 flex items-center justify-between'>
        <h1 className='text-white font-semibold'>Stock Updates</h1>
        <LogoutButton />
      </div>
      <div className='p-10 m-20 rounded-3xl px-20 items-center flex justify-between shadow-2xl shadow-[#71a311]'>
        <div className='space-y-2'>
          <div className='flex space-x-2 items-center'>
            <span className=' text-sm text-gray-700 font-semibold w-28'>
              Material
            </span>
            <span className='border border-[#b4ed47] p-[2px] rounded-md pr-20'>
              {data.MaterialCode}
            </span>
          </div>
          <div className='flex space-x-2 items-center'>
            <span className=' text-sm text-gray-700 font-semibold w-28'>
              Material Description
            </span>
            <span className='border border-[#b4ed47] p-[2px] rounded-md pr-20'>
              {data.MaterialDesc}
            </span>
          </div>
          <div className='flex space-x-2 items-center'>
            <span className=' text-sm text-gray-700 font-semibold w-28'>
              Storage Location
            </span>
            <span className='border border-[#b4ed47] p-[2px] rounded-md pr-20'>
              {data.StorageLoc}
            </span>
          </div>
          <div className='flex space-x-2 items-center'>
            <span className=' text-sm text-gray-700 font-semibold w-28'>
              Batch No.
            </span>
            <span className='border border-[#b4ed47] p-[2px] rounded-md pr-20'>
              {data.BatchNo || "NA"}
            </span>
          </div>
          <div className='flex space-x-2 items-center'>
            <span className=' text-sm text-gray-700 font-semibold w-28'>
              Spec. Stock
            </span>
            <span className='border border-[#b4ed47] p-[2px] rounded-md pr-20'>
              NA
            </span>
          </div>
          <div className='flex space-x-2 items-center'>
            <span className=' text-sm text-gray-700 font-semibold w-28'>
              Quantity
            </span>
            <span className='border border-[#b4ed47] p-[2px] rounded-md pr-20'>
              {data.UnrestQty}
            </span>
          </div>
          <div className='flex space-x-2 items-center'>
            <span className=' text-sm text-gray-700 font-semibold w-28'>
              Base Unit
            </span>
            <span className='border border-[#b4ed47] p-[2px] rounded-md pr-20'>
              {data.Uom}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockUpdate;
