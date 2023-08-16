import axios from 'axios';

export const saveTextUpdate = async (zNumber, shortInputValue, longInputValue, access_token) => {
  try {
    const requestBody = {
      Header: {
        Znumber: zNumber,
        GenDesc1: shortInputValue,
        GenDesc: longInputValue,
      },
    };

    const response = await axios.post(
      "http://localhost:3002/api/text_update", // Change this URL to your API endpoint
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
