// components/Private.js
import React from "react";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const Private = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container">
      <h2 className="greeting">Private Page</h2> <p>Hi Marcus</p>
      <button onClick={handleLogout} className="button-private">
        Logout
      </button>
    </div>
  );
};

export default Private;
