import React, { useEffect, useState } from "react";
import { DataTicketOption } from "../Pages/Option/interfaceOption";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import dayjs from "dayjs";
dayjs().format("LT");
interface Props {
  data: DataTicketOption[];
}
const ListTableOption: React.FC<Props> = (props) => {
  const { data } = props;
  const [open, setOpen] = useState(false);
  return (
    <tbody>
      {data.map((data, key) => (
        <tr key={key}>
          <td>{key + 1}</td>
          <td>{data.code}</td>
          <td>{data.name}</td>
          <td>
            {data.dateStart} <div>{data.hourStart}</div>
          </td>
          <td>
            {data.dateEnd} <div>{data.hourEnd}</div>
          </td>
          <td>{data.price}</td>
          <td>
            {data.priceCombo === null ? (
              <></>
            ) : (
              <>
                {data.priceCombo} VNĐ/{data.ticketCombo} Vé
              </>
            )}
          </td>
          <td>
            {data.status === 0 ? (
              <li className="offTicket">Tắt</li>
            ) : (
              <li className="isApplying">Đang áp dụng</li>
            )}
          </td>
          <td>
            <div
              className="edit_buttonOption"
              onClick={() => {
                setOpen(true);
              }}
            >
              <ModeEditOutlineOutlinedIcon /> <div>Cập nhật</div>
            </div>
            {open === true ? (
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
                        <input
                          type="checkbox"
                          className="checkboxTicketandCombo"
                        />
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
                        <input
                          type="checkbox"
                          className="checkboxTicketandCombo"
                        />
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
                </div>
              </div>
            ) : (
              <></>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ListTableOption;
