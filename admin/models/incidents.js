'use strict';
module.exports = (sequelize, DataTypes) => {
  const Incidents = sequelize.define('Incidents', {
    division: DataTypes.STRING,
    incidentLocation: DataTypes.STRING,
    division_employee: DataTypes.STRING,
    events: DataTypes.STRING,
    date: DataTypes.DATE,
    injuries: DataTypes.STRING,
    downtime: DataTypes.INTEGER,
    cause: DataTypes.STRING,
    measures: DataTypes.STRING,
    imageOne: DataTypes.STRING
  }, {});
  Incidents.associate = function (models) {
    Incidents.belongsTo(models.User)
  };
  return Incidents;
};