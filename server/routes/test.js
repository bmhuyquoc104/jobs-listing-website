let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    router = express.Router();
const DIR = './public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, Date.now() + '-' + fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

const Job = require('../models/jobs');
router.post('/', upload.single('logo'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const job = new Job({
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
    console.log("job:"+ job);
    job.save().then(result => {
        res.status(201).send(job);
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})

module.exports = router;