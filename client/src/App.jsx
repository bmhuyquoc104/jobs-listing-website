import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { theme } from "./theme";
import { ThemeProvider, Stack } from "@mui/material";
function App() {
  return (
    <>
      {/*Wrap component by theme */}
      <ThemeProvider theme={theme}>
        <Stack>
          <Header />
          <Main/>
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default App;
