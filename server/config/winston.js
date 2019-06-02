'use strict';
require('dotenv').config();
const {
    createLogger,
    format,
    transports
} = require('winston');
const {
    combine,
    timestamp,
    printf
} = format;
const myFormat = printf(info => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
});

const logger = createLogger({
    format: combine(
        timestamp(),
        myFormat
    ),
    transports: [new transports.Console(), new transports.File({
        filename: process.env.LOGS_FIILE
    })]
});

// by default, winston will exit after logging an uncaughtException
logger.exitOnError = false;

module.exports = logger;