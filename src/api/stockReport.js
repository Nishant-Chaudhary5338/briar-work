import axios from "axios";
import baseUrl from '../api/apiConfig';

export const getStockReport = async (material, material_group, storage_location) => {
  try {
    const params = {};

    if (material) {
      params.material = material;
    }

    if (material_group) {
      params.material_group = material_group;
    }

    if (storage_location) {
      params.storage_location = storage_location;
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
