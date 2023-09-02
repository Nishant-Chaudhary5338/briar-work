import axios from "axios";
import baseUrl from '../api/apiConfig';

export const getStockReport = async (Material, MatGrp, StgeLoc) => {
  try {
    const params = {
      Material: Material,
      MatGrp: MatGrp,
      StgeLoc: StgeLoc,
    };

    const access_token = localStorage.getItem("access_token");

    const response = await axios.get(
      `${baseUrl}/api/stock_report`,
      {
        params: params, // Include your query parameters here
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
