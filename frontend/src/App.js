import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { jwtDecode } from "jwt-decode";
import { useState } from 'react';
import "core-js/stable/atob";

import Login from './components/login-component';
import Home from './components/home-component';

function App() {
  // const navigate = useNavigate();
  const [token, setToken] = useState("");

  const decodedToken = localStorage.loginflow_token
    // ? jwtDecode(localStorage.loginflow_token, "xxx")
    ? localStorage.loginflow_token
    : null;
  console.log(decodedToken);

  if(!localStorage.getItem("loginflow_token")) {
    console.log("not logged in")
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/login"
              element = {<Login setToken={setToken} />} />
            <Route path="/"
            element = {
            !decodedToken ? <Navigate to="/login"/> : <Home setToken={setToken} />
            } 
          />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/"
              element = { <Home setToken={setToken} />}
          />
          <Route path="/login"
            element = {
            decodedToken ? <Navigate to="/"/> : <Login setToken={setToken} />
            } 
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
