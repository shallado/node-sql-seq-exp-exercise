const { Sequelize, DataTypes} = require('sequelize');
const tutorialModel = require('./tutorial');

const { 
  database,
  username,
  password,
  host,
  dialect
} = require('../config/db');

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
})

sequelize
  .authenticate()
  .then(() => {
    const Tutorial = tutorialModel(sequelize, DataTypes);

    Tutorial.sync()
      .then(() => {
        console.log({ 
          message: 'Successfully synced model of table to database' 
        });
      })
      .catch((err) => {
        console.log({
          message: 'Unable to sync model of table to database',
          error: err
        })
      });

    console.log({ message: "Successfully connected to database" });
  })
  .catch((err) =>
    console.log({
      message: "Unable to connect to database",
      error: err,
    })
  );