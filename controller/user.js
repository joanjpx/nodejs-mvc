//User Model
const User = require('models/users');

exports.index = function(req, res) 
{
	User.find(function(err, users) {
		if(err) res.send(500, err.message);
			//console.log('GET /tvshows')
			res.status(200).jsonp(users);
	});
    //res.status(200).jsonp("/Index");
};