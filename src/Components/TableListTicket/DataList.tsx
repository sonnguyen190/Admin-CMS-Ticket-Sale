import React, { useEffect } from "react";
import { ListData } from "./InterfaceData";

interface Props {
  data: ListData[];
  isLoading: boolean;
}
const DataList: React.FC<Props> = (props) => {
  const { data, isLoading } = props;

  useEffect(() => {});

  return (
    <tbody>
      {isLoading === true ? (
        <div className="loading_manament">
          <div>Loading...</div>
        </div>
      ) : (
        <></>
      )}
      {data ? (
        data.map((data, key) => (
          <tr key={key}>
            <td>{key + 1}</td>
            <td>{data.code}</td>
            <td>{data.numberTicket}</td>
            <td>
              {data.status === "chuasudung" ? (
                <li className="statusChuadung">Chưa sử dụng</li>
              ) : data.status === "dasudung" ? (
                <li className="statusDadung">Đã sử dụng</li>
              ) : data.status === "hethan" ? (
                <li className="statusHethan">Hết hạn</li>
              ) : (
                <></>
              )}
            </td>
            <td>
              {data.dateUse.seconds
                ? new Date(data.dateUse.seconds * 1000).toLocaleDateString(
                    "en-GB"
                  )
                : "12/12/2022"}
            </td>
            <td>
              {data.dateUse.seconds !== undefined
                ? new Date(
                    data.dateCreateTicket.seconds * 1000
                  ).toLocaleDateString("en-GB")
                : "12/12/2022"}
            </td>
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
