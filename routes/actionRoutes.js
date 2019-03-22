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


module.exports = routes;
