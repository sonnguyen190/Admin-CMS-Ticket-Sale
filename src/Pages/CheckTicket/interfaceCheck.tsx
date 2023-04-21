export interface TicketCheck {
  code: number;
  dateUse: {
    seconds: number;
  };
  typeTicket: string;
  doorCheckin: number;
  statusCheck: string;
}
