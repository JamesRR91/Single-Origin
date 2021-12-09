'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like=sequelize.define('Like',{
    userid: DataTypes.INTEGER,
    recipeid: DataTypes.INTEGER,
    liked: DataTypes.BOOLEAN
  }, {});

    Comment.associate= function(models) {
      Comment.belongsTo(models.Recipe, {
        foreignKey:'recipeid'
      });
      Comment.belongsTo(models.User, {
        foreignKey:'userid'
      });
    }
  return Like;
};
