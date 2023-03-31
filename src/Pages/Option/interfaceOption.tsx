export interface DataTicketOption {
  code: string;
  name: string;
  nameEvent: string;
  dateStart: string;
  hourStart: string;
  dateEnd: string;
  hourEnd: string;
  price: number;
  priceCombo: number | undefined;
  ticketCombo: number | undefined;
  status: number;
}
