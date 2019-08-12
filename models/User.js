var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    name:        { type: String },
    lastName:    { type: String },
    username:    { type: String },
    password:    { type: String }
  });

var User = mongoose.model('user',UsersSchema);

exports = module.exports = User;