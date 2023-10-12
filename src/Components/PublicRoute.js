// components/PublicRoute.js
import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const PublicRoute = ({ element, ...rest }) => {
  const { authState } = useAuth();

  // Redirect to private route if the user is authenticated
  if (authState.isAuthenticated) {
    return <Navigate to="/private" replace />;
  }

  // Render the provided element for the public route
  return <>{element}</>;
};

export default PublicRoute;
