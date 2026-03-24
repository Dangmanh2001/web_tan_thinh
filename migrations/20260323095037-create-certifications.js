"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("certifications", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.TEXT },
      issued_by: { type: Sequelize.STRING },
      issue_date: { type: Sequelize.DATEONLY }, // Chỉ lấy ngày/tháng/năm
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Certifications");
  },
};
