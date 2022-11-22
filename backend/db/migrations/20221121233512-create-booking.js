'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

options.tableName = 'Bookings';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      spotId: {
        type: Sequelize.INTEGER,
        references: { model: 'Spots', id: 'id' },
        onDelete: 'CASCADE',
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', id: 'id' },
        onDelete: 'CASCADE',
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
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
    await queryInterface.addIndex(
      'Bookings',
      ['spotId', 'startDate', 'endDate'],
      {
        unique: true
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(options, options);
    await queryInterface.removeIndex(
      'Bookings',
      ['spotId', 'startDate', 'endDate'],
    );
  }
};
