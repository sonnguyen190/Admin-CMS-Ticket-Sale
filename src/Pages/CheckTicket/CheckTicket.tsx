import React, { useEffect, useState, useMemo } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./CheckTicket.css";
import { collection, getDocs, where, query, orderBy } from "firebase/firestore";
import dayjs from "dayjs";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ListTableTicketCheck from "../../Components/ListTableTicketCheck";
import { useSelector, useDispatch } from "react-redux";
import { database } from "../../firebase";
import { FilterCheckTicket } from "../../Components/FilterCheckTicket";
import { listTicketCheck } from "../../Redux/selectors";
import { TicketCheck } from "./interfaceCheck";
import PaginationBar from "../../Components/Pagination";
const CheckTicket: React.FC = () => {
  let PageSize = 10;
  const dbRef = collection(database, "doisoatve");
  const listData = useSelector(listTicketCheck);
  const listDataTicketCheck = listData.listData;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [statusCheck, setStatusCheck] = useState("tatca");
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return listData.listData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, listData.listData]);
  const getData = async () => {
    const data = await getDocs(dbRef);
    setIsLoading(false);
    dispatch(
      FilterCheckTicket.actions.listFilter(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    );
  };
  const handleChooseFromDate = (e: any) => {
    setFromDate(e.$d);
  };
  const handleChooseToDate = (e: any) => {
    setToDate(e.$d);
  };
  const handleChooseStatus = (e: any) => {
    setStatusCheck(e.target.value);
  };
  const handleFilterOnclick = async () => {
    const filter = {
      fromDate,
      toDate,
      statusCheck,
    };
    console.log(filter);
    const ticketRef = collection(database, "doisoatve");
    const queryConstraints = [];
    if (filter.statusCheck !== "tatca") {
      queryConstraints.push(where("statusCheck", "==", filter.statusCheck));
    }
    if (filter.fromDate !== undefined) {
      queryConstraints.push(where("dateUse", ">=", filter.fromDate));
    }
    if (filter.toDate !== undefined) {
      queryConstraints.push(where("dateUse", "<=", filter.toDate));
    }
    const qstring = query(
      ticketRef,
      ...queryConstraints,
      orderBy("dateUse", "asc")
    );
    const tickets: TicketCheck[] = [];
    const docsSnap = await getDocs(qstring);
    docsSnap.forEach((docItem) => {
      tickets.push({
        code: docItem.data().code,
        statusCheck: docItem.data().statusCheck,
        dateUse: docItem.data().dateUse,
        typeTicket: docItem.data().typeTicket,
        doorCheckin: docItem.data().doorCheckin,
      });
    });
    console.log(tickets);
    dispatch(FilterCheckTicket.actions.listFilter(tickets));
  };
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
            <ListTableTicketCheck data={currentTableData} />
          </table>
          <PaginationBar
            currentPage={currentPage}
            totalCount={listDataTicketCheck.length}
            siblingCount={1}
            pageSize={PageSize}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
      </div>
      <div className="CheckTicket_right">
        <div className="filerCheckTicket">Lọc vé</div>
        <div className="filtercheck">
          <div className="tinhtrangdoisoat"> Tình trạng đối soát</div>
          <div className="ul_li_filter">
            <ul>
              <li>
                <input
                  defaultChecked
                  type="radio"
                  value="tatca"
                  onChange={(e) => handleChooseStatus(e)}
                  name="checkTicket"
                />
                <label>Tất cả</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="checkTicket"
                  value="dadoisoat"
                  onChange={(e) => handleChooseStatus(e)}
                />
                <label>Đã đối soát</label>
              </li>
              <li>
                <input
                  type="radio"
                  name="checkTicket"
                  value="chuadoisoat"
                  onChange={(e) => handleChooseStatus(e)}
                />
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
              <DatePicker
                value={fromDate ? dayjs(fromDate) : dayjs()}
                onChange={handleChooseFromDate}
                className="DatePicker"
              />
            </LocalizationProvider>
          </div>
        </div>
        {/* Đối soát vé đến ngày */}
        <div className="tungay">
          <div className="CheckDate_name">Đến ngày</div>
          <div className="CheckDate_content">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                onChange={handleChooseToDate}
                value={toDate ? dayjs(toDate) : dayjs()}
                className="DatePicker"
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="AcceptFilter">
          <button onClick={handleFilterOnclick} className="buttonFilerAccept">
            Lọc
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckTicket;
