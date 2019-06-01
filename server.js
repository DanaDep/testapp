'use strict';

const Hapi = require('@hapi/hapi');
require('dotenv').config();
const db = require('./config/db');

const init = async () => {

    const server = Hapi.server({
        port: process.env.APP_PORT,
        host: process.env.APP_HOST
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();