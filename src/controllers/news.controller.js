// Import model Post từ thư mục models của bạn
const models = require("../../models/index");
const Post = models.Post;
module.exports = {
  news: async (req, res) => {
    try {
      const posts = await Post.findAll({
        order: [["created_at", "DESC"]],
        // Không limit 3 ở đây nếu muốn nút "Xem tất cả" hoạt động ngay tại trang
      });

      // Truyền biến posts vào giao diện
      res.render("pages/home/news", {
        title: "Tin tức",
        layout: "layouts/home/home",
        posts: posts, // Gửi danh sách posts sang file EJS
      });
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu post:", error);
      res.status(500).send("Có lỗi xảy ra khi tải dữ liệu.");
    }
  },
};
