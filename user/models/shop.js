'use strict';
module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define('Shop', {
    lat: DataTypes.STRING,
    lon: DataTypes.STRING,
    name: DataTypes.STRING,
    website: DataTypes.STRING,
    tradingHours: DataTypes.STRING,
    category: DataTypes.STRING,
    street: DataTypes.STRING,
    postalCode: DataTypes.INTEGER
  }, {});
  Shop.associate = function (models) {
    Shop.belongsTo(models.User)
  };
  return Shop;
};