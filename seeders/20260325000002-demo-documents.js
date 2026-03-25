"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("documents", [
      {
        title: "Thông báo – Công bố chỉ tiêu (KĐVN)",
        file_path: "/documents/1774422951282.pdf",
        published_at: "2026-03-09",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Quyết định công nhận phòng thí nghiệm LAS-XD",
        file_path: "/documents/1774423130935.pdf",
        published_at: "2026-01-15",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "TCVN 1651-1-2-2008 – Thép cốt bê tông",
        file_path: "/documents/1774422951282.pdf",
        published_at: "2025-12-01",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "TCVN 198-2008 Vật liệu kim loại – Thử uốn",
        file_path: "/documents/1774423130935.pdf",
        published_at: "2025-11-20",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "TCVN 8819-2011 – Mặt đường bê tông nhựa nóng",
        file_path: "/documents/1774422951282.pdf",
        published_at: "2025-10-05",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "TCVN 9116-2012 – Cống hộp bê tông cốt thép",
        file_path: "/documents/1774423130935.pdf",
        published_at: "2025-09-18",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "TCVN 9846-2013 – Quy trình thí nghiệm xuyên tĩnh",
        file_path: "/documents/1774422951282.pdf",
        published_at: "2025-08-30",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "TCVN 12790-2020 – Đất, đá đắm dùng trong công trình Giao thông – Đầm nén Proctor",
        file_path: "/documents/1774423130935.pdf",
        published_at: "2025-07-14",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "ISO 17025-1670 – Yêu cầu chung phòng thí nghiệm",
        file_path: "/documents/1774422951282.pdf",
        published_at: "2025-06-22",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Giấy chứng nhận đăng ký kinh doanh lần 2 (ĐKKD)",
        file_path: "/documents/1774423130935.pdf",
        published_at: "2025-05-10",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete("documents", null, {});
  },
};
