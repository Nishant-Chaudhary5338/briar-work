import axios from 'axios';
import baseUrl from '../api/apiConfig';

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
      `${baseUrl}/api/update_entry`,
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
