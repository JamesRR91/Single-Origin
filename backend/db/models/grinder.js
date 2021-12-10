'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grinder=sequelize.define('Grinder', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    typeid: DataTypes.STRING
  }, {});
    Grinder.associate = function(models) {
      Grinder.belongsTo(models.Recipe, {
        foreignKey:'grinderid'
      })
      Grinder.hasMany(models.Review, {
        foreignKey: 'grinderid',
        onDelete: 'cascade',
        hooks:true
      })
    }
  return Grinder;
};
