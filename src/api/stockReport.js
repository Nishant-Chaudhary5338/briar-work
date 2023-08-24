import axios from "axios";
import baseUrl from '../api/apiConfig';

export const getStockReport = async ( Material, MatGrp, StgeLoc) => {
 
  try{
    const requestData = {
    ZstInp: {
      Material: Material,
      MatGrp: MatGrp,
      StgeLoc: StgeLoc
    }
   };
   const access_token = localStorage.getItem("access_token")
   
   console.log(requestData)
   console.log("access_token")
   const response = await axios.post(`${baseUrl}/api/stock_report`, requestData, {
    headers: {
        Authorization: `Bearer ${access_token}`
    }
   });
   
   return response.data
  }catch (error){
    throw(error)
}

}