'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Todolist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Todolist.init({
    description: { type: DataTypes.TEXT, allowNull:false },
    status: { type: DataTypes.TEXT, allowNull:true }
  }, {
    sequelize,
    modelName: 'Todolist',
  });
  return Todolist;
};