const express = require('express');
const router = express.Router();

/* GET cool listing. */
router.get('/', function(req, res, next) {
  res.send('You are so cool');
});

module.exports = router;
