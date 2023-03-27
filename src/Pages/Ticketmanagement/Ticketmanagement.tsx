import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import "./Ticketmanagement.css";
import TableListTicket from "../../Components/TableListTicket/TableListTicket";
const Ticketmanagement: React.FC = () => {
  return (
    <div>
      <div className="danhsachve">Danh Sách Vé</div>
      <div>
        <div className="search_bar_Ticketmanagement">
          <InputBase
            className="input_search_Ticketmanagement"
            placeholder="Tìm bằng số vé"
          />
          <IconButton
            className=""
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      <div>
        <TableListTicket />
      </div>
    </div>
  );
};

export default Ticketmanagement;
