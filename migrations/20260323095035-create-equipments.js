"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("equipments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.TEXT },
      image: { type: Sequelize.STRING },
      category: { type: Sequelize.STRING }, // bê tông, đất, thép
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Equipments");
  },
};
