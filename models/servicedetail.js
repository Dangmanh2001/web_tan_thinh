"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ServiceDetail extends Model {
    static associate(models) {
      this.belongsTo(models.Service, {
        foreignKey: "service_id",
        as: "service",
      });
    }
  }
  ServiceDetail.init(
    {
      service_id: DataTypes.INTEGER,
      section_title: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "ServiceDetail",
      tableName: "service_details",
      timestamps: false,
    },
  );
  return ServiceDetail;
};
