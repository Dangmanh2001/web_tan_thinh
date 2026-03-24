"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("categories", [
      {
        id: 1,
        name: "Thí nghiệm vật liệu",
        slug: "thi-nghiem-vat-lieu",
        type: "post",
      },
      {
        id: 2,
        name: "Kiểm định công trình",
        slug: "kiem-dinh-cong-trinh",
        type: "post",
      },
      { id: 3, name: "Địa kỹ thuật", slug: "dia-ky-thuat", type: "post" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
