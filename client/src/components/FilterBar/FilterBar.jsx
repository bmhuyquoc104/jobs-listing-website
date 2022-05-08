import { useState } from "react";
import { Stack, Chip, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector, useDispatch } from "react-redux";
import { deleteJob, clearJob } from "../../features/job";
import {
  removeAllConditions,
  removeLevel,
  removeRole,
  removeLanguages,
  removeTools,
} from "../../features/conditions";
const FilterBar = () => {
  const jobs = useSelector((state) => state.jobs);
  const conditions = useSelector((state) => state.conditions);
  console.log(jobs);
  console.log(conditions);
  const dispatch = useDispatch();

  return (
    <>
      {/* If there are any items in filter arr -> display , else -> display none */}
      {jobs.length > 0 ? (
        <Stack
          width={{ xs: "85%", sm: "100%", md: "80%" }}
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          p={2}
          mb={4}
          mt={-2}
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "0.2em",
            boxShadow: "0 2px rgba(0,0,0,0.2)",
            minHeight: "30px",
            gap: { xs: "1em", sm: "0.5em" },
          }}
        >
          <Stack
            direction="row"
            sx={{
              backgroundColor: "#ffffff",
              flexWrap: "wrap",
              gap: { xs: "1em", sm: "0.5em" },
            }}
          >
            {/* {jobs.map((job, index) => (
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
            ))} */}
            {conditions.level != "" ? (
              <Chip
                label={conditions.level}
                sx={{
                  color: "#72a19e",
                  backgroundColor: "#eff6f6",
                  fontSize: "0.5rem",
                  height: "20px",
                  borderRadius: "5px",
                  padding: "0",
                }}
                onDelete={() => dispatch(removeLevel())}
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
            ) : (
              <></>
            )}
            {conditions.role != "" ? (
              <Chip
                label={conditions.role}
                sx={{
                  color: "#72a19e",
                  backgroundColor: "#eff6f6",
                  fontSize: "0.5rem",
                  height: "20px",
                  borderRadius: "5px",
                  padding: "0",
                }}
                onDelete={() => dispatch(removeRole())}
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
            ) : (
              <></>
            )}
            {conditions.languages != "" ? (
              <>
                {conditions.languages.map((language, i) => (
                  <Chip
                    key={i}
                    label={language}
                    sx={{
                      color: "#72a19e",
                      backgroundColor: "#eff6f6",
                      fontSize: "0.5rem",
                      height: "20px",
                      borderRadius: "5px",
                      padding: "0",
                    }}
                    onDelete={() => dispatch(removeLanguages(i))}
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
              </>
            ) : (
              <></>
            )}
            {conditions.tools != "" ? (
              <>
                {conditions.tools.map((tool, index) => (
                  <Chip
                    key={index}
                    label={tool}
                    sx={{
                      color: "#72a19e",
                      backgroundColor: "#eff6f6",
                      fontSize: "0.5rem",
                      height: "20px",
                      borderRadius: "5px",
                      padding: "0",
                    }}
                    onDelete={() => dispatch(removeTools(index))}
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
              </>
            ) : (
              <></>
            )}
          </Stack>
          <Stack>
            <Button
              onClick={() => dispatch(removeAllConditions())}
              sx={{ textTransform: "capitalize", color: "#9fa4a4" }}
              variant="text"
              color="primary"
            >
              Clear
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Stack mb={4}></Stack>
      )}
    </>
  );
};

export default FilterBar;
