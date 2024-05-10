import { configureStore } from "@reduxjs/toolkit";
import favouritSlice from "./favouritSlice";

export const store = configureStore({
  reducer: {
    favourit: favouritSlice,
  },
});
