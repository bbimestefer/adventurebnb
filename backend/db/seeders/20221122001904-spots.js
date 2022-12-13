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
        price: 285,
      },
      {
        ownerId: 2,
        address: '5422',
        city: 'San Diego',
        state: 'California',
        country: 'United States',
        lat: 30.3,
        lng: 40.2,
        name: 'Sunny Days',
        description: 'Relax and enjoy California',
        price: 429,
      },
      {
        ownerId: 3,
        address: '9028',
        city: 'Jacksonville',
        state: 'Florida',
        country: 'United States',
        lat: 60.3,
        lng: 51.7,
        name: 'Hurricane Central',
        description: 'Dont let the name fool you. It is safe!',
        price: 84,
      },
      {
        ownerId: 1,
        address: '4568',
        city: 'Boise',
        state: 'Idaho',
        country: 'United States',
        lat: 43,
        lng: 115.6,
        name: 'Potato Land',
        description: 'Free potatoes for your taking!',
        price: 167,
      },
      {
        ownerId: 1,
        address: '7894',
        city: 'Lansing',
        state: 'Michigan',
        country: 'United States',
        lat: 42,
        lng: 84,
        name: 'The Great Water',
        description: 'Come drink some of our famous water!',
        price: 220,
      },
      {
        ownerId: 2,
        address: '1423',
        city: 'Annapolis',
        state: 'Maryland',
        country: 'United States',
        lat: 39,
        lng: 77,
        name: 'Downtown Dream',
        description: 'Enjoy downtown by the water with many attractions!',
        price: 550,
      },
      {
        ownerId: 1,
        address: '6589',
        city: 'Austin',
        state: 'Texas',
        country: 'United States',
        lat: 30,
        lng: 97,
        name: 'Texas Twang',
        description: 'House of the best BBQ sauce around. Featured at every Mission BBQ!',
        price: 90,
      },
      {
        ownerId: 1,
        address: '4568',
        city: 'Phoenix',
        state: 'Arizona',
        country: 'United States',
        lat: 33,
        lng: 112,
        name: 'Hot But Not Humid',
        description: 'Enjoy the rocks!',
        price: 310,
      },
      {
        ownerId: 2,
        address: '4125',
        city: 'Paris',
        state: 'France',
        country: 'United States',
        lat: 48,
        lng: 1,
        name: 'Home in the Eiffel',
        description: 'Stay in the Eiffel Tower and see Paris with a view!',
        price: 880,
      },
      {
        ownerId: 3,
        address: '9713',
        city: 'Olympia',
        state: 'Washington',
        country: 'United States',
        lat: 47,
        lng: 123,
        name: 'Little Bit of Everything',
        description: 'Enjoy your stay where you can see mountains, rivers, valleys, and have trip to the ocean',
        price: 450,
      },
      {
        ownerId: 1,
        address: '5641',
        city: 'Oakhurst',
        state: 'California',
        country: 'United States',
        lat: 37,
        lng: 119,
        name: 'Yosemite Views',
        description: 'About an hour drive outside of Yosemite National Park!',
        price: 220,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Sping Forward', 'Sunny Days', 'Hurricane Central', 'Potato Land', 'The Great Water', 'Downtown Dream', 'Texas Twang', 'Hot But Not Humid', 'Home in the Eiffel', 'Little Bit of Everything', 'Yosemite Views'] }
    }, {});
  }
};
