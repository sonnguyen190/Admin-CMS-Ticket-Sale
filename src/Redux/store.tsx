import { configureStore } from "@reduxjs/toolkit";
import { FilterSlice } from "../Components/FilterSlice";

import { FilterCheckTicket } from "../Components/FilterCheckTicket";
import { listDataEvents } from "../Components/ListDataEvent";
export const store = configureStore({
  reducer: {
    listDataFilter: FilterSlice.reducer,
    listDataFilterCheckTicket: FilterCheckTicket.reducer,
    listDataEvents: listDataEvents.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
