'use strict';

const mongoose = require('../config/db');
const Product = require('../model/productModel');
const faker = require('faker');
const logger = require('../config/winston');

exports.plugin = {
    pkg: require('../package.json'),
    register: async function (server) {

        server.route({
            method: 'GET',
            path: '/status',
            handler: function (request, h) {
                const connectionState = mongoose.connection.readyState;
                logger.info('Check for connection state');
                if (connectionState === 1) {
                    return h.response({
                        'response': 'DB status is connected'
                    }).code(200);
                }
                return h.response({
                    'response': 'DB status is disconnected'
                }).code(500);
            }
        });

        server.route({
            method: 'POST',
            path: '/data',
            handler: function (request, h) {
                logger.info('Prepare to generate random data');
                const product = new Product({
                    productId: faker.random.uuid(),
                    name: faker.random.word(2),
                    description: faker.random.words(7),
                    service: {
                        serviceId: faker.random.uuid(),
                        serviceName: faker.random.word(),
                        serviceType: faker.random.word()
                    },
                    quantity: faker.random.number()
                });
                logger.info('Prepare to save data in db');
                product.save(function (error, product) {
                    if (error) {
                        return h.response(error).code(500);
                    }
                    return h.response(product).code(201);
                });
                return h.response(product).code(201);
            }
        });

        server.route({
            method: 'GET',
            path: '/aggregationtime',
            handler: async function (request, h) {
                logger.info('Calculate execution time');
                let fromDate = new Date();
                await getDataFromDb();
                let toDate = new Date() - fromDate;
                logger.info('Execution time is ' + toDate + ' ms');
                if (toDate) {
                    return h.response({
                        "executionTime": toDate
                    }).code(200);
                }
                return h.response({
                    "executionTime": toDate
                }).code(500);
            }
        });

        //
        async function getDataFromDb() {
            let products = Product.aggregate([{
                    $match: {
                        quantity: {
                            $gt: 10000
                        }
                    }
                },
                {
                    $group: {
                        _id: '$name'
                    }
                }
            ]);
            return products;
        }
    }
};