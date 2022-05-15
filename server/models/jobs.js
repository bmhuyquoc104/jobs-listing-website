const mongoose = require("mongoose");

// Create job model
const JobModel = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  company: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
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
},{
  collection:"jobs"
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


  // Case 1
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

  // Case 2
  if (role == "" && languages == "" && level == "" && tools == "" ) {
    return this.find();
  }

  // Case 3
  if (role == "" && languages != "" && level != "") {
    return this.find({
      $and: [
        { tools: byTools(tools) },
        { languages: byLanguages(languages) },
        { level: `${level}` },
      ],
    });
  }

  // Case 4
  if (role == "" && languages == "" && level != "") {
    return this.find({
      $or: [{ tools: byTools(tools) }, { level: `${level}` }],
    });
  }

  // Case 5
  if (role != "" && languages == "" && level == "") {
    return this.find({
      $or: [{ tools: byTools(tools) }, { role: `${role}` }],
    });
  }

  // Case 6
  if (role != "" && languages == "" && level != "") {
    return this.find({
      $and: [
        { tools: byTools(tools) },
        { role: `${role}` },
        { level: `${level}` },
      ],
    });
  }

  // Case 7
  if (role != "" && languages != "" && level == "") {
    return this.find({
      $and: [
        { tools: byTools(tools) },
        { role: `${role}` },
        { languages: byLanguages(languages) },
      ],
    });
  }

  // Case 8
  if (role == "" && languages != "" && level == "") {
    return this.find({
      $or: [{ tools: byTools(tools) }, { languages: byLanguages(languages) }],
    });
  }

  // Case 9
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
