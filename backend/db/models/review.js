'use strict';
module.exports = (sequelize, DataTypes) => {
 const Review=sequelize.define('Review', {
    userid: DataTypes.INTEGER,
    grinderid: DataTypes.INTEGER,
    review: DataTypes.TEXT
 }, {});
 Review.associate= function(models) {
  Review.belongsTo(models.Grinder, {
    foreignKey:'grinderid'
  });
  Review.belongsTo(models.User, {
    foreignKey:'userid'
  });
  }
  return Review;
};
