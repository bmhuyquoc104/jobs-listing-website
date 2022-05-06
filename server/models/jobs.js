const mongoose = require("mongoose");

// Create job model
const JobModel = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  new: Boolean,
  featured: Boolean,
  position: String,
  role: String,
  level: String,
  postedAt: {
    default: "1 minute ago",
    type: String,
  },
  contract: String,
  location: String,
  languages: [String],
  tools: [String],
});

// Create function for model
JobModel.statics.findByLevelRoleToolLanguage = function (
  level,
  role,
  tool,
  language
) {
  console.log(role);
  return this.find({ level: `${level}` }).find({ role: `${role}` });
};

// Function to query by level
JobModel.query.byLevel = function (level) {
  return this.where({ level: `${level}` });
};

// Function to query by role
JobModel.query.byRole = function (role) {
  return this.where({ role: `${role}` });
};

// Function to query by tools
JobModel.query.byTools = function (inputTools) {
  console.log(inputTools);
  return inputTools.length > 1
    ? this.find({ tools: { $all: inputTools } })
    : this.find({ tools: { $in: inputTools } });
};

// Function to query by languages
JobModel.query.byLanguages = function (inputLanguages) {
  console.log(inputLanguages);
  return inputLanguages.length > 1
    ? this.find({ languages: { $all: inputLanguages } })
    : this.find({ languages: { $in: inputLanguages } });
};
module.exports = mongoose.model("jobs", JobModel);
