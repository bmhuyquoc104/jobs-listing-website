import { useState } from "react";
import { Stack, Chip } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const FilterBar = () => {
  const [array, setArray] = useState([]);

  const handleDelete = () => {
    console.log("Delete the chip");
  };
  return (
    <>
    {/* If there are any items in filter arr -> display , else -> display none */}
      {array.length > 0 ? (
        <Stack
          width={{ xs: "85%", sm: "100%", md: "80%" }}
          alignItems="center"
          direction="row"
          spacing={1}
          p={2}
          mb={4}
          mt={-2}
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "0.2em",
            boxShadow: "0 2px rgba(0,0,0,0.2)",
            minHeight: "30px",
            flexWrap: "wrap",
          }}
        >
          <Chip
            label="Frontend"
            sx={{
              color: "#72a19e",
              backgroundColor: "#eff6f6",
              fontSize: "0.5rem",
              height: "20px",
              borderRadius: "5px",
              padding: "0",
            }}
            onDelete={handleDelete}
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
        </Stack>
      ) : (
        <Stack mb={4}></Stack>
      )}
    </>
  );
};

export default FilterBar;
