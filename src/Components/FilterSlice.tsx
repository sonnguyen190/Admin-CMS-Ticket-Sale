import { createSlice } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
  name: "filter",
  initialState: {
    listData: [],
  },
  reducers: {
    listFilter: (state, action) => {
      state.listData = action.payload;
    },
  },
});
