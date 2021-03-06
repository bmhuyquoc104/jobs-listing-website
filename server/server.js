// Import libraries
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const JobRoute = require('./routes/Job');
// Add library to app
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

const PORT = process.env.PORT || 8000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl,{ useNewUrlParser: true });

app.use(express.static('public'));

// Run the server
app.listen(PORT,() => {
    console.log(`Server is running at ${PORT}`);
});

// Render the content
app.get('/',(req,res) => {
    res.status(200).send('This is backend')
});

// Render the route for jobs
app.use('/jobs',JobRoute);

