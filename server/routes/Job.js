const express = require("express");
const app = express();
const router = express.Router();
const {getSingleJob} = require('../middlewares/GetSingleJobMW');

const {
  getAllJobs,
  getJob,
  addJob,
  deleteJob,
  findByLevelRole,
} = require("../controllers/Jobs");

// Routes for jobs
router.route("/").get(getAllJobs).post(addJob);
router.route("/query").post(findByLevelRole);
router.route("/:id").get(getSingleJob,getJob).delete(getSingleJob,deleteJob);

module.exports = router;
