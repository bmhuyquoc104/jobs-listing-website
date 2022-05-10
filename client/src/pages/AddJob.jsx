import React, { useState } from "react";
import {
  FormLabel,
  FormControl,
  Stack,
  Radio,
  RadioGroup,
  FormGroup,
  Checkbox,
  TextField,
  FormControlLabel,
  Button,
  Autocomplete,
  Typography,
  Input,
} from "@mui/material";

const AddJob = () => {
  const [value, setValue] = useState("");
  const [level, setLevel] = useState("");
  const [languages, setLanguages] = useState("");
  const [name, setName] = useState("");
  const [tool, setTool] = useState(null);
  const tools = ["React", "Sass", "Django", "Vue", "Ruby", "RoR"];
  console.log(languages);

  const handleChangeLanguages = (e) => {
    const index = languages.indexOf(e.target.value);
    if (index === -1) {
      setLanguages([...languages, e.target.value]);
    } else {
      setLanguages(languages.filter((language) => language !== e.target.value));
    }
  };
  return (
    <Stack
      sx={{ backgroundColor: "primary.main" }}
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={4}
    >
      <Stack
        p={6}
        height = "80vh"
        spacing = {4}
        justifyContent="center"
        sx={{ backgroundColor: "white", borderRadius: "10px",overflow:"scroll" }}
        width="50%"
      >
        <FormControl sx = {{marginTop:'5em'}}>
          <Stack spacing={2} direction="column">
            <TextField
              size="medium"
              label="Company"
              color="primary"
              variant="outlined"
            />
            <TextField
              size="medium"
              label="Position"
              color="primary"
              variant="outlined"
            />
            <TextField
              size="medium"
              label="Contract"
              color="primary"
              variant="outlined"
            />
            <TextField
              size="medium"
              label="Location"
              color="primary"
              variant="outlined"
            />
          </Stack>

          <Stack mt={2} width="100%" direction="column">
            <Typography color="primary" variant="subtitle1" component="h2">
              Please choose a level!
            </Typography>
            <RadioGroup
              sx={{ flexDirection: "row" }}
              name="job-level-group"
              aria-labelledby="job-level-group-label"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <FormControlLabel
                value="Senior"
                label="Senior"
                control={<Radio color="primary" />}
              ></FormControlLabel>
              <FormControlLabel
                value="Junior"
                label="Junior"
                control={<Radio color="primary" />}
              ></FormControlLabel>
              <FormControlLabel
                value="Midweight"
                label="Midweight"
                control={<Radio color="primary" />}
              ></FormControlLabel>
            </RadioGroup>
          </Stack>
          <Stack>
            <FormLabel sx={{ color: "primary.main" }}>
              Please choose a language!
            </FormLabel>
            <FormGroup sx={{ flexDirection: "row" }}>
              <FormControlLabel
                value="HTML"
                label="HTML"
                control={
                  <Checkbox
                    checked={languages.includes("HTML")}
                    onChange={handleChangeLanguages}
                  />
                }
              ></FormControlLabel>
              <FormControlLabel
                value="CSS"
                label="CSS"
                control={
                  <Checkbox
                    checked={languages.includes("CSS")}
                    onChange={handleChangeLanguages}
                  />
                }
              ></FormControlLabel>
              <FormControlLabel
                value="JS"
                label="JS"
                control={
                  <Checkbox
                    checked={languages.includes("JS")}
                    onChange={handleChangeLanguages}
                  />
                }
              ></FormControlLabel>
              <FormControlLabel
                value="Python"
                label="Python"
                control={
                  <Checkbox
                    checked={languages.includes("Python")}
                    onChange={handleChangeLanguages}
                  />
                }
              ></FormControlLabel>
              <FormControlLabel
                value="Ruby"
                label="Ruby"
                control={
                  <Checkbox
                    checked={languages.includes("Ruby")}
                    onChange={handleChangeLanguages}
                  />
                }
              ></FormControlLabel>
            </FormGroup>
          </Stack>
          <Stack>
            <Autocomplete
              value={tool}
              onChange={(e, newTool) => setTool(newTool)}
              options={tools}
              freeSolo
              renderInput={(params) => <TextField {...params} label="Tools" />}
            ></Autocomplete>
          </Stack>
        </FormControl>
        {/* Upload File */}
        <Stack>
          <FormControl>
            <Input type="file"></Input>
          </FormControl>
        </Stack>

        <Button sx = {{color: "white"}} color="primary" variant = "contained">Submit</Button>
      </Stack>
    </Stack>
  );
};

export default AddJob;
