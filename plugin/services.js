'use strict';

const mongoose = require('../config/db');

exports.plugin = {
    pkg: require('../package.json'),
    register: async function(server, options){
        server.route({
            method: 'GET',
            path: '/status',
            handler: function(request, h){
                const connectionState = mongoose.connection.readyState; 
                if(connectionState === 1){
                    return h.response('DB status is connected').code(200);
                }
                //TODO: find a more suitable status code
                return h.response('DB status is disconnecting').code(500); 
            }
        });

        server.route({
            method: 'POST',
            path: '/test',
            handler: function(request, h){
                return 'It works';
            }
        });
    }
};