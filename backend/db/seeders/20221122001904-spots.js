'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Spots';
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: '1345 Picketts Lane',
        city: 'Colorado Springs',
        state: 'Colorado',
        country: 'United States',
        lat: 11.5,
        lng: 40.2,
        name: 'Sping Forward',
        description: 'Enjoy Colorado Springs with a great view',
        price: 289.99,
      },
      {
        ownerId: 1,
        address: '5422',
        city: 'San Diego',
        state: 'California',
        country: 'United States',
        lat: 30.3,
        lng: 40.2,
        name: 'Sunny Days',
        description: 'Relax and enjoy California',
        price: 429.99,
      },
      {
        ownerId: 1,
        address: '9028',
        city: 'Jacksonville',
        state: 'Florida',
        country: 'United States',
        lat: 60.3,
        lng: 51.7,
        name: 'Hurricane Central',
        description: 'Dont let the name fool you. It is safe!',
        price: 1.99,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Sping Forward', 'Sunny Days', 'Hurricane Central'] }
    }, {});
  }
};
