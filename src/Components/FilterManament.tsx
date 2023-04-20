import React, { useState, ChangeEvent, useEffect } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { database } from "../firebase";
import { ListData } from "./TableListTicket/InterfaceData";
import { FilterSlice } from "./FilterSlice";
import { useDispatch } from "react-redux";
interface IsCheck {
  name: string;
  isCheck: boolean;
  id: number;
}
interface Props {
  handleOpen: (value?: any) => void;
}

const FilterManament: React.FC<Props> = ({ handleOpen }) => {
  const dispatch = useDispatch();
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [status, setStatus] = useState("tatca");
  const [CheckDoor, setCheckDoor] = useState([
    { name: "Tất cả", isCheck: true, id: 0 },
    { name: "Cổng 1", isCheck: false, id: 1 },
    { name: "Cổng 2", isCheck: false, id: 2 },
    { name: "Cổng 3", isCheck: false, id: 3 },
    { name: "Cổng 4", isCheck: false, id: 4 },
    { name: "Cổng 5", isCheck: false, id: 5 },
  ]);
  const handleChooseStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };
  const handleChooseFromDate = (e: any) => {
    setFromDate(e.$d);
  };
  const handleChooseToDate = (e: any) => {
    setToDate(e.$d);
  };

  const handleCheck = (valueCheck: number) => {
    if (valueCheck === 0) {
      const checkDoor: IsCheck[] = CheckDoor.map((door, index) =>
        index !== 0 ? { ...door, isCheck: false } : { ...door, isCheck: true }
      );
      setCheckDoor(checkDoor);
    } else {
      const checkDoor: IsCheck[] = CheckDoor.map((door, index) =>
        index === 0
          ? { ...door, isCheck: false }
          : index === valueCheck
          ? { ...door, isCheck: true }
          : door
      );
      setCheckDoor(checkDoor);
    }
  };
  useEffect(() => {
    if (CheckDoor.every((door) => !door.isCheck)) {
      const newCheckDoor: IsCheck[] = CheckDoor.map((door, index) =>
        index === 0 ? { ...door, isCheck: true } : { ...door, isCheck: false }
      );
      setCheckDoor(newCheckDoor);
    }
    if (
      !CheckDoor[0].isCheck &&
      CheckDoor[1].isCheck &&
      CheckDoor[2].isCheck &&
      CheckDoor[3].isCheck &&
      CheckDoor[4].isCheck &&
      CheckDoor[5].isCheck
    ) {
      const newCheckDoor: IsCheck[] = CheckDoor.map((door, index) =>
        index !== 0 ? { ...door, isCheck: false } : { ...door, isCheck: true }
      );
      setCheckDoor(newCheckDoor);
    }
  }, [CheckDoor, status]);

  const handleFilterTicket = async () => {
    const filter = {
      status,
      listDoor: CheckDoor.filter((door) => door.isCheck),
      fromDate,
      toDate,
    };

    const ticketRef = collection(database, "ticket");
    const queryConstraints = [];

    if (filter.status !== "tatca") {
      queryConstraints.push(where("status", "==", filter.status));
    }
    if (filter.fromDate !== undefined) {
      queryConstraints.push(where("dateUse", ">=", filter.fromDate));
    }
    if (filter.toDate !== undefined) {
      queryConstraints.push(where("dateUse", "<=", filter.toDate));
    }
    if (filter.listDoor[0].id !== 0) {
      queryConstraints.push(
        where(
          "doorCheckin",
          "in",
          filter.listDoor.map((item) => item.id)
        )
      );
    }

    const qstring = query(
      ticketRef,
      ...queryConstraints,
      orderBy("dateUse", "asc")
    );
    const tickets: ListData[] = [];

    const docsSnap = await getDocs(qstring);
    docsSnap.forEach((docItem) => {
      tickets.push({
        id: docItem.id,
        code: docItem.data().code,
        numberTicket: docItem.data().numberTicket,
        status: docItem.data().status,
        dateUse: docItem.data().dateUse,
        dateCreateTicket: docItem.data().dateCreateTicket,
        doorCheckin: docItem.data().doorCheckin,
      });
    });
    handleOpen(false);

    dispatch(FilterSlice.actions.listFilter(tickets));
  };
  return (
    <>
      <div
        className="themeFilter"
        onClick={() => {
          handleOpen(false);
        }}
      ></div>
      <div
        className="filter_management"
        onClick={() => {
          handleOpen(true);
        }}
      >
        <div className="name_filter">Lọc vé</div>
        {/* Từ ngày đến ngày */}
        <div className="dateStart_End">
          <div>
            <div className="date_manament"> Từ ngày</div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="DatePickerManament"
                  value={fromDate ? dayjs(fromDate) : dayjs()}
                  onChange={handleChooseFromDate}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div>
            <div className="date_manament">Đến ngày</div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className="DatePickerManament"
                  onChange={handleChooseToDate}
                  value={toDate ? dayjs(toDate) : dayjs()}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
        {/* tình trạng sử dụng */}
        <div className="statusTicket">
          <div className="status_manament">Tình trạng sử dụng</div>
          <div className="statusRadio">
            <div className="itemStatus">
              <input
                type="radio"
                name="statusTicket"
                className="radio_manament"
                value="tatca"
                onChange={(e) => handleChooseStatus(e)}
                defaultChecked
              />
              Tất cả
            </div>
            <div className="itemStatus">
              <input
                type="radio"
                name="statusTicket"
                className="radio_manament"
                value="dasudung"
                onChange={(e) => handleChooseStatus(e)}
              />
              Đã sử dụng
            </div>
            <div className="itemStatus">
              <input
                type="radio"
                name="statusTicket"
                className="radio_manament"
                value="chuasudung"
                onChange={(e) => handleChooseStatus(e)}
              />
              Chưa sử dụng
            </div>
            <div className="itemStatus">
              <input
                type="radio"
                name="statusTicket"
                className="radio_manament"
                value="hethan"
                onChange={(e) => handleChooseStatus(e)}
              />
              Hết hạn
            </div>
          </div>
        </div>
        {/* Cổng checkin */}
        <div className="Checkin_Manament">
          <div className="status_manament">Cổng Check - in</div>
          <div className="all_1_2">
            {CheckDoor.map((data, index) => {
              return (
                <div key={data.name}>
                  <input
                    type="checkbox"
                    checked={data.isCheck}
                    name={data.name}
                    value={data.name}
                    onChange={() => handleCheck(index)}
                  />
                  <div>{data.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Button_Filter">
          <button className="FilButton" onClick={handleFilterTicket}>
            Lọc
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterManament;
