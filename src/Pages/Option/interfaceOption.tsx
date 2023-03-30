export interface DataTicketOption {
  code: string;
  name: string;
  dateStart: string;
  hourStart: string;
  dateEnd: string;
  hourEnd: string;
  price: number;
  priceCombo: number | null;
  ticketCombo: number | null;
  status: number;
}
