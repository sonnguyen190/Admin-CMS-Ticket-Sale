import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import "./Option.css";
import { DataTicketOption } from "./interfaceOption";
import ListTableOption from "../../Components/ListTableOption";
const Option: React.FC = () => {
  const [dataOption, setDataOption] = useState<DataTicketOption[]>();
  const dataFake: DataTicketOption[] = [
    {
      code: "ALT14091",
      name: "Gói gia đình",
      dateStart: "11/11/2022",
      hourStart: "08:00:00",
      dateEnd: "11/11/2023",
      hourEnd: "09:00:00",
      price: 90000,
      priceCombo: 360000,
      ticketCombo: 4,
      status: 1,
    },
    {
      code: "ALT14091",
      name: "Gói gia đình",
      dateStart: "11/11/2022",
      hourStart: "08:00:00",
      dateEnd: "11/11/2023",
      hourEnd: "09:00:00",
      price: 20000,
      priceCombo: null,
      ticketCombo: null,
      status: 0,
    },
  ];
  return (
    <div className="OptionAll">
      <div className="danhsachgoive">Danh sách gói vé</div>
      <div className="SearchAndFilterOption">
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
        <div className="filterOption">
          <div className="exportFileOpion">Xuất file (.csv)</div>
          <div className="addTicket">Thêm gói vé</div>
        </div>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col"> STT</th>
              <th scope="col">Mã gói</th>
              <th scope="col">Tên gói vé</th>
              <th scope="col">Ngày áp dụng</th>
              <th scope="col">Ngày hết hạn</th>
              <th scope="col">Giá vé (VNĐ/Vé)</th>
              <th scope="col">Giá Combo (VNĐ/Combo)</th>
              <th scope="col">Tình trạng</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <ListTableOption data={dataFake} />
        </table>
      </div>
    </div>
  );
};

export default Option;
