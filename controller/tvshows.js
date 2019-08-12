exports.index = function(req, res) 
{
    res.status(200).jsonp("/Index");
};

exports.show = function(req, res)
{
	let id =req.params.id;
	res.status(200).jsonp("/Show/"+id);
};

exports.create = function(req, res) 
{
	res.status(200).jsonp("/Create");
};

exports.store = function(req, res) 
{
	res.status(200).jsonp("/Store");
	console.log(req.body);
};

exports.edit = function(req, res) 
{
	let id = req.params.id;
	res.status(200).jsonp("/"+id+"/Edit");
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