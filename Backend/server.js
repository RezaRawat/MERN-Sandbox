//* Import Express framework, which simplifies creating a Web Server and handling HTTP Requests/Responses
const express = require('express'); // Node.js web application framework

//* Imports Mongoose, an Object Data Modeling (ODM) library for MongoDB & Node.js
// Simplifies interactions with MongoDB by providing schema validation, query building etc.
const mongoose = require('mongoose');

//* Imports the cors middleware to enable Cross-Origin Resource Sharing (CORS)
// CORS is a mechanism that allows resources on a web server to be requested from another domain outside the domain which the resource originates from
const cors = require('cors');

//* dotenv is a zero-dependency module that Loads environment variables from a .env file into process.env
require('dotenv').config();

// ! initialize the Express application
const app = express();

//? Middleware
app.use(express.json());
app.use(cors());

//? Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, //* fetches the MONGO_URI environment variable from .env file
{
    useNewUrlParser: true, //! uses the new URL parser to avoid deprecation warnings
    useUnifiedTopology: true, //! opts into using the MongoDb driver's new connection management engine
})
.then(() => console.log('-- MongoDB Connected --'))
.catch(err => console.log(err));

//? Define Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Expense Tracker Backend!');
});

//! Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});