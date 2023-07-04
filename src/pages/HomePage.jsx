import React from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { RiToolsFill } from "react-icons/ri";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='h-12 bg-black'>
        <h4 className='text-white text-2xl py-2 px-4 font-semibold'>My Home</h4>
      </div>
      <div className='bg-gray-100 h-screen p-4'>
        <Card
          title='Service Call Entry Update'
          onClick={() => navigate("/hero")}
          icon={
            <RiToolsFill
              size={30}
              color='black'
              className='bg-gray-200 p-1 rounded-full'
            />
          }
        />
      </div>
    </div>
  );
};

export default HomePage;
