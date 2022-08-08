'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, {
        foreignKey: "authorId",
        references: "id",
      }),
        Product.belongsTo(models.Category, {
          foreignKey: "categoryId",
          references: "id",
        }),
        Product.hasMany(models.History, {
          foreignKey: "productId",
          references: "id",
        })
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Name is Required"
        },
        notNull: {
          msg: "Name is Required"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "description Required"
        },
        notNull: {
          msg: "description required"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Number Required"
        },
        notNull: {
          msg: "Number required"
        },
        isNumeric: {
          msg: "input must be number"
        },
        min: {
          args: 50000,
          msg: 'Minimum price is 50000'
        }
      }
    },
    imgUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "URL Required"
        },
        notNull: {
          msg: "URL required"
        }
      }
    },
    categoryId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};