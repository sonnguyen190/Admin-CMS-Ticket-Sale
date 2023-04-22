import React, { useEffect, useState, useMemo } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import "./Option.css";
import { collection, setDoc, doc, getDocs } from "firebase/firestore";
import { DataTicketOption } from "./interfaceOption";
import { useSelector, useDispatch } from "react-redux";
import ListTableOption from "../../Components/ListTableOption";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { database } from "../../firebase";
import { listDataEvents } from "../../Components/ListDataEvent";
import { listDataSelector } from "../../Redux/selectors";
import PaginationBar from "../../Components/Pagination";
const Option: React.FC = () => {
  const dispatch = useDispatch();
  const listDataa = useSelector(listDataSelector);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState();
  const [name, setName] = useState();
  const [dateStart, setDateStart] = useState();
  const [hourStart, setHourStart] = useState();
  const [dateEnd, setDateEnd] = useState();
  const [hourEnd, setHourEnd] = useState();
  const [price, setPrice] = useState<number>(0);
  const [priceCombo, setPriceCombo] = useState<number>(0);
  const [ticketCombo, setTicketCombo] = useState<number>(0);
  const [status, setStatus] = useState<number>(1);
  const dbRef = collection(database, "event");
  let PageSize = 8;
  useEffect(() => {
    getData();
  }, []);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return listDataa.listData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, listDataa.listData]);
  const getData = async () => {
    const data = await getDocs(dbRef);

    dispatch(
      listDataEvents.actions.listData(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    );
  };
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

  const handleOnclickAddTicket = async () => {
    const listData = {
      code,
      name,
      dateStart,
      hourStart,
      dateEnd,
      hourEnd,
      price,
      priceCombo,
      ticketCombo,
      status,
    };

    setDoc(doc(dbRef), listData);
    setOpen(false);
    window.location.reload();
  };
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
          <ListTableOption data={currentTableData} />
        </table>
        <PaginationBar
          currentPage={currentPage}
          totalCount={listDataa.listData.length}
          siblingCount={1}
          pageSize={PageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>

      {open === true ? (
        <>
          <div className="popupEdit_over">
            <div className="popup_edit_page">
              <div className="title_update_ticket">Thêm gói vé</div>
              {/* Mã và tên sự kiện */}
              <div className="code_and_name_Event">
                <div>
                  <div className="name_tag">
                    Mã gói vé <b style={{ color: "red" }}>*</b>
                  </div>
                  <div className="input_option_edit_code">
                    <input
                      type="text"
                      name="Code"
                      onChange={handleOnchangeCode}
                    />
                  </div>
                </div>
                <div>
                  <div className="name_tag">Tên gói vé</div>
                  <div className="input_option_edit_nameEvent">
                    <input
                      type="text"
                      name="Name"
                      onChange={handleOnchangeName}
                    />
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
                          value={dateStart ? dayjs(dateStart) : dayjs()}
                          onChange={handleOnchangeDateStart}
                        />
                      </LocalizationProvider>
                    </div>

                    <div className="DateStart">
                      <input
                        className="input_Change_Hour"
                        type="time"
                        onChange={handleOnchangeHourStart}
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
                          value={dateStart ? dayjs(dateStart) : dayjs()}
                          onChange={handleOnchangeDateEnd}
                        />
                      </LocalizationProvider>
                    </div>

                    <div className="DateStart">
                      <input
                        className="input_Change_Hour"
                        type="time"
                        onChange={handleOnchangeHourEnd}
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
                      onChange={handleOnchangePrice}
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
                      onChange={handleOnchangePriceCombo}
                      type="number"
                      placeholder="Giá vé"
                      className="inputPriceTicket"
                    />
                    /
                    <input
                      onChange={handleOnChangeTicketCombo}
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
                  <select
                    className="option_select_status"
                    onChange={handleOnChangeStatus}
                  >
                    <option value={1}>Đang áp dụng</option>
                    <option value={0}>Tắt</option>
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
                <div
                  style={{ color: "white", backgroundColor: "#FF993C" }}
                  onClick={handleOnclickAddTicket}
                >
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
