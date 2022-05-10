import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FormControlLabel,
  Stack,
  Button,
  TextField,
  Typography,
  Grid,
  Checkbox,
} from "@mui/material";
const Login = () => {
  const navigate = useNavigate();
  return (
    <Stack
      width="100%"
      spacing={2}
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "primary.main" }}
    >
      <Typography sx={{ color: "white" }} component="h1" variant="h3">
        Sign in
      </Typography>
      <Stack
        sx={{ backgroundColor: "white" }}
        width="40%"
        p={6}
        spacing={2}
        component="form"
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Typography variant="body2">
              <NavLink
                style={{ textDecoration: "none", color: "hsl(180, 29%, 50%)" }}
                to="/jobs-listing-website/"
              >
                Forgot password?
              </NavLink>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">
              <NavLink
                style={{ textDecoration: "none", color: "hsl(180, 29%, 50%)" }}
                to="signUp"
              >
                {"Don't have an account? Sign Up"}
              </NavLink>
            </Typography>
          </Grid>
        </Grid>
        <Button onClick={() => navigate(-1)} variant="outlined" color="primary">
          Go back
        </Button>
      </Stack>
    </Stack>
  );
};

export default Login;
