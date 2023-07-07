import { createSlice } from "@reduxjs/toolkit";
import { CocktailObject, CocktailState } from "src/DTO/store";
import { cocktails } from "src/services/cocktail-service";

const initialState: CocktailState = {
  data: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
};

const CocktailSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    markAsFavoriteCocktail: (state, action) => {
      const { id } = action.payload;
      const newCocktailLists = state.data.map((value: CocktailObject) =>
        value.id === id
          ? { ...action.payload, is_favorite: !action.payload.is_favorite }
          : value
      );
      state.data = newCocktailLists;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(cocktails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(cocktails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(cocktails.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
export const { markAsFavoriteCocktail } = CocktailSlice.actions;

export default CocktailSlice.reducer;
