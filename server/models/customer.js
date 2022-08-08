'use strict';
const { hashPassword } = require('../helpers');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: `E-mail already register`
      },
      validate: {
        notNull: {
          args: true,
          msg: `E-mail cannot be null`
        },
        isEmail: {
          args: true,
          msg: `Input with true format`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Password cannot be null'
        },
        notEmpty: {
          args: true,
          msg: 'Password is required'
        },
        len: [6, 255]
      }
    },
    username: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  Customer.beforeCreate((instance, options) => {
    instance.password = hashPassword(instance.password)
  })
  return Customer;
};