import { configureStore } from "@reduxjs/toolkit";
import { FilterSlice } from "../Components/FilterSlice";

import { FilterCheckTicket } from "../Components/FilterCheckTicket";
export const store = configureStore({
  reducer: {
    listDataFilter: FilterSlice.reducer,
    listDataFilterCheckTicket: FilterCheckTicket.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
