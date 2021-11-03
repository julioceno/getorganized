import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp;
