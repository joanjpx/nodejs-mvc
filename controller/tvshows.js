exports.index = function(req, res) 
{
    res.status(200).jsonp("Index 1");
};

exports.show = function(req, res)
{
	let id =req.params.id;
};

exports.create = function(req, res) 
{
	res.status(200).jsonp(req.params);
	console.log('CREATE /');
};

exports.store = function(req, res) 
{
	res.status(200).jsonp(req.params);
	console.log('STORE /');
};

exports.edit = function(req, res) 
{
	let id = req.params.id;
	console.log('EDIT /'+id+'/edit');
};

exports.update = function(req, res) {
	let id = req.params.id;
	console.log('UPDATE /tvshow/' + id)
};

exports.delete = function(req, res)
{
	let id = req.params.id;
	let query = {"_id" : id};
    console.log('DELETE /tvshow/' + id);
};