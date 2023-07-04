import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, onClick }) => {
  return (
    <div>
      <div
        onClick={onClick}
        className='h-24 w-96 px-60 border border-[#b4ed47] flex items-center justify-center rounded-md shadow-lg'
      >
        <h3 className='text-center items-center text-3xl'>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
