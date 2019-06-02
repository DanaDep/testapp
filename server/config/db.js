const mongoose = require('mongoose');
require('dotenv').config();
const logger = require('./winston');

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
    logger.info('App is connected to ' + process.env.DB_URL);
});

mongoose.connection.on('error', err => {
    logger.error('Error while connecting to MongoDB' + err);
});

module.exports = mongoose;