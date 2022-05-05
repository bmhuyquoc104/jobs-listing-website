const mongoose = require('mongoose');

const JobModel = new mongoose.Schema({
    company:{
        type: String,
        required:true,
    },
    logo:{
        type: String,
        required:true,
    },
    new:Boolean,
    featured:Boolean,
    position:String,
    role:String,
    level:String,
    postedAt:{
        default:"1 minute ago",
        type:String,
    },
    contract:String,
    location:String,
    languages:[String],
    tools:[String],

})

module.exports = mongoose.model('jobs',JobModel);