import { useState } from "react";
import { Grid } from "@mui/material";
import { Empty } from "src/components/molecules";
import { CocktailCard } from "src/components/organisms";
import { removeItemFromFavorite } from "src/store/favorite-slice";
import DeletePopUp from "./delete-pop-up";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStore } from "src/store";
import { CocktailObject } from "src/DTO/store";
import { toast } from "react-toastify";

const Favorites = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const { favorites } = useSelector((state: RootStore) => state.favorite);

  const handleClose = () => {
    setOpenModal(false);
  };

  const removeFavoriteItem = (id: string) => {
    setOpenModal(true);
    setId(id);
  };

  const handleConfirm = () => {
    dispatch(removeItemFromFavorite({ id }));
    setId("");
    setOpenModal(false);
    toast.success("Item deleted from the lists");
  };

  if (favorites.length === 0) {
    return <Empty />;
  }

  return (
    <Grid container>
      {favorites.map((value: CocktailObject, index: number) => (
        <Grid item xs={12} md={3} sm={6} key={value.id}>
          <CocktailCard
            value={value}
            isFavoritePage={true}
            removeFavoriteItem={removeFavoriteItem}
            index={index}
          />
        </Grid>
      ))}
      <DeletePopUp
        open={openModal}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
      />
    </Grid>
  );
};

export default Favorites;
