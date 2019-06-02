'use strict';

const Hapi = require('@hapi/hapi');
require('dotenv').config();
const logger = require('./config/winston');

const init = async () => {

    const server = Hapi.server({
        port: process.env.APP_PORT,
        host: process.env.APP_HOST
    });

    await server.start();
    logger.info('Server running on '+ server.info.uri);
    await server.register(require('./plugin/services'));
};

process.on('unhandledRejection', (err) => {

    logger.error(err);
    process.exit(1);
});

init();