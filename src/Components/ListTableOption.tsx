import React, { useEffect, useState } from "react";
import { DataTicketOption } from "../Pages/Option/interfaceOption";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

import {
  collection,
  getDocs,
  where,
  query,
  doc,
  getDoc,
} from "firebase/firestore";
import dayjs from "dayjs";
import PopupOption from "./PopupOption";
import { database } from "../firebase";
dayjs().format("LT");
interface Props {
  data: DataTicketOption[];
}
const ListTableOption: React.FC<Props> = (props) => {
  const { data } = props;
  const [open, setOpen] = useState(false);
  const [dataByCode, setDataByCode] = useState<any>();
  const dbRef = collection(database, "event");
  const handleOpen = (a: boolean) => {
    setOpen(a);
  };

  const getDataByCode = async (code: string) => {
    const q = query(dbRef, where("code", "==", code));
    const querySnapshot = await getDocs(q);
    let data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    setDataByCode(data[0]);
  };
  return (
    <tbody>
      {data ? (
        data.map((data, key) => (
          <tr key={key}>
            <td>{key + 1}</td>
            <td>{data.code}</td>
            <td>{data.name}</td>
            <td>
              {new Date(data.dateStart.seconds * 1000).toLocaleDateString(
                "en-GB"
              )}
              <div>{data.hourStart}</div>
            </td>
            <td>
              {new Date(data.dateEnd.seconds * 1000).toLocaleDateString(
                "en-GB"
              )}
              <div>{data.hourEnd}</div>
            </td>
            <td>{data.price}</td>
            <td>
              {data.priceCombo === 0 ? (
                <></>
              ) : (
                <>
                  {data.priceCombo} VNĐ/{data.ticketCombo} Vé
                </>
              )}
            </td>
            <td>
              {data.status === "0" ? (
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
                  getDataByCode(data.code);
                }}
              >
                <ModeEditOutlineOutlinedIcon /> <div>Cập nhật</div>
              </div>
              {open === true ? (
                <>
                  <PopupOption data={dataByCode} handleOpen={handleOpen} />
                </>
              ) : (
                <></>
              )}
            </td>
          </tr>
        ))
      ) : (
        <></>
      )}
    </tbody>
  );
};

export default ListTableOption;
