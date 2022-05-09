
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import AddJob from './pages/AddJob'
function App() {
  return (
    <>
      {/*Wrap component by theme */}
      <ThemeProvider theme={theme}>
        
        <Routes>
          <Route path="/jobs-listing-website/" element={<Home />}></Route>
          <Route path="/jobs-listing-website/addJob" element={<AddJob />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
