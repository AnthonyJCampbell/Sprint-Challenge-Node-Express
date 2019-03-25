const express = require('express');
const actionRoutes = require('./routes/actionRoutes');
const projectRoutes = require('./routes/projectRoutes');
const morgan = require('morgan');

const server = express();

server.use(actionRoutes);
server.use(projectRoutes);
server.use(morgan);

module.exports = server;