import React from "react";
import DataList from "./DataList";
import { ListData } from "./InterfaceData";
import "./TableList.css";
interface Props {
  data: ListData[];
  isLoading: boolean;
}
const TableListTicket: React.FC<Props> = ({ data, isLoading }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"> STT </th>
          <th scope="col">Booking code</th>
          <th scope="col">Số vé</th>
          <th scope="col">Tình trạng sử dụng</th>
          <th scope="col">Ngày sử dụng</th>
          <th scope="col">Ngày xuất vé</th>
          <th scope="col">Cổng check - in</th>
        </tr>
      </thead>
      <DataList isLoading={isLoading} data={data} />
    </table>
  );
};

export default TableListTicket;
