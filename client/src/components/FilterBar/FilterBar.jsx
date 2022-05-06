import { useState } from "react";
import { Stack, Chip } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector, useDispatch } from "react-redux";
import { deleteJob, clearJob } from "../../features/job";
const FilterBar = () => {
  const jobs = useSelector((state) => state.jobs);
  console.log(jobs);
  const dispatch = useDispatch();
 
  return (
    <>
      {/* If there are any items in filter arr -> display , else -> display none */}
      {jobs.length > 0 ? (
        <Stack
          width={{ xs: "85%", sm: "100%", md: "80%" }}
          alignItems="center"
          direction="row"
          p={2}
          mb={4}
          mt={-2}
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "0.2em",
            boxShadow: "0 2px rgba(0,0,0,0.2)",
            minHeight: "30px",
            flexWrap: "wrap",
            gap: { xs: "1em", sm: "0.5em" },
          }}
        >
          {jobs.map((job, index) => (
            <Chip
              key={index}
              label={job}
              sx={{
                color: "#72a19e",
                backgroundColor: "#eff6f6",
                fontSize: "0.5rem",
                height: "20px",
                borderRadius: "5px",
                padding: "0",
              }}
              onDelete={() => dispatch(deleteJob(index))}
              deleteIcon={
                <ClearIcon
                  sx={{
                    backgroundColor: "#72a19e",
                    margin: "0 !important",
                    color: "white !important",
                    ":hover": { backgroundColor: "#000000" },
                  }}
                />
              }
              size="medium"
            ></Chip>
          ))}
        </Stack>
      ) : (
        <Stack mb={4}></Stack>
      )}
    </>
  );
};

export default FilterBar;
