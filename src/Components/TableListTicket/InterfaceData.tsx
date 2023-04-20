export interface ListData {
  id: string;
  code: string;
  numberTicket: number;
  status: string;
  dateUse: {
    seconds: number;
    nanoseconds: number;
  };
  dateCreateTicket: {
    seconds: number;
    nanoseconds: number;
  };
  doorCheckin: number;
}
