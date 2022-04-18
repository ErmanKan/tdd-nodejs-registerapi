const Sequelieze = require('sequelize');
const sequelize = require('../config/database');

const Model = Sequelieze.Model;

class User extends Model {}

User.init(
  {
    username: {
      type: Sequelieze.STRING,
    },
    email: {
      type: Sequelieze.STRING,
    },
    password: {
      type: Sequelieze.STRING,
    },
  },
  {
    sequelize,
    modelName: 'user',
  }
);

module.exports = User;
