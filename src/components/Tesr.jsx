import React, { useEffect } from "react";
import axios from "axios";

const Tesr = () => {
  useEffect(() => {
    axios
      .get("/.netlify/functions/proxy")
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>My Component</div>;
};

export default Tesr;
