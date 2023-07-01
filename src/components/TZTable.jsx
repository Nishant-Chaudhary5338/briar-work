import React from "react";

const TZTable = () => {
  return (
    <table class='border border-teal-300 p-2'>
      <thead>
        <tr>
          <th></th>
          <th class='border-r border-teal-300'></th>
          <th class='border-r border-teal-300 sm:px-10'>Customer</th>
          <th>Base</th>
        </tr>
        <tr>
          <th class='border-r border-teal-300 '>Date</th>
          <th class='border-r border-teal-300'>Timezone</th>
          <th class='border-r border-teal-300'>GMT</th>
          <th class='px-12'>GMT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class='border-b border-teal-300 border-r sm:px-14 '>Entry</td>
          <td class='border-b border-teal-300 border-r sm:px-14'>27/06/2023</td>
          <td class='border-b border-teal-300 border-r sm:px-14 '>
            27/06/2023
          </td>
        </tr>
        <tr>
          <td class='border-b border-teal-300 border-r '>Need By</td>
          <td class='border-b border-teal-300 border-r '>Need</td>
          <td class='border-b border-teal-300 border-r '>27/06/2023</td>
        </tr>
        <tr>
          <td class='border-b border-teal-300 border-r '>Planned Date</td>
          <td class='border-b border-teal-300 border-r '>Need</td>
          <td class='border-b border-teal-300 border-r '>27/06/2023</td>
        </tr>
        <tr>
          <td class='border-b border-teal-300 border-r '>Complete</td>
          <td class='border-b border-teal-300 border-r '>Need</td>
          <td class='border-b border-teal-300 border-r '>27/06/2023</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TZTable;
