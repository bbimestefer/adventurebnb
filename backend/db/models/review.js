'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(
        models.User,
        { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true }
      )
      Review.belongsTo(
        models.Spot,
        { foreignKey: 'spotId', onDelete: 'CASCADE', hooks: true }
      )
      Review.hasMany(
        models.ReviewImage,
        { foreignKey: 'reviewId', hooks: true }
      )
    }
  }
  Review.init({
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    review: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    stars: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 5
      }
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
