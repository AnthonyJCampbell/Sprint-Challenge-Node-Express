const express = require('express');
const routes = express.Router();

const Actions = require('../data/helpers/actionModel');

routes.use(express.json());

routes.get('/actions', (req, res) => {
  Actions.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: err})
    })
})

routes.get('/actions/:id', (req, res) => {
  const { id } = req.params;
  Actions.get(id)
    .then(data => {
      if (!data) {
        res.status(404).json({ 
          message: "The action with the specified ID does not exist." 
        })
      } else {
        res.status(200).json(data);
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The action information could not be retrieved."
      })
    })
})

routes.post('/actions/', (req, res) => {
  const { project_id, description, notes } = req.body;
  if (!project_id || !description || !notes) {
    res.status(400).json({ 
      errorMessage: "Please provide a description and notes and be sure to clarify to which project it should be added"
    })
  } else {
    Actions.insert(req.body)
      .then(data => {
        res.status(201).json({ ...data, project_id, description, notes });
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while saving the action to the project/database"
        })
      })
  }
})




routes.delete('/actions/:id', (req,res) => {
  const { id } = req.params;
  Actions.get(id)
    .then(data => {
      if (!data) {
        res.status({
          message: "The action with the specified ID does not exist."
        })
      } else {
        Actions.remove(id)
          .then(() => {
            res.status(200).json(data)
          })
          .catch(error => {
            res.status(500).json({ 
              error: "The action could not be removed" 
            })
          })
      }
    })
})

module.exports = routes;
