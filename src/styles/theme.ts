import { ThemeProvider, createTheme, makeStyles } from "@mui/material/styles"

const theme = createTheme({
  spacing: 4, 
  palette: {
    primary: {
      main: '#FF0036',
      light: "#fff"
    },
    secondary: {
      main: "#19191E",
    },
    background: {
      paper:'#121214',
    },
    text: {
      primary: "#f1f1f1"
    },
    success: {
      main: "#2FDD92",
    },
    error: {
      main: '#FF0036',
    },
    warning: {
      main: "#f1f1f1"
    }
  },
  typography: {
    fontFamily: [
      "Jost",
      "sans-serif"
    ].join(','),
  },
  
})

export { theme };