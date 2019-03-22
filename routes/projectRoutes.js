const express = require('express');
const routes = express.Router();

const Projects = require('../data/helpers/projectModel');

routes.use(express.json());

routes.get('/projects', (req, res) => {
  Projects.get()
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err => {
    res.status(500).json({ errorMessage: err})
  })
})

module.exports = routes;
