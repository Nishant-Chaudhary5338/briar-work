import React from "react";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";
import { RiToolsFill, RiStockFill } from "react-icons/ri";
import { MdUpdate } from "react-icons/md";
import LogoutButton from "../../small-components/LogoutButton";
import { FcApproval } from "react-icons/fc";

const HomePage = () => {
  const navigate = useNavigate();

  const accessData = JSON.parse(localStorage.getItem("access_data"));
  const zv_web_AccType = accessData && accessData.zv_web_AccType;
  const pmNotifCr = zv_web_AccType?.PmNotifCr === "true";
  const pmNotifRep = zv_web_AccType?.PmNotifRep === "true";
  const pmNotifSuper = zv_web_AccType?.PmNotifSuper === "true";
  const stockTransf = zv_web_AccType?.StockTransf === "true";

  const allKeysFalse =
    !pmNotifCr && !pmNotifRep && !pmNotifSuper && !stockTransf;

  return (
    <div>
      <div className='h-12 bg-black flex px-4 items-center justify-between'>
        <h4 className='text-white text-2xl font-semibold'>My Home</h4>
        <LogoutButton />
      </div>
      <div className='bg-gray-100 p-4 h-screen'>
        {allKeysFalse ? (
          <div className='flex flex-col items-center justify-center h-full'>
            <p className='text-xl font-semibold mb-4'>
              Please contact SAP Admin
            </p>
            <LogoutButton />
          </div>
        ) : (
          <div className='flex flex-wrap'>
            {pmNotifCr && (
              <Card
                title='Service Call Entry'
                onClick={() => navigate("/entry")}
                icon={<RiToolsFill size={30} color='black' />}
              />
            )}
            {pmNotifRep && (
              <Card
                title='Service Call Report'
                onClick={() => navigate("/list")}
                icon={<MdUpdate size={30} color='black' />}
              />
            )}
            {pmNotifSuper && (
              <Card
                title='Service Call Approve'
                onClick={() => navigate("/approve")}
                icon={<FcApproval size={30} color='black' />}
              />
            )}
            {stockTransf && (
              <Card
                title='Stock Transfer'
                onClick={() => navigate("/stocklist")}
                icon={<RiStockFill size={30} color='black' />}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
