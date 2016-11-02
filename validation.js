'use strict';

const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: function (request, reply) {
        reply('Hello ' + request.params.name + '!');
    },
    config: {
        validate: {
            params: {
                name: Joi.string().min(3).max(10)
            }
        }
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});