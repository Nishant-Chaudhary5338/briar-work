import React from "react";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import { RiToolsFill, RiStockFill } from "react-icons/ri";
import { MdUpdate } from "react-icons/md";
import LogoutButton from "../../small-components/LogoutButton";
import { FcApproval } from "react-icons/fc";

const HomePage = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
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
          title='Service Call Report'
          onClick={() => navigate("/list")}
          icon={
            <MdUpdate
              size={30}
              color='black'
              className='bg-gray-200 p-1 rounded-full'
            />
          }
        />
        <Card
          title='Service Call Approve'
          onClick={() => navigate("/approve")}
          icon={
            <FcApproval
              size={30}
              color='black'
              className='bg-gray-200 p-1 rounded-full'
            />
          }
        />

        <Card
          title='Stock Transfer'
          onClick={() => navigate("/stocklist")}
          icon={
            <RiStockFill
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
