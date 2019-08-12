const express = require('express');
const router = express.Router();
const auth = require('controller/user');

router.get('/index',auth.index);
//router.post('/signup', auth.emailSignup);
//router.post('/login', auth.emailLogin);

module.exports = router;