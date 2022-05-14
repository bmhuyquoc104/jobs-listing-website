const multer = require("multer");
const path = require("path");
const DIR = "./public/";

// Function to create the storage when user upload the file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase.split(" ").join("-");
    cb(null, Date().now + "-" + fileName);
  },
});

// Middleware function to upload image before handling post
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg files are allowed"));
    }
  },
});

module.exports = { upload };
