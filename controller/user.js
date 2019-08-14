// CONTROLLER
//User Service
	const UserService = require('service/User.service');
	const jwt = require('jsonwebtoken');
//User Model
	//const User = require('models/users');
exports.login = (req, res) => {
	
	const user = {id:3};

	const token = jwt.sign({user},process.env.JWT_TOKEN);

	res.status(200).json({token:token});
};
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