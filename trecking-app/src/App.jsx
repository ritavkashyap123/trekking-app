import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/dashboard/Dashboard";
import { loginData } from "./features/auth/authSlice";
import Tracks from "./pages/track/Tracks";
import Users from "./pages/users/Users";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  // Use useSelector to access the authentication state
  const isState = useSelector(loginData);
  console.log(loginData);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Auth" element={<Auth />} />
      </Routes>
      <Sidebar>
        <Topbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Tracks" element={<Tracks />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
