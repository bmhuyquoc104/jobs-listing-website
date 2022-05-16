const mongoose = require("mongoose");
const TestModal = require("../models/test");

const testUpload = async (req,res,next) => {
    try {
        const url = req.protocol + "://" + req.get("host");
        const test = new TestModal({
            name:req.body.name,
            image:url + "/" + req.file.filename
        })
        if (test == null) {
            res.status(404).send("Please don't leave this blank")
        }
        else{
            await test.save();
            res.status(200).send(test);
        }
    } catch (error) {
        res.status(500).send({message: error.message});        
    }
}

module.exports = {testUpload};