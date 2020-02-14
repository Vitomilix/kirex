'use strict';
module.exports = (sequelize, DataTypes) => {
  const Search = sequelize.define('Search', {
    name: DataTypes.STRING,
    shopName: DataTypes.STRING,
    shopCategory: DataTypes.STRING,
    nearPoi: DataTypes.STRING,
    radiusToPoI: DataTypes.INTEGER
  }, {});
  Search.associate = function (models) {
    Search.belongsTo(models.User)
  };
  return Search;
};