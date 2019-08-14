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
    jwt             = require('jsonwebtoken');
    mongoose        = require('mongoose');

//const jwt = require('_helpers/jwt');
  const errorHandler = require('_helpers/error-handler');

// Setup Connection to DB
  mongoose.connect('mongodb://'+process.env.DB_HOST+process.env.DB_DATABASE,{ useNewUrlParser: true });

// Middlewares
  const JWTauth = require('middleware/JWT.js');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(methodOverride());
  app.use(router);
  app.use(cors());

// API routes
  router.get('/',function(req, res)
  {
    res.status(200).json({message:"Hello, API Works!"});
  });
  
  router.post('/api/login',function(req, res)
  {
    const user = {id:3};

    const token = jwt.sign({user},process.env.JWT_TOKEN);

    res.status(200).json({token:token});
  });

  app.get('/api/protected',JWTauth.validate,(req,res) => {
    jwt.verify(req.token,process.env.JWT_TOKEN,(err,data) => {
      if (err) {
        res.status(403);
      }else{
        res.status(200).json({message:'successful logged',data});
      }
    });
  });

//APP ROUTES
    app.use('/auth',require('routes/AuthRoutes'));
    app.use('/tvshows',require('routes/TvShowsRoutes'));

// global error handler
    app.use(errorHandler);

// Start server
    app.listen(process.env.PORT, function(){
        console.log("Node server running on http://localhost:"+process.env.PORT);
    });
