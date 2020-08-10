import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#758e9d",
    },
    secondary: {
      main: "#3fa9e2",
      dark: "#394f63",
      contrastText: "#ffffff",
    },
    text: {
      disabled: "#bdc5c8",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "Helvetica", "Arial"].join(","),
    h1: {
      fontWeight: 700,
      fontSize: "2.25rem",
    },
    h2: {
      fontFamily: ["Merriweather", "Serif", "Arial"].join(","),
      fontWeight: 500,
      fontSize: "1.75rem",
    },
    h3: {
      fontSize: "0.75rem",
    },
    h4: {
      fontFamily: ["Merriweather", "Serif", "Arial"].join(","),
      fontWeight: 500,
      fontSize: "1.25rem",
    },
    h5: {
      fontWeight: 700,
      fontSize: "0.75rem",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1rem",
    },
    button: {
      fontWeight: 500,
      fontSize: "1.5rem",
      letterSpacing: 1,
      textTransform: "none",
      "@media (max-width:1279px)": {
        fontSize: "1.15rem",
      },
    },
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        padding: "8px 12px",
      },
    },
    MuiInputBase: {
      input: {
        fontFamily: ["Merriweather", "Serif"].join(","),
        fontSize: "1.25rem",
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
});
