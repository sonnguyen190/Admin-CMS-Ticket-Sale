import React, { useState, useEffect } from "react";
import { DataTicketOption } from "../Pages/Option/interfaceOption";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { collection, updateDoc, doc, getDocs } from "firebase/firestore";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { database } from "../firebase";
interface Props {
  data: DataTicketOption;
  handleOpen: (value?: any) => void;
}
const PopupOption: React.FC<Props> = ({ data, handleOpen }) => {
  const dbRef = collection(database, "event");

  const [code, setCode] = useState<any>();
  const [name, setName] = useState<any>();
  const [dateStart, setDateStart] = useState<any>();
  const [hourStart, setHourStart] = useState<any>();
  const [dateEnd, setDateEnd] = useState<any>();
  const [hourEnd, setHourEnd] = useState<any>();
  const [price, setPrice] = useState<any>(0);
  const [priceCombo, setPriceCombo] = useState<any>();
  const [ticketCombo, setTicketCombo] = useState<any>();
  const [status, setStatus] = useState<any>(1);
  useEffect(() => {
    if (data) {
      setCode(data.code);
      setName(data.name);
      setDateStart(data.dateStart.seconds * 1000);
      setHourStart(data.hourStart);
      setDateEnd(data.dateEnd.seconds * 1000);
      setHourEnd(data.hourEnd);
      setPrice(data.price);
      setPriceCombo(data.priceCombo);
      setTicketCombo(data.ticketCombo);
      setStatus(data.status);
    }
  }, [data, handleOpen]);

  const handleOnchangeCode = (e: any) => {
    setCode(e.target.value);
  };
  const handleOnchangeName = (e: any) => {
    setName(e.target.value);
  };
  const handleOnchangeHourStart = (e: any) => {
    setHourStart(e.target.value);
  };
  const handleOnchangeDateStart = (e: any) => {
    setDateStart(e.$d);
  };
  const handleOnchangeHourEnd = (e: any) => {
    setHourEnd(e.target.value);
  };
  const handleOnchangeDateEnd = (e: any) => {
    setDateEnd(e.$d);
  };
  const handleOnchangePrice = (e: any) => {
    setPrice(e.target.value);
  };
  const handleOnchangePriceCombo = (e: any) => {
    setPriceCombo(e.target.value);
  };
  const handleOnChangeTicketCombo = (e: any) => {
    setTicketCombo(e.target.value);
  };
  const handleOnChangeStatus = (e: any) => {
    setStatus(e.target.value);
  };

  const handleOnclickUpdate = async () => {
    var dateStartvalid;
    var dateEndValid;

    if (dateStart === data.dateStart.seconds * 1000) {
      dateStartvalid = new Date(dateStart);
    } else {
      dateStartvalid = dateStart;
    }

    if (dateEnd === data.dateEnd.seconds * 1000) {
      dateEndValid = new Date(dateEnd);
    } else {
      dateEndValid = dateEnd;
    }
    let frankDocRef = doc(database, "event", data.id);
    await updateDoc(frankDocRef, {
      code: code,
      name: name,
      dateStart: dateStartvalid,
      hourStart: hourStart,
      dateEnd: dateEndValid,
      hourEnd: hourEnd,
      price: price,
      priceCombo: priceCombo,
      ticketCombo: ticketCombo,
      status: status,
    });
    handleOpen(false);
    window.location.reload();
  };
  return (
    <div className="popupEdit_over">
      {data ? (
        <div className="popup_edit_page">
          <div className="title_update_ticket">Cập nhật thông tin gói vé</div>
          {/* Mã và tên sự kiện */}
          <div className="code_and_name_Event">
            <div>
              <div className="name_tag">
                Mã sự kiện <b style={{ color: "red" }}>*</b>
              </div>
              <div className="input_option_edit_code">
                <input
                  type="text"
                  value={code !== undefined ? code : 1}
                  onChange={handleOnchangeCode}
                />
              </div>
            </div>
            <div>
              <div className="name_tag">Tên sự kiện</div>
              <div className="input_option_edit_nameEvent">
                <input type="text" value={name} onChange={handleOnchangeName} />
              </div>
            </div>
          </div>
          {/* Ngày hết hạn và ngày áp dụng */}
          <div className="date_Start_End">
            <div>
              <div className="name_tag"> Ngày áp dụng</div>
              <div className="input_option_edit_StartDate">
                <div className="DateStart">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      className="DateStart"
                      onChange={handleOnchangeDateStart}
                      value={dayjs(new Date(dateStart))}
                    />
                  </LocalizationProvider>
                </div>

                <div className="DateStart">
                  <input
                    className="input_Change_Hour"
                    type="time"
                    onChange={handleOnchangeHourStart}
                    value={hourStart}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="name_tag">Ngày hết hạn</div>
              <div className="input_option_edit_StartDate">
                <div className="DateStart">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      className="DateStart"
                      onChange={handleOnchangeDateEnd}
                      value={dayjs(new Date(dateEnd))}
                    />
                  </LocalizationProvider>
                </div>

                <div className="DateStart">
                  <input
                    className="input_Change_Hour"
                    type="time"
                    onChange={handleOnchangeHourEnd}
                    value={hourEnd}
                  />
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
                  onChange={handleOnchangePrice}
                  value={price}
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
                  onChange={handleOnchangePriceCombo}
                  value={priceCombo}
                />
                /
                <input
                  type="number"
                  placeholder="Số lượng vé"
                  className="inputQuantityTicket"
                  onChange={handleOnChangeTicketCombo}
                  value={ticketCombo}
                />
                Vé
              </div>
            </div>
          </div>
          <div className="status_option">
            <div className="name_tag">Tình trạng</div>
            <div>
              <select
                className="option_select_status"
                value={status}
                onChange={handleOnChangeStatus}
              >
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
            <div
              style={{ color: "white", backgroundColor: "#FF993C" }}
              onClick={handleOnclickUpdate}
            >
              Lưu
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PopupOption;
