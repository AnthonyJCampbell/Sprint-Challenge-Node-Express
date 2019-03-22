const express = require('express');
const routes = express.Router();

const Project = require('../data/helpers/projectModel');

routes.use(express.json());

routes.get('/s', (req, res) => {
  console.log('projects are working yo!')
})

module.exports = routes;
