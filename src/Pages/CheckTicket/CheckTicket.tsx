import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./CheckTicket.css";
import dayjs from "dayjs";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { TicketCheck } from "./interfaceCheck";
import ListTableTicketCheck from "../../Components/ListTableTicketCheck";

const CheckTicket: React.FC = () => {
  const [date, setDate] = useState<any>();
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
  useEffect(() => {
    //tạo ngày
    var today: any = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;

    setDate(today);
  }, []);
  return (
    <div className="CheckTicket">
      <div className="CheckTicket_left">
        <div className="doisoatve">Đối soát vé</div>
        {/* Search */}
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
        {/* Show Data vé*/}
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
        <div className="filtercheck">
          <div className="tinhtrangdoisoat"> Tình trạng đối soát</div>
          <div className="ul_li_filter">
            <ul>
              <li>
                <input defaultChecked type="radio" name="checkTicket" />
                <label>Tất cả</label>
              </li>
              <li>
                <input type="radio" name="checkTicket" />
                <label>Đã đối soát</label>
              </li>
              <li>
                <input type="radio" name="checkTicket" />
                <label>Chưa đối soát</label>
              </li>
            </ul>
          </div>
        </div>
        {/* Đối soát vé loại vé */}
        <div className="typeTicket">
          <div className="typeTicket_name">Loại Vé</div>
          <div className="typeTicket_content">Vé Cổng</div>
        </div>
        {/* Đối soát vé từ ngày */}
        <div className="tungay">
          <div className="CheckDate_name">Từ ngày</div>
          <div className="CheckDate_content">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker value={dayjs(date)} readOnly className="DatePicker" />
            </LocalizationProvider>
          </div>
        </div>
        {/* Đối soát vé đến ngày */}
        <div className="tungay">
          <div className="CheckDate_name">Đến ngày</div>
          <div className="CheckDate_content">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker defaultValue={dayjs(date)} className="DatePicker" />
            </LocalizationProvider>
          </div>
        </div>
        <div className="AcceptFilter">
          <button className="buttonFilerAccept">Lọc</button>
        </div>
      </div>
    </div>
  );
};

export default CheckTicket;
