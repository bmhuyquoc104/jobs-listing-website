const express = require("express");
const router = express.Router();
const {getSingleJob} = require('../middlewares/GetSingleJobMW');
const {upload} = require ("../middlewares/UploadImage")


const {
  getAllJobs,
  getJob,
  addJob,
  deleteJob,
  findByLevelRole,
} = require("../controllers/Jobs");

// Routes for jobs
router.route("/").get(getAllJobs);
router.route("/query").post(findByLevelRole);
router.route("/:id").get(getSingleJob,getJob).delete(getSingleJob,deleteJob);

router.post('/image', upload.single('profileImg'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host')
  res.json({})
});

router.post('/', upload.single('image'), addJob);

module.exports = router;
