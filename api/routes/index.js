const router = require('express').Router();

const recipesRoute = require('./recipes');

router.use('/recipes', recipesRoute);

module.exports = router;
