import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import "./Ticketmanagement.css";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import TableListTicket from "../../Components/TableListTicket/TableListTicket";
const Ticketmanagement: React.FC = () => {
  return (
    <div className="TicketManage">
      <div className="danhsachve">Danh Sách Vé</div>
      <div className="SearchAndFilter">
        <div className="search_bar_Ticketmanagement">
          <InputBase
            className="input_search_Ticketmanagement"
            placeholder="Tìm bằng số vé"
          />
          <IconButton
            className=""
            type="button"
            sx={{ p: "5px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </div>
        <div className="filterTicket">
          <div className="filterManage">
            <FilterAltOutlinedIcon className="iconFilter" />
            Lọc vé
          </div>
          <div className="exportFile">Xuất file (.csv)</div>
        </div>
      </div>
      <div>
        <TableListTicket />
      </div>
    </div>
  );
};

export default Ticketmanagement;
