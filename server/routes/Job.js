const express = require("express");
const app = express();
const router = express.Router();
const {getSingleJob} = require('../middlewares/GetSingleJobMW');

const {
  getAllJobs,
  getJob,
  addJob,
  deleteJob,
} = require("../controllers/Jobs");

// Routes for jobs
router.route("/").get(getAllJobs).post(addJob);
router.route("/:id").get(getSingleJob,getJob).delete(getSingleJob,deleteJob);

module.exports = router;
