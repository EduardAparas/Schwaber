const express = require('express');

const login = require('../controllers/auth/login.js');
const check = require('../controllers/auth/check.js');
const router = express.Router();

router.post('/login', login);
router.get('/check', check);


module.exports = router;