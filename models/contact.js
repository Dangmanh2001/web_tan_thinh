"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate(models) {}
  }
  Contact.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      message: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Contact",
      tableName: "contacts",
      timestamps: true,
      updatedAt: false,
      createdAt: "created_at",
    },
  );
  return Contact;
};
