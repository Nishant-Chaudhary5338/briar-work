import React from "react";

const StockHelp = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div
        className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
        style={{ overflowY: "auto" }}
      >
        <div className='bg-white h-3/4 w-[500px] p-6 rounded-md'>
          <div style={{ overflowY: "auto" }} className='bg-gray-50 h-3/4 mt-4'>
            <div style={{ maxHeight: "300px" }}>
              <table className='table-fixed w-full overflow-y-auto'>
                <thead>
                  <tr>
                    <th className='w-1/4 px-4 border-[#b4ed47] border'>
                      Number
                    </th>
                    <th className='w-1/4 px-4 border-[#b4ed47] border'>
                      Description
                    </th>
                    <th className='w-1/4 px-4 border-[#b4ed47] border'>
                      Functional Location
                    </th>
                    <th className='w-1/4 px-4 border-[#b4ed47] border'>
                      Planner Group
                    </th>
                    {/* Add more fields here */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border w-1/4 border-[#b4ed47] px-4'>Item</td>
                    <td className='border w-1/4 border-[#b4ed47] px-4'>Item</td>
                    <td className='border w-1/4 border-[#b4ed47] px-4'>Item</td>
                    <td className='border w-1/4 border-[#b4ed47] px-4'>Item</td>
                    {/* Add more fields here */}
                  </tr>
                </tbody>
              </table>
            </div>
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
    )
  );
};

export default StockHelp;
