import { createSlice } from "@reduxjs/toolkit";

export const listDataEvents = createSlice({
  name: "listDataEvents",
  initialState: {
    listData: [],
  },
  reducers: {
    listData: (state, action) => {
      state.listData = action.payload;
    },
  },
});
