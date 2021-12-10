// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const recipeRouter = require('./recipe.js');
const commentsRouter = require('./comments.js');
const likesRouter = require('./like.js');
const grinderRouter= require('./grinder.js');
const reviewRouter = require('./review.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/recipe', recipeRouter);

router.use('/comments',commentsRouter);

router.use('/like', likesRouter);

router.use('/grinder', grinderRouter);

router.use('review', reviewRouter);

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
  });

module.exports = router;
