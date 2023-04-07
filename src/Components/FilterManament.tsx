import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
interface IsCheck {
  name: string;
  isCheck: boolean;
}
interface Props {
  handleOpen: (value?: any) => void;
}

const FilterManament: React.FC<Props> = ({ handleOpen }) => {
  const [CheckDoor, setCheckDoor] = useState([
    { name: "Tất cả", isCheck: true },
    { name: "Cổng 1", isCheck: false },
    { name: "Cổng 2", isCheck: false },
    { name: "Cổng 3", isCheck: false },
    { name: "Cổng 4", isCheck: false },
    { name: "Cổng 5", isCheck: false },
  ]);

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
                  defaultValue={dayjs("11/11/2022")}
                  className="DatePickerManament"
                />
              </LocalizationProvider>
            </div>
          </div>
          <div>
            <div className="date_manament">Đến ngày</div>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  defaultValue={dayjs("11/11/2022")}
                  className="DatePickerManament"
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
                defaultChecked
              />
              Tất cả
            </div>
            <div className="itemStatus">
              <input
                type="radio"
                name="statusTicket"
                className="radio_manament"
              />
              Đã sử dụng
            </div>
            <div className="itemStatus">
              <input
                type="radio"
                name="statusTicket"
                className="radio_manament"
              />
              Chưa sử dụng
            </div>
            <div className="itemStatus">
              <input
                type="radio"
                name="statusTicket"
                className="radio_manament"
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
          <button className="FilButton">Lọc</button>
        </div>
      </div>
    </>
  );
};

export default FilterManament;
