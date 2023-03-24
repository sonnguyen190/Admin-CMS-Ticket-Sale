import React from "react";
import "./Header.css";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
const logo = require("../../images/avatar.jpg");

const Header: React.FC = () => {
  return (
    <div className="Header">
      <div className="search_bar">
        <InputBase className="input_search" placeholder="Search" />
        <IconButton
          className="icon_search"
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </div>
      <div className="header_right">
        <div>
          <MailOutlineIcon className="icon_avt" />
        </div>
        <div>
          <NotificationsNoneIcon className="icon_avt" />
        </div>
        <div>
          <img className="image_avatar" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
