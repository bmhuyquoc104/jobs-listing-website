import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{ backgroundColor: "primary.main" }}
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      width="100%"
    >
      <Typography variant="h4" component="h1">
        Page not found
      </Typography>
      <Button
        onClick={() => navigate("/jobs-listing-website/", { replace: true })}
        variant="contained"
        color="backgroundNeutral"
      >
        Home
      </Button>
    </Stack>
  );
};

export default NotFound;
