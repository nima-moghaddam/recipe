import { createSlice } from "@reduxjs/toolkit";

export interface IViewMore {
  viewMoreStatus: boolean;
}

const initialState: IViewMore = { viewMoreStatus: false };

export const viewMoreSlice = createSlice({
  name: "viewMore",
  initialState,
  reducers: {
    toggleViewMore: (state) => {
      state.viewMoreStatus = !state.viewMoreStatus;
    },
  },
});

export const { toggleViewMore } = viewMoreSlice.actions;

export default viewMoreSlice.reducer;
