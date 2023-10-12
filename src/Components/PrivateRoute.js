// components/PrivateRoute.js
import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const PrivateRoute = ({ element, ...rest }) => {
  const { authState } = useAuth();

  // Redirect to login route if the user is not authenticated
  if (!authState.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Render the provided element for the private route
  return <>{element}</>;
};

export default PrivateRoute;
