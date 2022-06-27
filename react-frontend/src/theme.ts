import { PaletteOptions } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";

const palette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#FFCD00",
    contrastText: "#242526",
  },
  background: {
    default: "#242526",
  },
};

interface Theme {
  status?: {
    palette?: string;
  };
}
const theme = createTheme({
  palette,
});

export default theme;
