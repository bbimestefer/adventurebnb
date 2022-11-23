'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(
        models.Spot,
        { foreignKey: 'spotId' }
      )
      Booking.belongsTo(
        models.User,
        { foreignKey: 'userId' }
      )
    }
  }
  Booking.init({
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    startDate: {
      allowNull: false,
      type: DataTypes.DATE,
      validate: {
        checkStartDate(value) {
          let date = new Date()
          if(this.startDate < date) throw new Error("Start date must be after today's date!")
        }
      }
    },
    endDate: {
      allowNull: false,
      type: DataTypes.DATE,
      validate: {
        checkDate(value){
          if(value < this.startDate) throw new Error('End date must be after start date!')
        }
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
    modelName: 'Booking',
    // indexes: [
    //   {
    //     unique: true,
    //     fields: ['spotId', 'startDate', 'endDate'],
    //   }
    // ]
  });
  return Booking;
};
