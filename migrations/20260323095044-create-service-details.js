"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("service_details", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      service_id: {
        type: Sequelize.INTEGER,
        references: { model: "services", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      section_title: { type: Sequelize.STRING },
      content: { type: Sequelize.TEXT },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Service_details");
  },
};
