const tutorialModel = (sequelize, DataTypes) => {
  const tutorialSchema = {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    published: DataTypes.BOOLEAN
  };

  const Tutorial = sequelize.define('tutorial', tutorialSchema);

  return Tutorial;
};

module.exports = tutorialModel;