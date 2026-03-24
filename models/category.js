"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      this.hasMany(models.Post, { foreignKey: "category_id", as: "posts" });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "categories",
      timestamps: false,
    },
  );
  return Category;
};
