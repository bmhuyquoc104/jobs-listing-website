import React from "react";
import { useGetAllJobs } from "../../hooks/useJobQueries";
import Logo from "../../assets/images/photosnap.svg";
import {
  Stack,
  Typography,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
const Main = () => {
  const { data: jobs, isLoading, isError, error } = useGetAllJobs();
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return `Error:${error.message}`;
  }
  console.log(jobs.data);
  return (
    <Stack width="80%">
      <List >
        {jobs.data?.map((job) => (
          <ListItem key={job._id}>
            <ListItemAvatar>
              <Avatar alt="job description" src={job.logo}></Avatar>
            </ListItemAvatar>
            <ListItemText primary={job.position}></ListItemText>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default Main;
