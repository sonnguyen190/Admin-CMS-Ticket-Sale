export interface DataTicketOption {
  id: string;
  code: string;
  name: string;
  dateStart: {
    seconds: number;
    nanoseconds: number;
  };
  hourStart: string;
  dateEnd: {
    seconds: number;
    nanoseconds: number;
  };
  hourEnd: string;
  price: number;
  priceCombo: number | undefined;
  ticketCombo: number | undefined;
  status: string;
}
