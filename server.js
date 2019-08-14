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
  //const auth = require('middleware/JWT.js')
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

  app.get('/api/protected',middlewareJWT,(req,res) => {
    jwt.verify(req.token,process.env.JWT_TOKEN,(err,data) => {
      if (err) {
        res.status(403);
      }else{
        res.status(200).json({message:'successful logged',data});
      }
    });
  });

  function middlewareJWT(req,res,next){
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    }else{
      res.status(403).json({Message:"Not Allowed"});
    }
}
//APP ROUTES
    app.use('/tvshows',require('routes/TvShowsRoutes'));
    app.use('/auth',require('routes/AuthRoutes'));

// global error handler
    app.use(errorHandler);

// Start server
    app.listen(process.env.PORT, function(){
        console.log("Node server running on http://localhost:"+process.env.PORT);
    });
