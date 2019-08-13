const express = require('express');
const router = express.Router();

//Controllers
const userController = require('controller/user');
const User = require('controller/user');

//Routes
router.post('/authenticate', User.authenticate);
router.post('/register', User.register);
router.get('/', User.All);
router.get('/current', User.getCurrent);
router.get('/:id', User.getById);
router.put('/:id', User.update);
router.delete('/:id', User._delete);

module.exports = router;

