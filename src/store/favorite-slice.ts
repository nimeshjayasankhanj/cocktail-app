import { createSlice } from "@reduxjs/toolkit";
import { CocktailObject } from "src/DTO/store";

type FavoriteState = {
  data: CocktailObject[];
};

const initialState: FavoriteState = {
  data: [],
};

const FavoriteCocktailSlice = createSlice({
  name: "favorite-cocktail",
  initialState,
  reducers: {
    addToFavoriteLists: (state, action) => {
      const { id } = action.payload;
      const isRecordExists = state.data.find(
        (value: CocktailObject) => value.id === id
      );
      if (!isRecordExists) {
        state.data.push(action.payload);
      } else {
        state.data = state.data.filter(
          (value: CocktailObject) => value.id !== id
        );
      }
    },
    removeItemFromFavorite: (state, action) => {
      const { id } = action.payload;
      state.data = state.data.filter(
        (value: CocktailObject) => value.id !== id
      );
    },
  },
});
export const { addToFavoriteLists, removeItemFromFavorite } =
  FavoriteCocktailSlice.actions;

export default FavoriteCocktailSlice.reducer;
