import React from "react";
import { useAuth } from "../auth/auth";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  // const { auth } = useAuth();
  const LoggedIn = sessionStorage.getItem("loggedIn");
  // const { user } = useAuth();
  if (LoggedIn !== "true") {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
};

export default RequireAuth;
