const express = require('express');
const keyController = require('../controllers/keyController');
const router = express.Router();

router.get('/manage', keyController.manageKeys);
router.post('/add', keyController.addKey);

module.exports = router;
