'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe=sequelize.define('Recipe', {
    userid: DataTypes.INTEGER,
    grinderid: DataTypes.INTEGER,
    brewtype: DataTypes.STRING,
    roasttype: DataTypes.STRING,
    grindlevel: DataTypes.STRING,
    description:DataTypes.TEXT
  },{})
    Recipe.associate = function(models) {
      Recipe.hasOne(models.Grinder, {
        foreignKey: 'grinderid'
      })
      Recipe.hasOne(models.User, {
        foreignKey: 'userid'
      })
      Recipe.hasMany(models.Comments, {
        foreignKey: 'recipeid',
        onDelete: 'cascade',
        hooks:true
      })
    }
  return Recipe;
};
