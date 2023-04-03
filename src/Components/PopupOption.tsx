import React from "react";
import { DataTicketOption } from "../Pages/Option/interfaceOption";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
interface Props {
  data: DataTicketOption;
  handleOpen: (value?: any) => void;
  key: number;
}
const PopupOption: React.FC<Props> = ({ data, handleOpen, key }) => {
  return (
    <div className="popupEdit_over" key={key}>
      <div className="popup_edit_page">
        <div className="title_update_ticket">Cập nhật thông tin gói vé</div>
        {/* Mã và tên sự kiện */}
        <div className="code_and_name_Event">
          <div>
            <div className="name_tag">
              Mã sự kiện <b style={{ color: "red" }}>*</b>
            </div>
            <div className="input_option_edit_code">
              <input type="text" value={data.code} />
            </div>
          </div>
          <div>
            <div className="name_tag">Tên sự kiện</div>
            <div className="input_option_edit_nameEvent">
              <input type="text" value={data.nameEvent} />
            </div>
          </div>
        </div>
        {/* Ngày hết hạn và ngày áp dụng */}
        <div className="date_Start_End">
          <div>
            <div className="name_tag"> Ngày áp dụng</div>
            <div className="input_option_edit_StartDate">
              <div className="DateStart">
                <input
                  className="input_Change_Date"
                  type="text"
                  value={data.dateStart}
                />
                <CalendarTodayOutlinedIcon className="iconCalendar" />
              </div>

              <div className="DateStart">
                <input
                  className="input_Change_Hour"
                  type="text"
                  value={data.hourStart}
                />
                <AccessTimeOutlinedIcon className="iconClock" />
              </div>
            </div>
          </div>
          <div>
            <div className="name_tag">Ngày hết hạn</div>
            <div className="input_option_edit_StartDate">
              <div className="DateStart">
                <input
                  className="input_Change_Date"
                  type="text"
                  value={data.dateStart}
                />
                <CalendarTodayOutlinedIcon className="iconCalendar" />
              </div>

              <div className="DateStart">
                <input
                  className="input_Change_Hour"
                  type="text"
                  value={data.hourStart}
                />
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
                value={data.price}
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
                value={data.priceCombo}
                type="number"
                placeholder="Giá vé"
                className="inputPriceTicket"
              />
              /
              <input
                value={data.ticketCombo}
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
              handleOpen(false);
            }}
          >
            Hủy
          </div>
          <div style={{ color: "white", backgroundColor: "#FF993C" }}>Lưu</div>
        </div>
      </div>
    </div>
  );
};

export default PopupOption;
