'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Hiras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
        email: {
        type: Sequelize.STRING
      },
      companyNumber: {
        type: Sequelize.INTEGER
      },
      taskActivity: {
        type: Sequelize.STRING
      },
     
      projectNumber: {
        type: Sequelize.STRING
      },
       area: {
        type: Sequelize.STRING
      },
       doneBefore: {
        type: Sequelize.INTEGER
      },
    
      haveChangesMade: {
        type: Sequelize.INTEGER
      },
         haveChangesMade: {
        type: Sequelize.INTEGER
      },
        electricalEquipment: {
        type: Sequelize.INTEGER
      },
         safeAccess: {
        type: Sequelize.INTEGER
      },

        machineGuarding: {
        type: Sequelize.INTEGER
      },
          correctEquipment: {
        type: Sequelize.INTEGER
      },
        preinspectedEquipment: {
        type: Sequelize.INTEGER
      },
        sds: {
        type: Sequelize.INTEGER
      },
        controlToxic: {
        type: Sequelize.INTEGER
      },
        fumeSystems: {
        type: Sequelize.INTEGER
      },
        ppe: {
        type: Sequelize.INTEGER
      },
        hazard: {
        type: Sequelize.STRING
      },
         otherHazard: {
        type: Sequelize.TEXT
      },
           controlHazard: {
        type: Sequelize.STRING
      },
          controlHazardOther: {
        type: Sequelize.STRING
      },
        monitorProcess: {
        type: Sequelize.STRING
      },
           additionalComments: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Hira');
  }
};