import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Menu.css";
export const Menu = () => {
  const [isActive, setIsActive] = useState("home");

  const handleChangeActive = (props: string) => {
    setIsActive(props);
  };
  return (
    <div className="all_menu">
      <div className="Logo_InSight"></div>
      <div className="list_menu">
        <ul>
          <Link
            className="linkDecoration_Menu"
            to={`/`}
            onClick={() => handleChangeActive("home")}
          >
            <li
              className={
                isActive == "home" ? "active_list_menu" : "unActive_list_menu"
              }
            >
              <span className="icon_menu_list">
                <HomeIcon />
              </span>
              <span className="name_list_menu">Trang Chủ</span>
            </li>
          </Link>

          <Link
            className="linkDecoration_Menu"
            to={`/ticketmanagement`}
            onClick={() => handleChangeActive("ticketmanagement")}
          >
            <li
              className={
                isActive == "ticketmanagement"
                  ? "active_list_menu"
                  : "unActive_list_menu"
              }
            >
              <span className="icon_menu_list">
                <ConfirmationNumberIcon />
              </span>
              <span> Quản lý vé</span>
            </li>
          </Link>

          <Link
            className="linkDecoration_Menu"
            to={`/ticketchange`}
            onClick={() => handleChangeActive("ticketchange")}
          >
            <li
              className={
                isActive == "ticketchange"
                  ? "active_list_menu"
                  : "unActive_list_menu"
              }
            >
              <span className="icon_menu_list">
                <ReceiptIcon />
              </span>
              <span>Đối soát vé</span>
            </li>
          </Link>

          <Link
            className="linkDecoration_Menu"
            to={`/option`}
            onClick={() => handleChangeActive("option")}
          >
            <li
              className={
                isActive == "option" ? "active_list_menu" : "unActive_list_menu"
              }
            >
              <span className="icon_menu_list">
                <SettingsIcon />
              </span>
              <span> Cài đặt</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
