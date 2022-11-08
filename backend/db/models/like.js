'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like=sequelize.define('Like',{
    userid: DataTypes.INTEGER,
    recipeid: DataTypes.INTEGER,
    liked: DataTypes.BOOLEAN
  }, {});

    Like.associate= function(models) {
      Like.belongsTo(models.Recipe, {
        foreignKey:'recipeid'
      });
      Like.belongsTo(models.User, {
        foreignKey:'userid'
      });
    }
  return Like;
};
