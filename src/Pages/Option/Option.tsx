import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import "./Option.css";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { DataTicketOption } from "./interfaceOption";
import ListTableOption from "../../Components/ListTableOption";

const Option: React.FC = () => {
  const [open, setOpen] = useState(false);
  const dataFake: DataTicketOption[] = [
    {
      code: "ALT14091",
      name: "Gói gia đình",
      nameEvent: "Hội chợ",
      dateStart: "22/11/2022",
      hourStart: "08:00:00",
      dateEnd: "11/11/2023",
      hourEnd: "09:00:00",
      price: 90000,
      priceCombo: 360000,
      ticketCombo: 4,
      status: 1,
    },
    {
      code: "ALT14092",
      name: "Gói gia đình",
      nameEvent: "Hội chợ",
      dateStart: "11/11/2022",
      hourStart: "08:00:00",
      dateEnd: "11/11/2023",
      hourEnd: "09:00:00",
      price: 20000,
      priceCombo: undefined,
      ticketCombo: undefined,
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
          <div
            className="addTicket"
            onClick={() => {
              setOpen(true);
            }}
          >
            Thêm gói vé
          </div>
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

      {open === true ? (
        <>
          <div className="popupEdit_over">
            <div className="popup_edit_page">
              <div className="title_update_ticket">
                Cập nhật thông tin gói vé
              </div>
              {/* Mã và tên sự kiện */}
              <div className="code_and_name_Event">
                <div>
                  <div className="name_tag">
                    Mã sự kiện <b style={{ color: "red" }}>*</b>
                  </div>
                  <div className="input_option_edit_code">
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <div className="name_tag">Tên sự kiện</div>
                  <div className="input_option_edit_nameEvent">
                    <input type="text" />
                  </div>
                </div>
              </div>
              {/* Ngày hết hạn và ngày áp dụng */}
              <div className="date_Start_End">
                <div>
                  <div className="name_tag"> Ngày áp dụng</div>
                  <div className="input_option_edit_StartDate">
                    <div className="DateStart">
                      <input className="input_Change_Date" type="text" />
                      <CalendarTodayOutlinedIcon className="iconCalendar" />
                    </div>

                    <div className="DateStart">
                      <input className="input_Change_Hour" type="text" />
                      <AccessTimeOutlinedIcon className="iconClock" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="name_tag">Ngày hết hạn</div>
                  <div className="input_option_edit_StartDate">
                    <div className="DateStart">
                      <input className="input_Change_Date" type="text" />
                      <CalendarTodayOutlinedIcon className="iconCalendar" />
                    </div>

                    <div className="DateStart">
                      <input className="input_Change_Hour" type="text" />
                      <AccessTimeOutlinedIcon className="iconClock" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Giá vé áp dụng */}
              <div>
                <div className="name_tag">Giá vé áp dụng</div>
                <div>
                  <div className="filterCheckbox">
                    <input type="checkbox" className="checkboxTicketandCombo" />
                    Vé lẻ (vnđ/vé) với giá
                    <input
                      type="number"
                      placeholder="Giá vé"
                      className="inputPriceTicket"
                    />
                    / Vé
                  </div>
                  <div className="filterCheckbox">
                    <input type="checkbox" className="checkboxTicketandCombo" />
                    Combo vé với giá
                    <input
                      type="number"
                      placeholder="Giá vé"
                      className="inputPriceTicket"
                    />
                    /
                    <input
                      type="number"
                      placeholder="Số lượng vé"
                      className="inputQuantityTicket"
                    />
                    Vé
                  </div>
                </div>
              </div>
              <div className="status_option">
                <div className="name_tag">Tình trạng</div>
                <div>
                  <select className="option_select_status">
                    <option value="1">Đang áp dụng</option>
                    <option value="0">Tắt</option>
                  </select>
                </div>
              </div>
              <div className="thongtinbb">
                <span style={{ color: "red" }}>*</span> là thông tin bắt buộc
              </div>
              <div className="button_option">
                <div
                  style={{ color: "#FF993C" }}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  Hủy
                </div>
                <div style={{ color: "white", backgroundColor: "#FF993C" }}>
                  Lưu
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Option;
