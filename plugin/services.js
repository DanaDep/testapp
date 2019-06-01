'use strict';

const mongoose = require('../config/db');
const Product = require('../model/productModel');
const faker = require('faker');

exports.plugin = {
    pkg: require('../package.json'),
    register: async function (server, options) {

        server.route({
            method: 'GET',
            path: '/status',
            handler: function (request, h) {
                const connectionState = mongoose.connection.readyState;
                if (connectionState === 1) {
                    return h.response({
                        'response': 'DB status is connected'
                    }).code(200);
                }
                //TODO: find a more suitable status code
                return h.response({
                    'response': 'DB status is disconnected'
                }).code(500);
            }
        });

        server.route({
            method: 'POST',
            path: '/data',
            handler: function (request, h) {
                const product = new Product({
                    productId: faker.random.uuid(),
                    name: faker.random.word(2),
                    description: faker.random.words(7),
                    service: {
                        serviceId: faker.random.uuid(),
                        serviceName: faker.random.word(),
                        serviceType: faker.random.word()
                    }
                });
                product.save(function (error, product) {
                    if (error) {
                        return h.response(error).code(500);
                    }
                    return h.response(product).code(201);
                });
                return h.response(product).code(201);
            }
        });
    }
};