import React, { useEffect, useState } from "react";
import { DataTicketOption } from "../Pages/Option/interfaceOption";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import dayjs from "dayjs";
import PopupOption from "./PopupOption";
dayjs().format("LT");
interface Props {
  data: DataTicketOption[];
}
const ListTableOption: React.FC<Props> = (props) => {
  const { data } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = (a: boolean) => {
    setOpen(a);
  };
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
              <>
                <PopupOption data={data} handleOpen={handleOpen} key={key} />
              </>
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
