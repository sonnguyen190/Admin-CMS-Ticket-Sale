import React from "react";
import { TicketCheck } from "../Pages/CheckTicket/interfaceCheck";
interface Props {
  data: TicketCheck[];
}
const ListTableTicketCheck: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <tbody>
      {data.map((data, key) => (
        <tr key={key}>
          <td>{key + 1}</td>
          <td>{data.code}</td>
          <td>
            {new Date(data.dateUse.seconds * 1000).toLocaleDateString("en-GB")}
          </td>
          <td>{data.typeTicket}</td>
          <td>Cong {data.doorCheckin}</td>
          <td>
            {data.statusCheck === "chuadoisoat" ? (
              <div className="unCheck">Chưa đối soát</div>
            ) : (
              <div className="Checked">Đã đối soát</div>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ListTableTicketCheck;
