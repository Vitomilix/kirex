'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    companyNumber:DataTypes.STRING,
    password: DataTypes.STRING,
    resetToken: DataTypes.STRING,
    resetTokenExpiration: DataTypes.DATE
  }, {});
  Admin.associate = function (models) {
    Admin.hasMany(models.Record)
  };
  return Admin;
};