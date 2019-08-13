var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    nombre:  { type: String },
    apellido:{ type: String },
    user:    { type: String },
    pass:    { type: String }
  });

var User = mongoose.model('usuarios',UsersSchema);

exports = module.exports = User;