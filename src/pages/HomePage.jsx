import React from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className='py-10 bg-gray-50 h-screen'>
      <h1 className='text-5xl text-center font-semibold mb-6'>Internal Tool</h1>
      <div className='space-y-6 flex flex-col items-center justify-center'>
        <Card title='View' onClick={() => navigate("/hero")} />
        <Card title='Test' />
        <Card title='Test' />
      </div>
    </div>
  );
};

export default HomePage;
