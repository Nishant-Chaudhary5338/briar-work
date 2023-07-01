import React from "react";

const SquareRadioButton = ({ id, name }) => {
  return (
    <div className='inline-flex items-center'>
      <input
        type='radio'
        id={id}
        name={name}
        className='appearance-none w-4 h-4 border border-gray-400 rounded-sm checked:bg-blue-500 checked:border-transparent focus:outline-none'
      />
    </div>
  );
};

export default SquareRadioButton;
