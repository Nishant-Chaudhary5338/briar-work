import React from "react";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear access_token and username from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");

    // Navigate to the login page
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className='flex items-center m-2 px-2 py-2 text-white space-x-1 text-xs font-semibold rounded-md shadow-md bg-red-500'
    >
      <span>LogOut</span>
      <span>
        {" "}
        <MdLogout />
      </span>
    </button>
  );
};

export default LogoutButton;
