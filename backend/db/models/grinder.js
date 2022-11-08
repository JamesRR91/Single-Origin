'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grinder=sequelize.define('Grinder', {
    product: DataTypes.STRING,
    price: DataTypes.INTEGER,
    typeid: DataTypes.STRING,
    imgurl: DataTypes.STRING,
  }, {});
    Grinder.associate = function(models) {
      Grinder.hasMany(models.Review, {
        foreignKey: 'grinderid',
        onDelete: 'cascade',
        hooks:true
      })
    }
  return Grinder;
};
