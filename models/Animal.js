const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Animal extends Model {}

Animal.init(
  {
    name: {
      type: DataTypes.STRING
    },
    species: {
      type: DataTypes.STRING
    },
    class: {
      type: DataTypes.STRING
    },
    is_dangerous: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize
  }
);

module.exports = Animal;
