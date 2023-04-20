import { configureStore } from "@reduxjs/toolkit";
import { FilterSlice } from "../Components/FilterSlice";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    listDataFilter: FilterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
