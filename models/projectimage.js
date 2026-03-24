"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProjectImage extends Model {
    static associate(models) {
      this.belongsTo(models.Project, {
        foreignKey: "project_id",
        as: "project",
      });
    }
  }
  ProjectImage.init(
    {
      project_id: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProjectImage",
      tableName: "project_images",
      timestamps: false,
    },
  );
  return ProjectImage;
};
