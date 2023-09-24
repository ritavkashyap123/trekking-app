import React from "react";
import { createBrowserRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/auth/Auth";

import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
