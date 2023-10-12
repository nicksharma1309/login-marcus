import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import "../styles.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Simple authentication logic (replace with your actual logic)
    const isValidUser = inputValue.trim().toLowerCase() === "marcus";
    if (isValidUser) {
      login();
      navigate("/private");
    } else {
      setError("Invalid credentials. Please enter the correct name.");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError(""); // Clear the error when the input changes
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={handleInputChange}
        className="input"
      />
      <button onClick={handleLogin} className="button">
        Login
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;
