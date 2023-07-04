import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    // Perform validation
    if (username === "" || password === "") {
      setError("Please enter a username and password.");
      return;
    }

    // Simulating login logic (replace with your own authentication)
    if (username === "admin" && password === "password") {
      // Redirect to the HeroSection component on successful login
      navigation("/home");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      {/* Left side - Image */}
      <div className='h-20 w-60'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyj4tPBkrDqJFWKXZovNHieI5xiuov4-ZXHg&usqp=CAU'
          alt='Login Image'
          className='object-contain'
        />
      </div>

      {/* Right side - Login Form */}
      <div className='w-1/2 flex items-center justify-center'>
        <form onSubmit={handleLogin} className='w-full max-w-md'>
          <h2 className='text-3xl font-bold mb-4'></h2>

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
              className='w-full p-2 border border-gray-300 rounded'
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
              className='w-full p-2 border border-gray-300 rounded'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
