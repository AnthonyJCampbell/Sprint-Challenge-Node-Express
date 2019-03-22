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

module.exports = routes;
