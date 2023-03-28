import React from "react";
import "./CheckTicket.css";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { TicketCheck } from "./interfaceCheck";
import ListTableTicketCheck from "../../Components/ListTableTicketCheck";

const CheckTicket: React.FC = () => {
  const dataTicketCheck: TicketCheck[] = [
    {
      code: 12983789182,
      dateUse: "11/11/2023",
      typeTicket: "vé cổng",
      doorCheckin: "Cổng 1",
      statusCheck: 0,
    },
    {
      code: 129121231122,
      dateUse: "28/3/2023",
      typeTicket: "vé cổng",
      doorCheckin: "Cổng 1",
      statusCheck: 0,
    },
    {
      code: 11231241282,
      dateUse: "11/11/2023",
      typeTicket: "vé cổng",
      doorCheckin: "Cổng 1",
      statusCheck: 0,
    },
    {
      code: 11231241282,
      dateUse: "11/11/2023",
      typeTicket: "vé cổng",
      doorCheckin: "Cổng 1",
      statusCheck: 0,
    },
    {
      code: 11231241282,
      dateUse: "11/11/2023",
      typeTicket: "vé cổng",
      doorCheckin: "Cổng 1",
      statusCheck: 1,
    },
    {
      code: 11231241282,
      dateUse: "11/11/2023",
      typeTicket: "vé cổng",
      doorCheckin: "Cổng 1",
      statusCheck: 1,
    },
    {
      code: 11231241282,
      dateUse: "11/11/2023",
      typeTicket: "vé cổng",
      doorCheckin: "Cổng 1",
      statusCheck: 1,
    },

    {
      code: 11231241282,
      dateUse: "11/11/2023",
      typeTicket: "vé cổng",
      doorCheckin: "Cổng 1",
      statusCheck: 1,
    },
    {
      code: 11231241282,
      dateUse: "11/11/2023",
      typeTicket: "vé cổng",
      doorCheckin: "Cổng 1",
      statusCheck: 1,
    },
    {
      code: 11231241282,
      dateUse: "11/11/2023",
      typeTicket: "vé cổng",
      doorCheckin: "Cổng 1",
      statusCheck: 1,
    },
    {
      code: 112311282,
      dateUse: "11/11/2020",
      typeTicket: "vé cổng",
      doorCheckin: "Cổng 1",
      statusCheck: 0,
    },
  ];
  return (
    <div className="CheckTicket">
      <div className="CheckTicket_left">
        <div className="doisoatve">Đối soát vé</div>
        <div>
          <div className="search_bar_Ticketmanagement">
            <InputBase
              className="input_search_Ticketmanagement"
              placeholder="Tìm bằng số vé"
            />
            <IconButton
              className="buttonIcon"
              sx={{ p: "5px" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </div>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col"> STT</th>
                <th scope="col">Số vé</th>
                <th scope="col">Ngày sử dụng</th>
                <th scope="col">Tên loại vé</th>
                <th scope="col">Cổng check - in</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <ListTableTicketCheck data={dataTicketCheck} />
          </table>
        </div>
      </div>
      <div className="CheckTicket_right">
        <div className="filerCheckTicket">Lọc vé</div>
      </div>
    </div>
  );
};

export default CheckTicket;
