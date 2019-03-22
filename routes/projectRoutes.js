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

routes.post('/projects/', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    res.status(400).json({ 
      errorMessage: "Please provide a name and description for the project."
    })
  } else {
    Projects.insert(req.body)
      .then(data => {
        res.status(201).json({ ...data, name, description });
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while saving the project to the database"
        })
      })
  }
})


module.exports = routes;
