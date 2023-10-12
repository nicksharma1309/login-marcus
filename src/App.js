// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import PublicRoute from "./Components/PublicRoute";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import Private from "./Components/Private";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Routes>
            <Route
              path="/login"
              element={<PublicRoute element={<Login />} />}
            />
            <Route
              path="/private"
              element={<PrivateRoute element={<Private />} />}
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
