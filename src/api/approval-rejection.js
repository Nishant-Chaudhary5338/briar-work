import axios from 'axios';

export const ApproveRejectEntry = async (Znumber, statusInt, access_token) => {
  try {
    const payload = {
      Imp: {
        Znumber: Znumber,
        StatusInt: statusInt,
        StatusExt: "Stri",
      },
    };

    const response = await axios.post(
      "http://localhost:3002/api/update_entry",
      payload,
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
