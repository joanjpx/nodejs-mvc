const TVShow = require('models/users');

exports.index = function(req, res) 
{
	TVShow.find(function(err, tvshows) {
		if(err) res.send(500, err.message);
			//console.log('GET /tvshows')
			res.status(200).jsonp(tvshows);
	});
    //res.status(200).jsonp("/Index");
};