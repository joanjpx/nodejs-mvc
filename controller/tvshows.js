var mongoose = require('mongoose');
var tvshowSchema = new mongoose.Schema({
    title:    { type: String },
    year:     { type: Number },
    country:  { type: String },
    poster:   { type: String },
    seasons:  { type: Number }
  });

var TVShow = mongoose.model('TVshows',tvshowSchema);

exports.index = function(req, res) 
{
	TVShow.find(function(err, tvshows) {
    if(err) res.send(500, err.message);

    console.log('GET /tvshows')
		res.status(200).jsonp(tvshows);
	});
};

exports.show = function(req, res)
{
	TVShow.findById(req.params.id, function(err, tvshow) {
    if(err) return res.send(500, err.message);

    console.log('GET /tvshow/' + req.params.id);
		res.status(200).jsonp(tvshow);
	});
};

exports.create = function(req, res) 
{
	res.status(200).jsonp('Create');
};

exports.store = function(req, res) 
{
	//res.send(req.params);
	var tvshow = new TVShow({
		title:    req.body.title,
		year: 	  req.body.year,
		country:  req.body.country,
		poster:   req.body.poster,
		seasons:  req.body.seasons
	});

	tvshow.save(function(err, tvshow)
	{
		if(err) return res.send(500, err.message);
    	
    res.status(200).jsonp(tvshow);
	
	});
};

exports.edit = function(req, res) 
{
	var id = req.params.id;
	res.status(200).jsonp('Edit: '+id);
};

exports.update = function(req, res) {
	//res.jsonp(req.body);
	TVShow.findById(req.params.id, function(err, tvshow) {
		tvshow.title   = req.body.title;
		tvshow.year    = req.body.year;
		tvshow.country = req.body.country;
		tvshow.poster  = req.body.poster;
		tvshow.seasons = req.body.seasons;
		tvshow.save(function(err) {
			if(err) return res.send(500, err.message);
      	res.status(200).jsonp(tvshow);
		});
	});
};

exports.delete = function(req, res)
{
	var id = req.params.id;
	let query = {"_id" : id};
	TVShow.deleteOne(query, function(err, tvshow) {
    if(err) return res.send(500, err.message);

    console.log('DELETE /tvshow/' + id);
		res.status(200).jsonp('Delete: '+id);
	});
	
};