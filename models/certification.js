"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Certification extends Model {
    static associate(models) {}
  }
  Certification.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      issued_by: DataTypes.STRING,
      issue_date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Certification",
      tableName: "certifications",
      timestamps: false,
    },
  );
  return Certification;
};
