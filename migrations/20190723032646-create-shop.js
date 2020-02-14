'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lat: {
        type: Sequelize.STRING
      },
      lon: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      tradingHours: {
        type: Sequelize.STRING
      },
       category: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      postalCode: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Records');
  }
};