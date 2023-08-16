import axios from 'axios';

export const fetchHelpData = async (accessToken) => {
  try {
    const response = await axios.get(
      "http://localhost:3002/api/help_equipment",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
    );

    return response.data.znotifc_epqui_helpType;
  } catch (error) {
    throw error;
  }
};
