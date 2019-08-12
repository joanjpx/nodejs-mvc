require('rootpath')();

var express         = require("express"),
    app             = express(),
    fs              = require('fs'),
    cors            = require('cors'),
    morgan          = require('morgan'),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    router          = express.Router(),
    mongoose        = require('mongoose');

    //const jwt = require('_helpers/jwt');
    const errorHandler = require('_helpers/error-handler');

// Setup Connection to DB
  var mongoDB = 'mongodb://127.0.0.1/tvshows';
  mongoose.connect(mongoDB);

// Middlewares
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(methodOverride());
  app.use(router);
  app.use(cors());

  //Controllers
  var TvShowsController = require('controller/tvshows');

// API routes
  router.get('/',jwt(),function(req, res) {
    res.status(200).jsonp("Hello world!");
  });
  //AUTH ROUTES
  app.use('/users',require('./users/users.controller'));

  //SHOWS ROUTES
  router.get('/tvshows',TvShowsController.index);
  router.get('/tvshows/create',TvShowsController.create);
  router.get('/tvshows/:id',TvShowsController.show);
  router.post('/tvshows',TvShowsController.store);
  router.get('/tvshows/:id/edit',TvShowsController.edit);
  router.put('/tvshows/:id',TvShowsController.update);
  router.delete('/tvshows/:id',TvShowsController.delete);

    // global error handler
    app.use(errorHandler);
// Start server
app.listen(6661, function() {
  console.log("Node server running on http://localhost:6661");
});
