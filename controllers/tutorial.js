const { Tutorial } = require('../models');

exports.create = (req, res) => {
  const { title, description, published } = req.body;
  const userInfo = {
    title,
    description,
    published
  };

  Tutorial.create(userInfo)
    .then((tutorial) => res.send({
      message: 'Successfully created tutorial',
      tutorial
    }))
    .catch((err) => {
      res.status(500).send({
        message: 'Unable to create tutorial',
        error: err
      });
    });
};