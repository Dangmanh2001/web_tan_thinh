"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      this.hasMany(models.ServiceDetail, {
        foreignKey: "service_id",
        as: "details",
      });
    }
  }
  Service.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      description: DataTypes.TEXT,
      content: DataTypes.TEXT,
      thumbnail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Service",
      tableName: "services",
      timestamps: true,
      updatedAt: false,
      createdAt: "created_at",
    },
  );
  return Service;
};
