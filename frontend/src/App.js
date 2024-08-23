import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from './components/login-component';
import Home from './components/home-component';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/login"
            element = {<Login />} />
          <Route path="/"
            element = {<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
