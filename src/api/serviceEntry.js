import axios from "axios";

const BASE_URL = "http://localhost:3002";
const access_token = localStorage.getItem("access_token")
console.log(access_token);



export const createServiceEntry = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/service_entry`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("API request failed");
  }
};


