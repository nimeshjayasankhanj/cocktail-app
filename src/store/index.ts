import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./cocktail-slice";
import favoriteSlice from "./favorite-slice";
export const store = configureStore({
  reducer: {
    cocktails: cocktailSlice,
    favorite: favoriteSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
