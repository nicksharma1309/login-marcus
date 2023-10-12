import React, { createContext, useReducer, useContext, useEffect } from "react";

// Initial auth state
const initialAuthState = {
  isAuthenticated: false
};

// Action types
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { isAuthenticated: true };
    case LOGOUT:
      return { isAuthenticated: false };
    default:
      return state;
  }
};

// Create context and provider
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  // Persist auth state in localStorage
  useEffect(() => {
    const savedAuthState = localStorage.getItem("authState");
    if (savedAuthState) {
      dispatch({ type: LOGIN });
    }
  }, []);

  const login = () => {
    dispatch({ type: LOGIN });
    localStorage.setItem("authState", "true");
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem("authState");
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
