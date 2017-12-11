var express = require('express');
var router = express.Router();

import { coffees } from './coffees';

router.get('/', function(req, res, next) {
  const coffeesRecipes = JSON.parse(coffees);
  res.json(200, coffeesRecipes.recipes.map((coffee) => coffee.name));
});

router.get('/mocha', function(req, res, next) {
  res.send('respond with a recipe to mocha');
});

module.exports = router;
