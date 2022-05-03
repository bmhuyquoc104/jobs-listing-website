import React from "react";
import { AppBar,Toolbar } from "@mui/material";
const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        backgroundColor: "primary.main",
      }}
    >
      <Toolbar/>
    </AppBar>
  );
};

export default Header;
