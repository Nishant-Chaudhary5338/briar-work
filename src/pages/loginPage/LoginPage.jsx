import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/login";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform validation
    if (username === "" || password === "") {
      setError("Please enter a username and password.");
      return;
    }

    try {
      const accessToken = await loginUser(username, password);

      if (accessToken) {
        console.log("Access Token:", accessToken);
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("username", username);

        // Set a timeout to remove the access_token from localStorage after 2 minutes
        setTimeout(() => {
          localStorage.removeItem("access_token");
          console.log("Access_token expired. Removed from local storage.");
        }, 30 * 60 * 1000); // 2 minutes in milliseconds

        navigation("home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container mx-auto flex flex-col justify-center items-center md:mt-0'>
      {/* Left side - Image */}
      <div className='max-h-40 w-auto mb-10 md:mb-0'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyj4tPBkrDqJFWKXZovNHieI5xiuov4-ZXHg&usqp=CAU'
          alt='Login Image'
          className='object-contain'
        />
      </div>

      {/* Right side - Login Form */}
      <div className='w-full md:w-1/2 flex items-center shadow-2xl bg-gray-50 px-4 sm:mt-20 md:mt-0 py-10 rounded-lg justify-center'>
        <form onSubmit={(e) => handleLogin(e)} className='w-full max-w-md'>
          <h2 className='text-3xl font-bold mb-4'>Login</h2>

          {error && (
            <div className='bg-red-200 text-red-800 p-2 rounded mb-4'>
              {error}
            </div>
          )}

          <div className='mb-4'>
            <label htmlFor='username' className='block mb-1'>
              Username
            </label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='password' className='block mb-1'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
