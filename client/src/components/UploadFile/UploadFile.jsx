import { useState, useEffect } from "react";
import { Box } from "@mui/material";
const UploadFile = () => {
  const [images, setImages] = useState([]);
  const [imagesUrl, setImageUrl] = useState([]);

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

  const handleImages = (e) => {
    setImages([...e.target.files]);
  };
  return (
    <>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImages}
      ></input>
      {imagesUrl.map((imageUrl,index) => (
        <Box key = {index} >
            <img  src={imageUrl} />
        </Box>
      ))}
    </>
  );
};

export default UploadFile;
