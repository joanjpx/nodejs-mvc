// CONTROLLER
//User Service
	const UserService = require('service/User.service');
//User Model
	//const User = require('models/users');

exports.authenticate = (req, res, next) => {

}

exports.register = (req, res, next) => {
    
}

exports.getAll = (req,res,next) => {

	
}

exports.All = (req, res, next) => {
	
	UserService.getAll()
	.then(users => res.json(users))
}

exports.getCurrent = (req, res, next) => {
    
}

exports.getById = (req, res, next) => {

	let id = req.params.id;
	UserService.getById(id)
	.then(user => res.json(user))
}

exports.update = (req, res, next) => {
    
}

exports._delete = (req, res, next) => {
    
}