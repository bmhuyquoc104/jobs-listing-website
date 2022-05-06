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
    const job = req.body;
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
    console.log("tools: "+ params.tools);
    console.log("role:" +params.role);
    console.log("level: " + params.level);
    console.log("languages: " + params.languages);
    // if (params == null) {
    //   res.status(404).send("Please enter a parameter");
    // }

    const jobs = await JobModel.findByLevelRoleToolLanguage(params.level,params.role,params.tools,params.languages);
    console.log(jobs.length);
    res.status(200).send(jobs);
    // if (params.role == null) {
    //   const jobs = await JobModel.find().byLevel(params.level);
    //   console.log(jobs.length);
    //   res.status(200).send(jobs);
    // }
    // if (params.level == null) {
    //   const jobs = await JobModel.find().byRole(params.role);
    //   console.log(jobs.length);
    //   res.status(200).send(jobs);
    // }
    // if (params.tools != null) {
    //   const jobs = await JobModel.find().byTools(params.tools);
    //   console.log(jobs.length);
    //   res.status(200).send(jobs);
    // }

    // if (params.languages != null) {
    //     const jobs = await JobModel.find().byLanguages(params.languages);
    //     console.log(jobs.length);
    //     res.status(200).send(jobs);
    //   }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getJob, deleteJob, addJob, getAllJobs, findByLevelRole };
