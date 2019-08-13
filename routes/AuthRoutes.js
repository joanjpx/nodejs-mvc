const express = require('express');
const router = express.Router();

//Controllers
const userController = require('controller/user');
const Auth = require('controller/auth');

//Routes
router.get('/',userController.index);
router.post('/signup', Auth.emailSignup);
router.post('/login', Auth.emailLogin);

module.exports = router;