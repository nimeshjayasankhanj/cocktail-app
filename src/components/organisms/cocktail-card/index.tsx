import { CardMedia, Box, Chip, CardContent, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { Card } from "src/components/atoms";
import { CocktailObject } from "src/DTO/store";

interface CocktailCardProps {
  value: CocktailObject;
  isFavoritePage?: boolean;
  markAsFavorite?: (data: CocktailObject) => void | undefined;
  removeFavoriteItem?: (id: string) => void | undefined;
  isSearchEnable?: boolean;
  index: number;
}

export const CocktailCard = ({
  value,
  isFavoritePage = false,
  markAsFavorite,
  removeFavoriteItem,
  isSearchEnable = false,
  index,
}: CocktailCardProps) => {
  return (
    <Card>
      <CardMedia sx={{ height: 240 }} image={value.image} title={value.name} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            textOverflow: "ellipsis",
            overflow: " hidden",
            whiteSpace: "nowrap",
            textAlign: "right",
          }}
          aria-label="cocktail-name"
        >
          {value.name}
        </Typography>
        <Box
          style={{
            textOverflow: "ellipsis",
            overflow: " hidden",
            whiteSpace: "nowrap",
            textAlign: "right",
          }}
        >
          <Chip
            label={value.category}
            size="small"
            sx={{
              backgroundColor: "#8b26b2",
              color: "white",
              fontWeight: "bold",
              fontSize: "10px",
            }}
          />
        </Box>

        <Box style={{ textAlign: "right" }}>
          {isFavoritePage && removeFavoriteItem ? (
            <DeleteForeverIcon
              aria-label={`delete-favorite${index}`}
              onClick={() => removeFavoriteItem(value.id)}
              style={{ color: "red", cursor: "pointer", fontSize: "35px" }}
            />
          ) : null}

          {!isFavoritePage && isSearchEnable && markAsFavorite ? (
            value.is_favorite ? (
              <FavoriteOutlinedIcon
                style={{
                  color: "#8b26b2",
                  cursor: "pointer",
                  fontSize: "35px",
                }}
                onClick={() => markAsFavorite(value)}
              />
            ) : (
              <FavoriteBorderOutlinedIcon
                aria-label={`mark-favorite${index}`}
                style={{
                  color: "#8b26b2",
                  cursor: "pointer",
                  fontSize: "35px",
                }}
                onClick={() => markAsFavorite(value)}
              />
            )
          ) : null}
        </Box>
      </CardContent>
    </Card>
  );
};
