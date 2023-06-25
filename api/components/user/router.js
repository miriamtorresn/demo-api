const express = require('express');
const response = require('../../../network/response');
const controller = require('./index');

const router = express.Router();

// Loads users data
router.get('/', async (req, res) => {
  const list = await controller.list();
  response.success(req, res, list, 200);
});

module.exports = router;
