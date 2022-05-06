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

const byTools = (inputTools) => {
  return inputTools.length > 1
    ? { $all: inputTools }
    : inputTools.length == 0
    ? []
    : { $in: inputTools };
};

const byLanguages = (inputLanguages) => {
  return inputLanguages.length > 1
    ? { $all: inputLanguages }
    : { $in: inputLanguages };
};

// Create function for model
JobModel.statics.findByLevelRoleToolLanguage = function (
  level,
  role,
  tools,
  languages
) {
  console.log("Role: " + role);
  console.log("level: " + level);
  console.log("tool: " + tools);
  console.log("language: " + languages);

  // if (role != "" && level != ""){
  //   return this.find({ $and:[ {level: `${level}` },{ role: `${role}`} ]});
  // }
  // return this.find({ $or:[ {level: `${level}` },{ role: `${role}`} ]});

  if (role != "" && languages != "" && level != "") {
    return this.find({
      $and: [
        { tools: byTools(tools) },
        { languages: byLanguages(languages) },
        { level: `${level}` },
        { role: `${role}` },
      ],
    });
  }
  return this.find({
    $or: [
      { tools: byTools(tools) },
      { languages: byLanguages(languages) },
      { level: `${level}` },
      { role: `${role}` },
    ],
  });
};

// Function to query by level
JobModel.query.byLevel = function (level) {
  return this.where({ level: `${level}` });
};

// Function to query by role
JobModel.query.byRole = function (role) {
  return this.where({ role: `${role}` });
};

module.exports = mongoose.model("jobs", JobModel);
