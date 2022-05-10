import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { styled, Stack } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const StyledTypo = styled(Typography)`
    & > a {
      text-decoration: none;
      color: white;
    }
    & > a:active {
      color: red;
    }
  `;
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        backgroundColor: "primary.main",
      }}
    >
      <Toolbar sx = {{width: "100%"}}>
        <Stack alignItems ="center" width="100%" direction="row" spacing={4}>
          <StyledTypo
            variant="h6"
            noWrap
            sx={{
              fontWeight: 700,
              color: "inherit",
            }}
          >
            <NavLink to="/jobs-listing-website/">LOGO </NavLink>
          </StyledTypo>
          <StyledTypo
            variant="h6"
            noWrap
            sx={{
              fontWeight: 700,
              color: "white",
            }}
          >
            <NavLink to="/jobs-listing-website/addJob">Add</NavLink>
          </StyledTypo>
          <StyledTypo
            variant="h6"
            noWrap
            sx={{
             flexGrow : 1,
              fontWeight: 700,
              color: "white",
            }}
          >
            <NavLink to="/jobs-listing-website/addJob">Profile </NavLink>
          </StyledTypo>
          <StyledTypo
            variant="h6"
            noWrap
            
          >
            <NavLink sx={{
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }} to="/jobs-listing-website/login">Login </NavLink>
          </StyledTypo>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
