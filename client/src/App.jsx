
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import AddJob from './pages/AddJob'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
function App() {
  return (
    <>
      {/*Wrap component by theme */}
      <ThemeProvider theme={theme}>
        
        <Routes>
          <Route path="/jobs-listing-website/" element={<Home />}></Route>
          <Route path="/jobs-listing-website/addJob" element={<AddJob />}></Route>
          <Route path="/jobs-listing-website/login" element={<Login />}></Route>
          <Route path = "*" element = {<NotFound/>}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
