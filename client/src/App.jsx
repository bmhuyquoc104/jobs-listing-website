import Header from "./components/Header/Header";
import { theme } from "./theme";
import { ThemeProvider, Stack } from "@mui/material";
function App() {
  return (
    <>
      {/*Wrap component by theme */}
      <ThemeProvider theme={theme}>
        <Stack>
          <Header />
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default App;
