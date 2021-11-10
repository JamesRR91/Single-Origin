// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const recipeRouter = require('./recipe.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/recipe', recipeRouter);

module.exports = router;
