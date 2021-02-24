'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Incidents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      division: {
        type: Sequelize.STRING
      },
      incidentLocation: {
        type: Sequelize.STRING
      },
      division_employee: {
        type: Sequelize.STRING
      },
       events: {
        type: Sequelize.STRING
      },
        date: {
        type: Sequelize.DATE
      },
         injuries: {
        type: Sequelize.STRING
      },
        downtime: {
        type: Sequelize.INTEGER
      },
        cause: {
        type: Sequelize.STRING
      },
       measures: {
        type: Sequelize.STRING
      },
        measures: {
        type: Sequelize.STRING
      },
      
        imageOne: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Incidents');
  }
};