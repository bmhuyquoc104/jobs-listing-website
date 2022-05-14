const express = require("express");
const app = express();
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
router.route("/").get(getAllJobs).post(upload.single("image"),addJob);
router.route("/query").post(findByLevelRole);
router.route("/:id").get(getSingleJob,getJob).delete(getSingleJob,deleteJob);

router.post('/user-profile', upload.single('profileImg'), (req, res, next) => {
  const url = req.protocol + '://' + req.get('host')
  const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      profileImg: url + '/public/' + req.file.filename
  });
  user.save().then(result => {
      res.status(201).json({
          message: "User registered successfully!",
          userCreated: {
              _id: result._id,
              profileImg: result.profileImg
          }
      })
  }).catch(err => {
      console.log(err),
          res.status(500).json({
              error: err
          });
  })
})

module.exports = router;
