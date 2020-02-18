'use strict';
module.exports = (sequelize, DataTypes) => {
  const Poi = sequelize.define('Poi', {
    lat: DataTypes.STRING,
    lon: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  Poi.associate = function (models) {
    Poi.belongsTo(models.User)
  };
  return Poi;
};