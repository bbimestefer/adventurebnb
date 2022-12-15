'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Reviews';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 6,
        userId: 1,
        review: 'Great place to relax and enjoy night life!',
        stars: 4,
      },
      {
        spotId: 9,
        userId: 1,
        review: 'First time being in Paris and this was the best decision I could have made!',
        stars: 4,
      },
      {
        spotId: 3,
        userId: 2,
        review: 'Such an exciting place and the weather is always great',
        stars: 4,
      },
      {
        spotId: 1,
        userId: 2,
        review: 'Great place to see the mountains',
        stars: 4,
      },
      {
        spotId: 3,
        userId: 3,
        review: 'my sons name is jackson and he loves hot tubs!',
        stars: 5,
      },
      {
        spotId: 2,
        userId: 1,
        review: 'this place is hot',
        stars: 3,
      },
      {
        spotId: 3,
        userId: 2,
        review: 'could be prettier',
        stars: 2,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      id: { [Op.in]: [1, 2, 3, 4, 5, 6, 7] }
    }, {});
  }
};
