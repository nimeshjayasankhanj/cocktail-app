export type CocktailState = {
  data: CocktailObject[];
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
};

export type CocktailObject = {
  id: string;
  name: string;
  category: string;
  image: string;
  is_favorite: boolean;
};
