"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Post, { foreignKey: "author_id", as: "posts" });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: true,
      updatedAt: false,
      createdAt: "created_at",
    },
  );
  return User;
};
