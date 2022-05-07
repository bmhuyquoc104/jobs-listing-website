import React from "react";
import { useGetAllJobs } from "../../hooks/useJobQueries";
import { useDispatch } from "react-redux";
import { addJob } from "../../features/job";
import { filterJob } from "../../api/jobAPI";
import { useQuery } from "react-query";
import {
  Stack,
  styled,
  Typography,
  Chip,
  Button,
  Divider,
  Avatar,
  ListItemAvatar,
} from "@mui/material";

// Render 2 first items
const StyledStack = styled(Stack)`
  &:first-of-type,
  &:nth-of-type(2) {
    border-left: 3px solid hsl(180, 29%, 50%);
  }
`;

const Main = () => {
  // Assign dispatch function from redux toolkit
  const dispatch = useDispatch();

  // const { data: jobs, isLoading, isError, error } = useGetAllJobs();
  // // Render loading screen if the data is loading

  // if (isLoading) {
  //   return <h1>Loading ...</h1>;
  // }
  // // Render error screen if there are errors
  // if (isError) {
  //   return <h1>Error:{error.message}</h1>;
  // }

  const conditions = {
    role: "Frontend",
    level: "Junior",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  };

  const {
    data: jobs,
    isLoading,
    isError,
  } = useQuery(["jobs"], () => filterJob(conditions));



  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  // Render error screen if there are errors
  if (isError) {
    return <h1>Error:{error.message}</h1>;
  }

  console.log(jobs.data);

  const onError = (err) => {
    console.log(err);
  };

  const onSuccess = () => {
    console.log("success");
  };

  return (
    <Stack
      spacing={{ xs: 3.5, sm: 2 }}
      width={{ xs: "85%", md: "80%", sm: "100%" }}
    >
      {jobs.data?.map((job) => (
        // Use styled stack to render the first 2 items
        <StyledStack key={job._id}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flexStart", sm: "center" }}
            justifyContent="space-between"
            spacing={2}
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "0.2em",
              padding: "1.25em",
              boxShadow: "0 2px rgba(0,0,0,0.2)",
            }}
          >
            {/* Render avatar and company info */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flexStart", sm: "center" }}
              sx={{ position: { xs: "relative", sm: "none" } }}
            >
              <ListItemAvatar
                sx={{
                  top: { xs: "-2.5em", sm: "0" },
                  position: { xs: "relative", sm: "none" },
                }}
              >
                <Avatar alt="job description" src={job.logo}></Avatar>
              </ListItemAvatar>
              <Stack>
                <Stack alignItems="center" spacing={1} direction="row">
                  <Typography
                    variant="subtitle1"
                    color="primary.main"
                    sx={{
                      fontSize: "0.8rem",
                    }}
                  >
                    {job.company}
                  </Typography>
                  <Stack>
                    {job.new ? (
                      <Chip
                        label="NEW!"
                        color="primary"
                        size="small"
                        sx={{
                          color: "white",
                          fontSize: "0.5rem",
                          height: "20px",
                          padding: "0",
                        }}
                      ></Chip>
                    ) : (
                      <></>
                    )}
                  </Stack>
                  <Stack>
                    {job.featured ? (
                      <Chip
                        label="FEATURED"
                        size="small"
                        sx={{
                          color: "white",
                          backgroundColor: "#000000",
                          fontSize: "0.5rem",
                          height: "20px",
                          padding: "0",
                        }}
                      ></Chip>
                    ) : (
                      <></>
                    )}
                  </Stack>
                </Stack>
                <Typography
                  sx={{
                    ":hover": { color: "primary.main", cursor: "pointer" },
                  }}
                  component="h2"
                  variant="subtitle2"
                >
                  {job.position}
                </Typography>
                <Stack direction="row" spacing={1.5}>
                  <Typography
                    variant="subtitle1"
                    color="#9fa4a4"
                    sx={{
                      fontSize: "10px",
                    }}
                  >
                    {job.postedAt}
                  </Typography>
                  <Typography
                    color="#9fa4a4"
                    sx={{
                      fontSize: "10px",
                    }}
                  >
                    .
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="#9fa4a4"
                    sx={{
                      fontSize: "10px",
                    }}
                  >
                    {job.contract}
                  </Typography>
                  <Typography
                    color="#9fa4a4"
                    sx={{
                      fontSize: "10px",
                    }}
                  >
                    .
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="#9fa4a4"
                    sx={{
                      fontSize: "10px",
                    }}
                  >
                    {job.location}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Divider sx={{ display: { xs: "flex", sm: "none" } }}></Divider>

            {/* Render list of skill and level */}
            <Stack
              sx={{
                flexWrap: { xs: "wrap", sm: "none" },
                gap: { xs: "1em", sm: "0.5em" },
              }}
              direction="row"
            >
              <Button
                size="small"
                sx={{
                  color: "#72a19e",
                  ":hover": {
                    color: "white",
                    cursor: "pointer",
                    backgroundColor: "#72a19e",
                  },
                  backgroundColor: "#eff6f6",
                  textTransform: "capitalize",
                }}
                onClick={() => dispatch(addJob(job.role))}
              >
                {job.role}
              </Button>
              <Button
                sx={{
                  color: "#72a19e",
                  backgroundColor: "#eff6f6",
                  ":hover": {
                    color: "white",
                    cursor: "pointer",
                    backgroundColor: "#72a19e",
                  },
                  textTransform: "capitalize",
                }}
                size="small"
                onClick={() => dispatch(addJob(job.level))}
              >
                {job.level}
              </Button>
              {job.tools.map((tool, index) => (
                <Button
                  sx={{
                    color: "#72a19e",
                    backgroundColor: "#eff6f6",
                    ":hover": {
                      color: "white",
                      cursor: "pointer",
                      backgroundColor: "#72a19e",
                    },
                    ":visited": {
                      color: "white",
                      cursor: "pointer",
                      backgroundColor: "#72a19e",
                    },
                    textTransform: "capitalize",
                  }}
                  size="small"
                  key={index}
                  onClick={() => dispatch(addJob(tool))}
                >
                  {tool}
                </Button>
              ))}
              {job.languages.map((language, index) => (
                <Button
                  sx={{
                    color: "#72a19e",
                    backgroundColor: "#eff6f6",
                    ":hover": {
                      color: "white",
                      cursor: "pointer",
                      backgroundColor: "#72a19e",
                    },
                    textTransform: "capitalize",
                  }}
                  size="small"
                  onClick={() => dispatch(addJob(language))}
                  key={index}
                >
                  {language}
                </Button>
              ))}
            </Stack>
          </Stack>
        </StyledStack>
      ))}
    </Stack>
  );
};

export default Main;
