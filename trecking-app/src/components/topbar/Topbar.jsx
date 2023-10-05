import { useTheme, Box, IconButton, InputBase, rgbToHex } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import {NavLink} from 'react-router-dom'

import './topbar.scss'

const Topbar = () => {
  return (
    <Box className="Topbar">
      <Box display="flex" className="searchbar"> 
        <Box
          display="flex" className="searchField"
        >
          <InputBase  placeholder="Search" />
          <IconButton type="button" className="searchButton">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      {/* <Box display="flex">
        <NavLink to={'/Notification'} className="buttons">
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        </NavLink>
        <NavLink to={'/Settings'} className="buttons">
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        </NavLink>
        <NavLink to={'/Profile'} className="buttons">
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        </NavLink>
      </Box> */}
    </Box>
  );
};

export default Topbar;