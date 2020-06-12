const express = require('express');
const tutorial = require('../controllers/tutorial');

const router = express.Router();

const tutorialRouter = (app) => {
  router.post('/', tutorial.create);

  router.get('/', tutorial.find);

  router.get('/published', tutorial.findPublished);

  router.get('/:id', tutorial.findOne);

  app.use('/api/tutorials', router);
};

module.exports = tutorialRouter;