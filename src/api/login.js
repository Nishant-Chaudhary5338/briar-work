import axios from 'axios';

export const loginUser = async (username, password) => {
  const url = `http://localhost:3002/api/token`; // Replace with your API endpoint URL
  const base64Credentials = window.btoa(`${username}:${password}`);

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    });

    if (response.status === 200) {
      return response.data.accessToken;
    }
  } catch (error) {
    throw error;
  }
};
