import { createSlice } from "@reduxjs/toolkit";

export const FilterCheckTicket = createSlice({
  name: "filtercheck",
  initialState: {
    listData: [],
  },
  reducers: {
    listFilter: (state, action) => {
      state.listData = action.payload;
    },
  },
});
