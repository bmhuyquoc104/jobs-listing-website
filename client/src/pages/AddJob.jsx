import React, { useState, useEffect } from "react";
import { useCreateJob } from "../hooks/useJobQueries";
import {
  FormLabel,
  FormControl,
  Stack,
  Box,
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
import { useNavigate } from "react-router-dom";
import UploadFile from "../components/UploadFile/UploadFile";
const AddJob = () => {

  const formData = new FormData();
  const [images, setImages] = useState([]);
  const [imagesUrl, setImageUrl] = useState([]);
  // Re render depend on the change of images arr
  useEffect(() => {
    // Check if there are any uploaded images yet
    if (images.length < 1) {
      return;
    }
    // Assign arr to push all object URL images
    const tempArr = [];

    // Create object URL for each image
    images.forEach((image) => tempArr.push(URL.createObjectURL(image)));
    setImageUrl(tempArr);
    // Remove object URL when the component is unmounted
    return () => tempArr.forEach((element) => URL.revokeObjectURL(element));
  }, [images]);

  // Function to handle add image
  const handleImages = (e) => {
    setImages([...e.target.files]);
  };

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [contract, setContract] = useState("");
  const [location, setLocation] = useState("");
  const [level, setLevel] = useState("");
  const [languages, setLanguages] = useState("");
  const [role, setRole] = useState("");
  const [tool, setTool] = useState(null);
  const tools = ["React", "Sass", "Django", "Vue", "Ruby", "RoR"];
  console.log(languages);
  const navigate = useNavigate();
  const mutation = useCreateJob();
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.append("result",result)
    let result = {
      position: `${position}`,
      location: `${location}`,
      contract: `${contract}`,
      company: `${company}`,
      role: `${role}`,
      level: `${level}`,
      new: true,
      featured: true,
      postedAt: "1 minutes ago",
      logo: images,
      languages: languages,
      tool: `${tool}`,
    };
    let result2 = {
      position: "1",
      location: "2",
      contract: "3",
      company: "4",
      role: '5',
      level: "6",
      new: true,
      featured: true,
      postedAt: "1 minutes ago",
      logo: images,
      languages: [],
      tool: [],
    };
    console.log(result2);
    mutation.mutate(result2);
    navigate("/jobs-listing-website/");
  };

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
        spacing={4}
        justifyContent="center"
        component="form"
        onSubmit={handleSubmit}
        enctype="multipart/form-data"
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          overflow: "scroll",
        }}
        width="50%"
      >
        <FormControl>
          <FormLabel>Add job</FormLabel>
          <Stack spacing={2} direction="column">
            <TextField
              size="medium"
              label="Company"
              color="primary"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
              variant="outlined"
            />
            <TextField
              size="medium"
              label="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              color="primary"
              variant="outlined"
            />
            <TextField
              size="medium"
              label="Contract"
              value={contract}
              onChange={(e) => setContract(e.target.value)}
              color="primary"
              variant="outlined"
            />
            <TextField
              size="medium"
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
            <FormLabel>Please choose a role!</FormLabel>
            <RadioGroup
              value={role}
              onChange={(e) => setRole(e.target.value)}
              sx={{ flexDirection: "row" }}
            >
              <FormControlLabel
                label="Frontend"
                value="Frontend"
                control={<Radio color="primary" />}
              ></FormControlLabel>
              <FormControlLabel
                label="Fullstack"
                value="Fullstack"
                control={<Radio color="primary" />}
              ></FormControlLabel>
              <FormControlLabel
                label="Backend"
                value="Backend"
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
        <Stack alignItems="center" justifyContent="center" direction="column">
          {/* <FormControl>
            <Input type="file"></Input>
          </FormControl> */}
          <input
            type="file"
            multiple
            accept="image/*"
            name="image"
            onChange={handleImages}
          ></input>
          {imagesUrl.map((imageUrl, index) => (
            <Box key={index}>
              <img src={imageUrl} />
            </Box>
          ))}
        </Stack>

        <Button
          type="submit"
          sx={{ color: "white" }}
          color="primary"
          variant="contained"
        >
          Submit
        </Button>
        <Button variant="outlined" color="primary" onClick={() => navigate(-1)}>
          Go back
        </Button>
      </Stack>
    </Stack>
  );
};

export default AddJob;
