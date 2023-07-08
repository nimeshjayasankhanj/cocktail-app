import { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

import { Button } from "src/components/atoms";
import { Empty, Error, Loader, SearchBox } from "src/components/molecules";
import { CocktailCard } from "src/components/organisms";
import { cocktails } from "src/services/cocktail-service";
import { AppDispatch, RootStore } from "src/store";
import { markAsFavoriteCocktail } from "src/store/cocktail-slice";
import { addToFavoriteLists } from "src/store/favorite-slice";
import { useDispatch, useSelector } from "react-redux";
import { CocktailObject } from "src/DTO/store";

import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState<string>("");
  const [isSearchEnable, setIsSearchEnable] = useState<boolean>(false);

  useEffect(() => {
    fetchCocktails();
  }, []);

  const fetchCocktails = async () => {
    dispatch(cocktails(search));
  };

  const { data, isLoading, isSuccess, isError } = useSelector(
    (state: RootStore) => state.cocktails
  );
  const { favorites } = useSelector((state: RootStore) => state.favorite);

  const markAsFavorite = (favoriteCocktail: CocktailObject) => {
    dispatch(markAsFavoriteCocktail(favoriteCocktail));
    dispatch(addToFavoriteLists(favoriteCocktail));
    const isRecordAvailable = Boolean(
      favorites.find((favorite) => favorite.id === favoriteCocktail.id)
    );
    if (isRecordAvailable) {
      toast.success("Remove from the favorite");
    } else {
      toast.success("Added to favorite");
    }
  };

  const searchData = () => {
    fetchCocktails();
    setIsSearchEnable(true);
  };

  const refreshCocktails = () => {
    setSearch("");
    fetchCocktails();
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Grid container pb={3}>
        <Grid item xs={12} md={6} sm={8}>
          <SearchBox
            setSearch={setSearch}
            search={search}
            onSearch={searchData}
          />
        </Grid>
        <Grid item xs={12} md={6} sm={4} pt={1}>
          <Button onClick={() => refreshCocktails()} style={{ float: "right" }}>
            <CachedOutlinedIcon /> Refresh
          </Button>
        </Grid>
      </Grid>

      {isSuccess && data.length === 0 ? (
        <Empty />
      ) : (
        <Grid container spacing={10}>
          {data.map((value: CocktailObject, index: number) => (
            <Grid item xs={12} md={3} sm={6} key={value.id}>
              <CocktailCard
                value={value}
                markAsFavorite={markAsFavorite}
                isSearchEnable={isSearchEnable}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Home;
