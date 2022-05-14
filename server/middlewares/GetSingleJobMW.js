const JobModel = require("../models/jobs");

const getSingleJob = async (req, res, next) => {
  let job;
  try {
    job = await JobModel.findById(req.params.id);
    if (job == null) {
      return res.status(404).send("Can not find this job!");
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
  res.job = job;
  next();
};


module.exports = {getSingleJob};
