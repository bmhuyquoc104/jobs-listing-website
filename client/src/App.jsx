import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { theme } from "./theme";
import { ThemeProvider, Stack } from "@mui/material";
function App() {
  return (
    <>
      {/*Wrap component by theme */}
      <ThemeProvider theme={theme}>
        <Stack
          spacing={5}
          alignItems="center"
          sx={{ bgcolor: "#f0fafa", minHeight: "100vh", paddingBottom: "5em" }}
        >
          <Header />
          <Main />
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default App;
