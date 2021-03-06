const express = require('express');
const tutorial = require('../controllers/tutorial');

const router = express.Router();

const tutorialRouter = (app) => {
  router.post('/', tutorial.create);

  router.get('/', tutorial.find);

  router.get('/published', tutorial.findPublished);

  router.get('/:id', tutorial.findOne);

  router.put('/:id', tutorial.update);

  router.delete('/:id', tutorial.delete);

  router.delete('/', tutorial.deleteAll);

  app.use('/api/tutorials', router);
};

module.exports = tutorialRouter;