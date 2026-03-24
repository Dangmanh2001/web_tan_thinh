"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      this.hasMany(models.ProjectImage, {
        foreignKey: "project_id",
        as: "images",
      });
    }
  }
  Project.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      location: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Project",
      tableName: "projects",
      timestamps: true,
      updatedAt: false,
      createdAt: "created_at",
    },
  );
  return Project;
};
