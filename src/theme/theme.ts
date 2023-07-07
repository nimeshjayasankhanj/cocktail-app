import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { typography } from "./typogtaphy";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    submit: true;
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
      light: "#fff",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.search-text-box": {
            borderRadius: "40px",
          },
        },
      },
    },
  },
  typography: typography,
});

export default theme;
