import React from "react";
import { DataTicketOption } from "../Pages/Option/interfaceOption";
interface Props {
  data: DataTicketOption[];
}
const ListTableOption: React.FC<Props> = (props) => {
  const { data } = props;
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
          <td>cập nhật</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ListTableOption;
