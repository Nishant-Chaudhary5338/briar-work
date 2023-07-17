import axios from "axios";

const BASE_URL = "http://localhost:3002";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Basic UzAwMjQ1MTMxNTg6U2NfYmFua0AxMjM=",
};

const createServiceEntry = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/service_entry`, data, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw new Error("API request failed");
  }
};

export { createServiceEntry };
