import React from "react";

import { FaHome, FaMapMarkedAlt } from "react-icons/fa";
import {FaLocationCrosshairs} from 'react-icons/fa6'
import { IoIosPeople } from "react-icons/io";

import "./dashboard.scss";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div>
        <div className="hello">Hello! Ritav </div>
        <div className="welcome">Welcome to the Dashboard </div>
      </div>
      <div className="cards">
        <div className="cardBox">
          <div className="text">
            <div>Number of Tracks</div>
            <div>12</div>
          </div>
          <div className="icon1">
            <FaMapMarkedAlt />
          </div>
        </div>
        <div className="cardBox">
          <div className="text">
            <div>Number of Users</div>
            <div>12</div>
          </div>
          <div className="icon2">
            <IoIosPeople />
          </div>
        </div>
        <div className="cardBox">
          <div className="text">
            <div>Number of Locations</div>
            <div>12</div>
          </div>
          <div className="icon3">
            <FaLocationCrosshairs />
          </div>
        </div>
        <div className="cardBox">
          <div className="text">
            <div>Number of tracks</div>
            <div>12</div>
          </div>
          <div className="icon4">
            <FaHome />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
