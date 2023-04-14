import React from "react";
import { ListData } from "./InterfaceData";
interface Props {
  data: ListData[];
}
const DataList: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <tbody>
      {data ? (
        data.map((data, key) => (
          <tr key={key}>
            <td>{key + 1}</td>
            <td>{data.code}</td>
            <td>{data.numberTicker}</td>
            <td>
              {data.status === 0 ? (
                <li className="statusChuadung">Chưa sử dụng</li>
              ) : data.status === 1 ? (
                <li className="statusDadung">Đã sử dụng</li>
              ) : (
                <li className="statusHethan">Hết hạn</li>
              )}
            </td>
            <td>{data.dateUse}</td>
            <td>{data.dateCreateTicker}</td>
            <td>{data.doorCheckin}</td>
          </tr>
        ))
      ) : (
        <></>
      )}
    </tbody>
  );
};

export default DataList;
