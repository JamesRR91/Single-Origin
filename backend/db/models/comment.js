'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment=sequelize.define('Comment',{
    userid: DataTypes.INTEGER,
    recipeid: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});

    Comment.associate= function(models) {
      Comment.belongsTo(models.Recipe, {
        foreignKey:'recipeid'
      });
      Comment.belongsTo(models.User, {
        foreignKey:'userid'
      });
    }
  return Comment;
};
