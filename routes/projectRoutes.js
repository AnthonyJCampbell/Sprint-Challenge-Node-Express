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

routes.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  Projects.get(id)
    .then(data => {
      if (!data) {
        res.status(404).json({ 
          message: "The Project with the specified ID does not exist." 
        })
      } else {
        res.status(200).json(data);
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The Project information could not be retrieved."
      })
    })
})



module.exports = routes;
