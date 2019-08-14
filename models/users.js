var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    nombre:  { type: String },
    apellido:{ type: String },
    user:    { type: String },
    pass:    { type: String }
  });
  
  UsersSchema.set('toJSON', { virtuals: true });

var User = mongoose.model('usuarios',UsersSchema);

exports = module.exports = User;