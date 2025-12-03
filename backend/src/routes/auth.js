const express = require('express');

const login = require('../controllers/auth/login.js');
const test = require('../controllers/auth/test.js');
const router = express.Router();

router.post('/login', login);
router.get('/test', test);


module.exports = router;