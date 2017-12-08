var express = require('express');
var router = express.Router();

import { recipes } from './recipes';

router.get('/', function(req, res, next) {
  const coffees = JSON.parse(recipes);
  res.json(200, coffees.recipes.map((coffee) => coffee.name));
});

router.get('/mocha', function(req, res, next) {
  res.send('respond with a recipe to mocha');
});

module.exports = router;
