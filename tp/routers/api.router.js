const router = require('express').Router();
const apiController = require('../controllers/api.controller.js');

// API Router
router.get('/', apiController.root);

router.get('/search', apiController.search);

router.get('/items/:id', apiController.items);

module.exports = router;
