// Import libraries
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();
const JobRoute = require('./routes/Job');
const ImageRoute = require ('./routes/image')
// Add library to app
app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use('/public', express.static('public'));
const PORT = 8000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl,{ useNewUrlParser: true });

// Run the server
app.listen(PORT,() => {
    console.log(`Server is running at ${PORT}`);
});

// Render the content
app.get('/',(req,res) => {
    res.status(200).send('This is backend')
});
app.use('/user',ImageRoute)

// Render the route for jobs
app.use('/jobs',JobRoute);
