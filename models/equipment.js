"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Equipment extends Model {
    static associate(models) {}
  }
  Equipment.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Equipment",
      tableName: "equipments",
      timestamps: false,
    },
  );
  return Equipment;
};
