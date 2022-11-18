'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(30)
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(256)
      },
      hashedPassword: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    }, options);
    // adds the index
    await queryInterface.addIndex(
      'Users',
      ['username', 'email'],
      {
        unique: true
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users', options);
    // removes the index
    await queryInterface.removeIndex(
      'Users',
      ['username', 'email'],
    );
  }
};
