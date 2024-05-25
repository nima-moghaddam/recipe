import { configureStore } from "@reduxjs/toolkit";
import favouritSlice from "./reducers/favouritSlice";
import viewMoreSlice from "./reducers/viewMoreSlice";

export const store = configureStore({
  reducer: {
    favourit: favouritSlice,
    viewMore: viewMoreSlice,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
