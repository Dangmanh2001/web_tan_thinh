"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(10);
    const adminPass = await bcrypt.hash("Admin@123", salt);
    const editorPass = await bcrypt.hash("Editor@123", salt);

    return queryInterface.bulkInsert("users", [
      {
        id: 1,
        username: "admin",
        password: adminPass,
        role: "admin",
        created_at: new Date(),
      },
      {
        id: 2,
        username: "editor",
        password: editorPass,
        role: "editor",
        created_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
