import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { addDoc, collection, getDocs, setDoc, doc } from "firebase/firestore";
import "./Ticketmanagement.css";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import TableListTicket from "../../Components/TableListTicket/TableListTicket";
import FilterManament from "../../Components/FilterManament";
import { useSelector, useDispatch } from "react-redux";
import { database } from "../../firebase";
import { listTicketSelectors } from "../../Redux/selectors";
import { FilterSlice } from "../../Components/FilterSlice";
import dayjs, { Dayjs } from "dayjs";

const Ticketmanagement: React.FC = () => {
  const [open, setOpen] = useState(false);
  const listData = useSelector(listTicketSelectors);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const dbRef = collection(database, "ticket");

  const handleOpen = (a: boolean) => {
    setOpen(a);
  };
  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);

  const getData = async () => {
    const data = await getDocs(dbRef);
    setIsLoading(false);

    dispatch(
      FilterSlice.actions.listFilter(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    );
  };

  const handleadd = async () => {
    await setDoc(doc(dbRef, `jashrjkahKS`), {
      code: "ALT121312",
      numberTicket: 123123123,
      status: "chuasudung",
      dateUse: new Dayjs(),
      dateCreateTicket: new Dayjs(),
      doorCheckin: 1,
    });
    // await addDoc(dbRef, {
    //   code: "ALT121312",
    //   numberTicket: 123123123,
    //   status: "chuasudung",
    //   dateUse: Dayjs,
    //   dateCreateTicket: Dayjs,
    //   doorCheckin: 1,
    // });
  };

  return (
    <div className="TicketManage">
      {open === true ? <FilterManament handleOpen={handleOpen} /> : <></>}

      <div className="danhsachve">Danh Sách Vé</div>
      <div className="SearchAndFilter">
        <div className="search_bar_Ticketmanagement">
          <InputBase
            className="input_search_Ticketmanagement"
            placeholder="Tìm bằng số vé"
          />
          <IconButton
            className=""
            type="button"
            sx={{ p: "5px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </div>
        <div className="filterTicket">
          <div
            className="filterManage"
            onClick={() => {
              setOpen(true);
            }}
          >
            <FilterAltOutlinedIcon className="iconFilter" />
            Lọc vé
          </div>
          <div onClick={handleadd} className="exportFile">
            Xuất file (.csv)
          </div>
        </div>
      </div>
      <div>
        <TableListTicket data={listData.listData} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Ticketmanagement;
