const Sequelize = require('sequelize');
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
    console.log({ message: "Successfully connected to database" });
  })
  .catch((err) =>
    console.log({
      message: "Unable to connect to database",
      error: err,
    })
  );