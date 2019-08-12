require('rootpath')();
const dotenv = require('dotenv');
dotenv.config(); // Sets up dotenv as soon as our application starts

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
mongoose.connect('mongodb://'+process.env.DB_HOST+process.env.DB_DATABASE,{ useNewUrlParser: true });

// Middlewares
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(methodOverride());
  app.use(router);
  app.use(cors());

// API routes
  router.get('/',function(req, res)
  {
    res.status(200).jsonp("Hello world!");
  });
  
//APP ROUTES
    app.use('/tvshows',require('routes/TvShowsRoutes'));
    app.use('/auth',require('routes/AuthRoutes'));

// global error handler
    app.use(errorHandler);

// Start server
    app.listen(process.env.PORT, function(){
        console.log("Node server running on http://localhost:"+process.env.PORT);
    });
