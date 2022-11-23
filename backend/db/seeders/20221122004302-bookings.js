'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Bookings';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 1,
        startDate: new Date('July 12, 2023 15:00:00'),
        endDate: new Date('July 19, 2023 10:00:00'),
      },
      {
        spotId: 3,
        userId: 1,
        startDate: new Date('August 23, 2023 15:00:00'),
        endDate: new Date('August 29, 2023 10:00:00'),
      },
      {
        spotId: 2,
        userId: 2,
        startDate: new Date('November 10, 2023 15:00:00'),
        endDate: new Date('November 20, 2023 10:00:00'),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      startDate: { [Op.in]: ['2023-07-12', '2023-08-02', '2023-11-23'] }
    }, {});
  }
};
