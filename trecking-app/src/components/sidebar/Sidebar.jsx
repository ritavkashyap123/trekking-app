import React, { useState } from "react";

import "./sidebar.scss";

import {
  FaHome,
  FaChevronCircleRight,
  FaChevronCircleLeft,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaPowerOff } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/tracks",
      name: "Tracks",
      icon: <FaMapMarkedAlt />,
    },
    {
      path: "/Users",
      name: "Users",
      icon: <IoIosPeople />,
    },
  ];
  return (
    <div className="Sidebar">
      <div style={{ width: isOpen ? "18rem" : "4.5rem" }} className="container">
        <div className="sidebarTop">
          <div className="top_section">
            {/* <NavLink to={"/"} key={1} style={{ backgroundColor: '#1a64ae00', transition: "1s"}}><img src={Logo} alt="Full-logo" style={{ display: isOpen ? "block" : "none" }} className="logo" /></NavLink> */}
            {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
            <div
              style={{ marginLeft: isOpen ? "228px" : "8px" }}
              className="bars"
            >
              <FaChevronCircleRight
                onClick={toggle}
                style={{ display: isOpen ? "none" : "block", color: "#fff" }}
              />
              <FaChevronCircleLeft
                onClick={toggle}
                style={{ display: isOpen ? "block" : "none", color: "#fff" }}
              />
            </div>
          </div>
          <hr
            className="hr-bar"
            style={{ display: isOpen ? "block" : "none" }}
          />
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link">
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <div className="sidebarBottom">
          <hr
            className="hr-bar2"
            style={{ display: isOpen ? "block" : "none" }}
          />
          <NavLink
            to="/Auth"
            className="link active"
            style={{ marginBottom: "15px" }}
          >
            <div className="icon">
              <FaPowerOff />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              Logout
            </div>
          </NavLink>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
