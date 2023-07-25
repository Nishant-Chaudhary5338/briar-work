import React from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { RiToolsFill } from "react-icons/ri";
import { MdUpdate } from "react-icons/md";
import LogoutButton from "../small-components/LogoutButton";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='h-12 bg-black flex px-4 items-center justify-between'>
        <h4 className='text-white text-2xl font-semibold'>My Home</h4>
        <LogoutButton />
      </div>
      <div className='bg-gray-100 h-screen p-4 flex space-x-6'>
        <Card
          title='Service Call Entry'
          onClick={() => navigate("/entry")}
          icon={
            <RiToolsFill
              size={30}
              color='black'
              className='bg-gray-200 p-1 rounded-full'
            />
          }
        />
        <Card
          title='Service Call Update'
          onClick={() => navigate("/list")}
          icon={
            <MdUpdate
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
