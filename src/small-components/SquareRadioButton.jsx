import React, { useState, useEffect } from "react";

const SquareRadioButton = ({ selectedValue }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(selectedValue === "P1-Emergency");
  }, [selectedValue]);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div className='inline-flex items-center' onClick={handleClick}>
      <input
        type='radio'
        className='appearance-none w-4 h-4 border border-gray-400 rounded-sm checked:bg-blue-500 checked:border-transparent focus:outline-none'
        checked={checked}
        onChange={() => {}}
      />
    </div>
  );
};

export default SquareRadioButton;
