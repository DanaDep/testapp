'use strict';

exports.plugin = {
    pkg: require('../package.json'),
    register: async function(server, options){
        server.route({
            method: 'GET',
            path: '/test',
            handler: function(request, h){
                return 'hello world';
            }
        });

        server.route({
            method: 'POST',
            path: '/test',
            handler: function(request, h){
                return 'It works';
            }
        });

        //await someAsyncMethods();
    }
};