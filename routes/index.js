var express = require('express');
var router = express.Router();

router.get('/health', function(req, res, next) {
  res.status('200').send('Knock-knock-knockin on 3000 door');
});

module.exports = router;
