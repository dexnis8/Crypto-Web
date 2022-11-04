import React from "react";
// import { useAuth } from "../auth/auth";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const InvoiceAuth = ({ children }) => {
    
    
    const search = useLocation().search;
    const invoiceID = new URLSearchParams(search).get('invoiceID');

  const LoggedIn = sessionStorage.getItem("loggedIn");
  if (LoggedIn !== "true" || !invoiceID ) {
    return <Navigate to="/unauthenticated_url-request" />;
  }
  return <div>{children}</div>;
};

export default InvoiceAuth;
