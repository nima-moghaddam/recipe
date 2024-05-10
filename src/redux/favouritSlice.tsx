import { createSlice } from "@reduxjs/toolkit";
import { IRecipe } from "@/types/RecipeInterface";

export interface IFavourit {
  favorList: IRecipe[];
}

const initialState: IFavourit = { favorList: [] };

export const favouritSlice = createSlice({
  name: "favourit",
  initialState,
  reducers: {
    addFavourit: (state, action) => {
      state.favorList.push(action.payload);
    },
    removeFavourit: (state, action) => {
      state.favorList = state.favorList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addFavourit, removeFavourit } = favouritSlice.actions;

export default favouritSlice.reducer;
