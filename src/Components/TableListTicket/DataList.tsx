import React from "react";
import { ListData } from "./InterfaceData";
interface Props {
  data: ListData[];
}
const DataList: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <tbody>
      {data.map((data) => (
        <tr>
          <th></th>
          <td>{data.code}</td>
          <td>{data.numberTicker}</td>
          <td>{data.status}</td>
          <td>{data.dateUse}</td>
          <td>{data.dateCreateTicker}</td>
          <td>{data.doorCheckin}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default DataList;
