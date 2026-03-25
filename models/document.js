"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    static associate(models) {}
  }
  Document.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      file_path: { type: DataTypes.STRING, allowNull: false },
      published_at: { type: DataTypes.DATEONLY },
    },
    {
      sequelize,
      modelName: "Document",
      tableName: "documents",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Document;
};
