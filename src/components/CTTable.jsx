import React from "react";

const CTTable = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='bg-teal-50 font-semibold px-4 py-1 my-2 w-40 text-center border border-teal-300'>
        Completion text
      </p>
      <table className='border border-teal-300'>
        <tbody>
          <tr className='border-b border-teal-300'>
            <td className='py-2 px-4 border-r border-teal-300'>
              Created By ID
            </td>
            <td className='py-2 sm:px-40'>JWilde</td>
          </tr>
          <tr className='border-b border-teal-300'>
            <td className='py-2 px-4 border-r border-teal-300'>
              Created By Name
            </td>
            <td className='py-2 sm:px-40'>JWilde</td>
          </tr>
          <tr className='border-b border-teal-300'>
            <td className='py-2 px-4 border-r border-teal-300'>
              Released by ID
            </td>
            <td className='py-2 sm:px-40'>span</td>
          </tr>
          <tr className='border-b border-teal-300'>
            <td className='py-2 px-4 border-r border-teal-300'>
              Released by Name
            </td>
            <td className='py-2 sm:px-40'>span</td>
          </tr>
          <tr className='border-b border-teal-300'>
            <td className='py-2 px-4 border-r border-teal-300'>
              Released By Date
            </td>
            <td className='py-2 sm:px-40'>
              <input
                type='date'
                class='border border-teal-300 py-2 px-4 rounded-md text-teal-300 bg-white focus:outline-none focus:border-teal-400 focus:ring-teal-400'
              />
            </td>
          </tr>
          <tr className='border-b border-teal-300'>
            <td className='py-2 px-4 border-r border-teal-300'>
              Completed By ID
            </td>
            <td className='py-2 sm:px-40'>span</td>
          </tr>
          <tr>
            <td className='py-2 px-4 border-r border-teal-300'>
              Completed by Name
            </td>
            <td className='py-2 sm:px-40'>span</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CTTable;
