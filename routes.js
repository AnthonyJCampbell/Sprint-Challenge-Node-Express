const express = require('express');
const routes = express.Router();

const Action = require('./data/helpers/actionModel');
const Project = require('./data/helpers/projectModel');

routes.use(express.json());

routes.get('/', (req, res) => {
  console.log('its working yo!')
})

module.exports = routes;
