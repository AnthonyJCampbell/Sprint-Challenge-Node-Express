const express = require('express');
const routes = express.Router();

const Action = require('../data/helpers/actionModel');

routes.use(express.json());

routes.get('/', (req, res) => {
  console.log('actions working yo!')
})

module.exports = routes;
