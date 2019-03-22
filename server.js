const express = require('express');
const routes = require('./routes');
const morgan = require('morgan');

const server = express();

server.use(routes);
server.use(morgan);

module.exports = server;