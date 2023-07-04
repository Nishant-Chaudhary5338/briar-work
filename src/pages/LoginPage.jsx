import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

    const access_token = localStorage.getItem("access_token");

    if (access_token) {
      // Valid access_token exists
      console.log("1. Existing access_token found:", access_token);
      try {
        const getResponse = await axios.get(
          "https://api-sdm-di.cfapps.eu10.hana.ondemand.com/browser/SAFEX_INDIA_DEV_CMIS1/?repository_id =SAFEX_INDIA_DEV_CMIS1&cmisSelector=query&q=SELECT cmis:objectId, cmis:name FROM cmis:folder",
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          },
        );

        if (getResponse.status === 200) {
          console.log("7. API GET request successful");
          // Navigate to home or perform further actions
          navigation("/home");
        } else {
          console.log("7. Error occurred while making the API GET request");
        }
      } catch (error) {
        console.log(
          "7. Error occurred while making the API GET request:",
          error,
        );
      }
    } else {
      // No access_token found
      console.log("1. No existing access_token found.");
      console.log("3. Making POST API request to fetch new token");

      try {
        const response = await axios.post(
          "https://dms-r9vvatw2.authentication.eu10.hana.ondemand.com/oauth/token?grant_type=client_credentials",
          null,
          {
            headers: {
              Authorization:
                "Basic c2ItNzhmNGFiNWQtNGZkYy00MTJhLThmZGEtOGRiZDM3OWRlMjMzIWIyMDE3ODJ8c2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0OlVzS3hRbmI3elFvSGF6Z1c3b0tlek42R0Fabz0=",
            },
          },
        );

        console.log("4. Made POST API request for fetching token");

        if (response.status === 200) {
          console.log("5. POST request successful");
          const { access_token, expires_in } = response.data;
          // Save the new access_token and its validity in local storage
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("expires_in", expires_in);
          console.log("New access_token saved:", access_token);
          console.log("Access token validity:", expires_in);

          // Make API GET request with the new access_token
          console.log("6. Making API GET request with access_token");

          try {
            const getResponse = await axios.get(
              "https://api-sdm-di.cfapps.eu10.hana.ondemand.com/browser/SAFEX_INDIA_DEV_CMIS1/?repository_id =SAFEX_INDIA_DEV_CMIS1&cmisSelector=query&q=SELECT cmis:objectId, cmis:name FROM cmis:folder",
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                },
              },
            );

            if (getResponse.status === 200) {
              console.log("7. API GET request successful");
              // Navigate to home or perform further actions
              navigation("/home");
            } else {
              console.log("7. Error occurred while making the API GET request");
            }
          } catch (error) {
            console.log(
              "7. Error occurred while making the API GET request:",
              error,
            );
          }
        } else {
          console.log("5. Error occurred while obtaining the access_token");
        }
      } catch (error) {
        console.log("6. Error occurred while making the POST request:", error);
      }
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
        <form onSubmit={(e) => handleLogin(e)} className='w-full max-w-md'>
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
