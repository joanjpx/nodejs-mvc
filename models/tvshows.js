var mongoose = require('mongoose');

var tvshowSchema = new mongoose.Schema({
    title:    { type: String },
    year:     { type: Number },
    country:  { type: String },
    poster:   { type: String },
    seasons:  { type: Number }
  });

var TVShow = mongoose.model('TVshows',tvshowSchema);

exports = module.exports = TVShow;