import React from "react";
import DataList from "./DataList";
import { ListData } from "./InterfaceData";
import "./TableList.css";
const TableListTicket: React.FC = () => {
  const DataFake: ListData[] = [
    {
      code: "ALTFGHJU",
      numberTicker: 123456789034,
      status: 1,
      dateUse: "11/11/2020",
      dateCreateTicker: "11/11/2020",
      doorCheckin: "cong 1",
    },
    {
      code: "ALTFGHJU",
      numberTicker: 123456789034,
      status: 1,
      dateUse: "11/11/2020",
      dateCreateTicker: "11/11/2020",
      doorCheckin: "cong 1",
    },
    {
      code: "ALTFGHJU",
      numberTicker: 123456789034,
      status: 1,
      dateUse: "11/11/2020",
      dateCreateTicker: "11/11/2020",
      doorCheckin: "cong 1",
    },
    {
      code: "ALTOJMNB",
      numberTicker: 123456789034,
      status: 0,
      dateUse: "11/11/2020",
      dateCreateTicker: "11/11/2020",
      doorCheckin: "cong 1",
    },
    {
      code: "ALTOJ32B",
      numberTicker: 123456789034,
      status: 2,
      dateUse: "11/11/2020",
      dateCreateTicker: "11/11/2020",
      doorCheckin: "cong 1",
    },
    {
      code: "ALTOJ32B",
      numberTicker: 123456789034,
      status: 2,
      dateUse: "11/11/2020",
      dateCreateTicker: "11/11/2020",
      doorCheckin: "cong 1",
    },
    {
      code: "ALTOJ32B",
      numberTicker: 123456789034,
      status: 2,
      dateUse: "11/11/2020",
      dateCreateTicker: "11/11/2020",
      doorCheckin: "cong 1",
    },
    {
      code: "ALTOJ32B",
      numberTicker: 123456789034,
      status: 2,
      dateUse: "11/11/2020",
      dateCreateTicker: "11/11/2020",
      doorCheckin: "cong 1",
    },
    {
      code: "ALTHDMNB",
      numberTicker: 123456789034,
      status: 1,
      dateUse: "11/11/2020",
      dateCreateTicker: "11/11/2020",
      doorCheckin: "cong 1",
    },
    {
      code: "ALTHDMNB",
      numberTicker: 123456789034,
      status: 1,
      dateUse: "11/11/2020",
      dateCreateTicker: "11/11/2020",
      doorCheckin: "cong 1",
    },
    {
      code: "ALTHDMNB",
      numberTicker: 123456789034,
      status: 2,
      dateUse: "11/11/2020",
      dateCreateTicker: "11/11/2020",
      doorCheckin: "cong 1",
    },
    {
      code: "ALTHDMNB",
      numberTicker: 123456789034,
      status: 0,
      dateUse: "11/11/2020",
      dateCreateTicker: "11/11/2020",
      doorCheckin: "cong 1",
    },
  ];
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"> STT</th>
          <th scope="col">Booking code</th>
          <th scope="col">Số vé</th>
          <th scope="col">Tình trạng sử dụng</th>
          <th scope="col">Ngày sử dụng</th>
          <th scope="col">Ngày xuất vé</th>
          <th scope="col">Cổng check - in</th>
        </tr>
      </thead>
      <DataList data={DataFake} />
    </table>
  );
};

export default TableListTicket;
