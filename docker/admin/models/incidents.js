'use strict';
module.exports = (sequelize, DataTypes) => {
  const Incidents = sequelize.define('Incidents', {
    date: DataTypes.DATE,
    division: DataTypes.STRING,
    incidentLocation: DataTypes.STRING,
    division_employee: DataTypes.INTEGER,
    events: DataTypes.STRING,
    injuries: DataTypes.STRING,
    downtime: DataTypes.INTEGER,
    cause: DataTypes.STRING,
    measures: DataTypes.STRING,
    imageOne: DataTypes.INTEGER
  }, {});
  Incidents.associate = function (models) {
    Incidents.belongsTo(models.User)
  };
  return Incidents;
};