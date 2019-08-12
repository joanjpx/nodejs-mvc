const express = require('express');
const router = express.Router();
const TvShowsController = require('controller/tvshows');

//routes
router.get('/',TvShowsController.index);
router.get('/:id',TvShowsController.show);
router.get('/:id/edit',TvShowsController.edit);
router.get('/create',TvShowsController.create);
router.post('/',TvShowsController.store);
router.patch('/:id',TvShowsController.update);
router.delete('/:id',TvShowsController.delete);

module.exports = router;