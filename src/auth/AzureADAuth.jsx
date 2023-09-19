import React, { useEffect, useState } from "react";
import { useMsal, useMsalAuthentication } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { useNavigate } from "react-router-dom"; // Import Navigate

function AzureADAuth() {
  useMsalAuthentication(InteractionType.Redirect);
  const [m_strUser, setm_strUser] = useState("");
  const { instance, accounts } = useMsal();
  const navigate = useNavigate(); // Get the navigation function

  function handleLogout(instance) {
    instance.logoutRedirect();
  }

  useEffect(() => {
    // Use the useEffect hook to handle navigation after successful authentication
    if (accounts.length > 0) {
      // Save the user's email ID in local storage
      localStorage.setItem("userEmail", accounts[0].username);
      navigate("/"); // Redirect to the home page
    }
  }, [accounts, navigate]);

  function Render() {
    try {
      const username = accounts[0].username;
      setm_strUser(username);
    } catch (e) {}
  }

  if (m_strUser !== "") return <div>{navigate("/home")}</div>;
  else
    return (
      <>
        {Render()}
        <div>Please wait...</div>
      </>
    );
}

export default AzureADAuth;
