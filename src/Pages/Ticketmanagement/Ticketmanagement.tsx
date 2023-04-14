import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { ref, child, get } from "firebase/database";
import "./Ticketmanagement.css";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import TableListTicket from "../../Components/TableListTicket/TableListTicket";
import FilterManament from "../../Components/FilterManament";
import { database } from "../../firebase";
import { ListData } from "../../Components/TableListTicket/InterfaceData";
const Ticketmanagement: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [tickets, setTicket] = useState<any>();
  const handleOpen = (a: boolean) => {
    setOpen(a);
  };
  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `ticket`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setTicket(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="TicketManage">
      {open === true ? <FilterManament handleOpen={handleOpen} /> : <></>}

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
          <div
            className="filterManage"
            onClick={() => {
              setOpen(true);
            }}
          >
            <FilterAltOutlinedIcon className="iconFilter" />
            Lọc vé
          </div>
          <div className="exportFile">Xuất file (.csv)</div>
        </div>
      </div>
      <div>
        <TableListTicket data={tickets} />
      </div>
    </div>
  );
};

export default Ticketmanagement;
