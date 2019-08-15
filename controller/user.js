// CONTROLLER
//DevDependencies
	const Faker = require('faker');
//User Service
	const UserService = require('service/User.service');
	const jwt = require('jsonwebtoken');
//User Model
	const User = require('models/users');

exports.login = (req, res) => {
	
	const user = {id:3};

	const token = jwt.sign({user},process.env.JWT_TOKEN);

	res.status(200).json({token:token});
};
exports.authenticate = (req, res, next) => {

}

exports.register = (req, res, next) => {

	//console.log(req.body);
	for (let index = 0; index < 10000; index++) {
		newUser = new User({
			nombre:  Faker.name.firstName(),
			apellido:Faker.name.lastName(),
			user:    Faker.internet.userName(),
			pass:    Faker.internet.password()
		});
		newUser.save();
	}
	res.status(200).json(newUser);
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