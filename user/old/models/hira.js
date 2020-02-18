'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hira = sequelize.define('Hira', {
    name: DataTypes.STRING,
    companyNumber: DataTypes.INTEGER,
    taskActivity: DataTypes.STRING,
    dateDone: DataTypes.DATE,
    projectNumber: DataTypes.STRING,
    area: DataTypes.STRING,
    doneBefore: DataTypes.INTEGER,
    haveChangesMade: DataTypes.INTEGER,
    electricalEquipment: DataTypes.INTEGER,
    safeAccess: DataTypes.INTEGER,
    machineGuarding: DataTypes.INTEGER,
    correctEquipment: DataTypes.INTEGER,
    preinspectedEquipment: DataTypes.INTEGER,
    sds: DataTypes.INTEGER,
    controlToxic: DataTypes.INTEGER,
    fumeSystems: DataTypes.INTEGER,
    ppe: DataTypes.INTEGER,
    hazard: DataTypes.STRING,
    otherHazard: DataTypes.STRING,
    controlHazard: DataTypes.STRING,
    controlHazardOther: DataTypes.STRING,
    monitorProcess: DataTypes.STRING,
    additionalComments: DataTypes.TEXT
  }, {});
  Hira.associate = function (models) {
    Hira.belongsTo(models.User)
  };
  return Hira;
};