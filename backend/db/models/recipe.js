'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe=sequelize.define('Recipe', {
    userid: DataTypes.INTEGER,
    grinderid: DataTypes.INTEGER,
    title: DataTypes.STRING,
    brewtype: DataTypes.STRING,
    roasttype: DataTypes.STRING,
    grindlevel: DataTypes.STRING,
    coffeedose: DataTypes.STRING,
    waterdose: DataTypes.STRING,
    brewtime: DataTypes.STRING,
    description:DataTypes.TEXT
  },{})
    Recipe.associate = function(models) {
      Recipe.hasOne(models.Grinder, {
        foreignKey: 'grinderid'
      })
      Recipe.hasMany(models.Comment, {
        foreignKey: 'recipeid',
        onDelete: 'cascade',
        hooks:true
      })
      Recipe.hasMany(models.Like, {
        foreignKey: 'recipeid',
        onDelete: 'cascade',
        hooks:true
      })
    }
  return Recipe;
};
