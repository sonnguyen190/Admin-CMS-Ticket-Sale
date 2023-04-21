import React, { useState, useEffect, useMemo } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { collection, getDocs } from "firebase/firestore";
import "./Ticketmanagement.css";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import TableListTicket from "../../Components/TableListTicket/TableListTicket";
import FilterManament from "../../Components/FilterManament";
import { useSelector, useDispatch } from "react-redux";
import { database } from "../../firebase";
import { listTicketSelectors } from "../../Redux/selectors";
import { FilterSlice } from "../../Components/FilterSlice";

import PaginationBar from "../../Components/Pagination";

const Ticketmanagement: React.FC = () => {
  let PageSize = 10;
  const [open, setOpen] = useState(false);
  const listData = useSelector(listTicketSelectors);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const dbRef = collection(database, "ticket");

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return listData.listData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, listData.listData]);
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
          <div className="exportFile">Xuất file (.csv)</div>
        </div>
      </div>
      <div>
        <TableListTicket data={currentTableData} isLoading={isLoading} />
        <PaginationBar
          currentPage={currentPage}
          totalCount={listData.listData.length}
          siblingCount={1}
          pageSize={PageSize}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Ticketmanagement;
