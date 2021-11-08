'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grinder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Grinder.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    typeid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Grinder',
  });
  return Grinder;
};