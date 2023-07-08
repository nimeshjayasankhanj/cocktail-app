import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { CocktailObject } from "src/DTO/store";

export const cocktails = createAsyncThunk(
  "cocktail-lists",
  async (search: string, thunkApi) => {
    try {
      if (search === "") {
        const data = await fetchDataFromAPI();
        return data;
      } else {
        const data = await fetchDataFromAPIUsingSearchValues(search);
        return data;
      }
    } catch (error) {
      let err = error as AxiosError;
      throw err;
    }
  }
);

const fetchDataFromAPI = async () => {
  const cocktailData: CocktailObject[] = [];
  for (let i = 0; i < 5; i++) {
    const response = await axios.get(
      process.env.REACT_APP_RANDOM_API as string
    );
    const data = {
      id: response.data.drinks[0].idDrink,
      name: response.data.drinks[0].strDrink,
      category: response.data.drinks[0].strCategory,
      image: response.data.drinks[0].strDrinkThumb,
      is_favorite: false,
    };
    cocktailData.push(data);
  }
  return cocktailData;
};

const fetchDataFromAPIUsingSearchValues = async (search: string) => {
  const cocktailData: CocktailObject[] = [];

  const response = await axios.get(
    `${process.env.REACT_APP_SEARCH_API}?s=${search}
`
  );
  if (response.data.drinks) {
    response?.data?.drinks.forEach((value: any) => {
      const data = {
        id: value.idDrink,
        name: value.strDrink,
        category: value.strCategory,
        image: value.strDrinkThumb,
        is_favorite: false,
      };
      cocktailData.push(data);
    });
  }

  return cocktailData;
};
