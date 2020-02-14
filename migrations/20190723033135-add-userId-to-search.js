'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Searches', 'UserId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'Users',
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Searches', 'UserId')
  }
};
