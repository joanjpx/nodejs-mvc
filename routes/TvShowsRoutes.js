const express = require('express');
const router = express.Router();
const TvShowsController = require('controller/tvshows');

// routes
router.get('/',TvShowsController.index);

module.exports = router;