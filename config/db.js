const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL, 
    { useNewUrlParser: true }
);

mongoose.connection.on('connected', () => {
    console.log('App is connected to ' , process.env.DB_URL);
});

mongoose.connection.on('error', err => {
    console.log('Error while connecting to MongoDB', err);
});