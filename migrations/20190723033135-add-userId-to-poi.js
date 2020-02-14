'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Pois', 'UserId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference: {
        model: 'Users',
        key: 'id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Pois', 'UserId')
  }
};
