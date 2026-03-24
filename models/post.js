"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: "category_id",
        as: "category",
      });
      this.belongsTo(models.User, { foreignKey: "author_id", as: "author" });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      content: DataTypes.TEXT,
      thumbnail: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      author_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "posts",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  );
  return Post;
};
