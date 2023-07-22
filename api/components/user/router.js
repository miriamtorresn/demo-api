const express = require('express');

const controller = require('./index');

const router = express.Router();

// Loads users data
router.get('/', async (req, res) => (await controller).list(req, res));
router.get('/:id', async (req, res) => (await controller).get(req, res));
router.delete('/:id', async (req, res) => (await controller).remove(req, res));
router.post('/', async (req, res) => (await controller).post(req, res));
router.put('/:id', async (req, res) => (await controller).put(req, res));

module.exports = router;
