const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;