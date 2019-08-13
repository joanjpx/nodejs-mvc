const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('models/users');

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    _delete
};

async function authenticate({ username, password }) {
    //auth
}

async function getAll(req,res) {
    return await User.find().select(["nombre","apellido","user"]);
}

async function getById(id) {
    //get by id
    return await User.findById(id).select()
}

async function create(userParam) {
    // validate
}

async function update(id, userParam) {
    //update
}

async function _delete(id) {
    //_delete
}