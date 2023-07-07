import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBoxProps {
  search: string;
  setSearch: Function;
  onSearch: () => void;
}

export const SearchBox = ({ search, setSearch, onSearch }: SearchBoxProps) => {
  return (
    <OutlinedInput
      aria-label="search-box"
      autoComplete="off"
      id="search-box"
      fullWidth
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      name={"search-cocktail"}
      placeholder={"Search cocktail here..."}
      className="search-text-box"
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            onClick={() => onSearch()}
            edge="end"
            aria-label="search-box-btn"
          >
            <SearchIcon style={{ fill: "blue" }} />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};
