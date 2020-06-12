const { Tutorial, Sequelize } = require('../models');

const Op = Sequelize.Op;

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

exports.find = (req, res) => {
  const { title } = req.query;

  Tutorial.findAll({ where: { title: { [Op.like]: `%${title}%`} } })
    .then((tutorials) => {
      if (tutorials.length === 0) {
        res.send({ message: 'Unable to find tutorials try again' });
      }

      res.send(tutorials);
    })
    .catch((err) => res.status(500).send({ message: err }));
};