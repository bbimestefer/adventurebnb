'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
      {
        firstName: 'Demo',
        lastName: 'lition',
        email: 'demo@user.io',
        username: 'commonUser',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Randy',
        lastName: 'Burman',
        email: 'rb@user.io',
        username: 'randster',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        firstName: 'Keith',
        lastName: 'Rewt',
        email: 'krewt@user.io',
        username: 'krewt',
        hashedPassword: bcrypt.hashSync('password3')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['commonUser', 'randster', 'krewt'] }
    }, {});
  }
};
