import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import FilterBar from "../components/FilterBar/FilterBar";
import {Stack} from "@mui/material"
const Home = () => {
  return (
    <Stack
      alignItems="center"
      sx={{ bgcolor: "#f0fafa", minHeight: "100vh", paddingBottom: "5em" }}
    >
      <Header />
      <FilterBar />
      <Main />
    </Stack>
  );
};

export default Home;
