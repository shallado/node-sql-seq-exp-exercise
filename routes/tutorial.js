const express = require('express');
const tutorial = require('../controllers/tutorial');

const router = express.Router();

const tutorialRouter = (app) => {
  router.post('/', tutorial.create);

  app.use('/api/tutorials', router);
};

module.exports = tutorialRouter;