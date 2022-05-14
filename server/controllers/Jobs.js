const JobModel = require("../models/jobs");
const getAllJobs = async (req, res) => {
  try {
    const jobs = await JobModel.find();
    if (jobs == null) {
      res.status(404).send("There are no jobs at the moment");
    } else {
      res.status(200).send(jobs);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const addJob = async (req, res) => {
  try {
    const url = req.protocol + '://' + req.get('host')
    const job = new JobModel({
      _id: new mongoose.Types.ObjectId(),
      company: req.body.company,
      logo: url + '/public/' + req.file.filename ,
      new: req.body.new,
      featured: req.body.featured,
      position: req.body.position,
      role: req.body.role,
      level: req.body.level,
      postedAt: req.body.postedAt,
      contract: req.body.contract,
      location: req.body.location,
      languages: req.body.languages,
      tools: req.body.tools,
  });
    if (job == null) {
      res.status(404).send("Please enter a job");
    } else {
      const newJob = new JobModel(job);
      await newJob.save();
      res.status(201).send(newJob);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    await res.job.remove();
    res.status(204).send("Successfully deleted");
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getJob = async (req, res) => {
  try {
    res.status(200).send(res.job);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findByLevelRole = async (req, res) => {
  try {
    const params = req.body;
 
    if (params == null) {
      res.status(404).send("Please enter a parameter");
    }

    const jobs = await JobModel.findByLevelRoleToolLanguage(params.level,params.role,params.tools,params.languages);
    res.status(200).send(jobs);
   
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getJob, deleteJob, addJob, getAllJobs, findByLevelRole };
