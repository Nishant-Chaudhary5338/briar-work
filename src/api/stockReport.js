import axios from "axios";
import baseUrl from '../api/apiConfig';

export const getStockReport = async (Material, MatGrp, StgeLoc) => {
  try {
    const params = {};

    if (Material) {
      params.Material = Material;
    }

    if (MatGrp) {
      params.MatGrp = MatGrp;
    }

    if (StgeLoc) {
      params.StgeLoc = StgeLoc;
    } else {
      // If StgeLoc is empty, set it to "NA"
      params.StgeLoc = "NA";
    }

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
