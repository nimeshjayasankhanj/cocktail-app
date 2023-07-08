import { createSlice } from "@reduxjs/toolkit";
import { CocktailObject } from "src/DTO/store";

type FavoriteState = {
  favorites: CocktailObject[];
};

const initialState: FavoriteState = {
  favorites: [],
};

const FavoriteCocktailSlice = createSlice({
  name: "favorite-cocktail",
  initialState,
  reducers: {
    addToFavoriteLists: (state, action) => {
      const { id } = action.payload;
      const isRecordExists = state.favorites.find(
        (value: CocktailObject) => value.id === id
      );
      if (!isRecordExists) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter(
          (value: CocktailObject) => value.id !== id
        );
      }
    },
    removeItemFromFavorite: (state, action) => {
      const { id } = action.payload;
      state.favorites = state.favorites.filter(
        (value: CocktailObject) => value.id !== id
      );
    },
  },
});
export const { addToFavoriteLists, removeItemFromFavorite } =
  FavoriteCocktailSlice.actions;

export default FavoriteCocktailSlice.reducer;
