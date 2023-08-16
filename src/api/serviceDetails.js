import axios from 'axios';

export const fetchServiceDetails = async (access_token, NotificationNumber) => {
  try {
    const response = await axios.post(
      "http://localhost:3002/api/service_details",
      { NotificationNumber },
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
