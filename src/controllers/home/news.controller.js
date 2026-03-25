const models = require("../../../models/index");
const Post = models.Post;
const Category = models.Category;

module.exports = {
  news: async (req, res) => {
    try {
      const limit = 10;
      const page = parseInt(req.query.page) || 1;
      const offset = (page - 1) * limit;

      const { count, rows: posts } = await Post.findAndCountAll({
        include: [{ model: Category, as: "category" }],
        order: [["created_at", "DESC"]],
        limit,
        offset,
      });

      const totalPages = Math.ceil(count / limit);

      res.render("pages/home/news", {
        title: "Tin tức",
        layout: "layouts/home/home",
        posts,
        currentPage: page,
        totalPages,
        totalItems: count,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Có lỗi xảy ra khi tải dữ liệu.");
    }
  },

  detail: async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id, {
        include: [{ model: Category, as: "category" }],
      });
      if (!post) return res.redirect("/news");
      res.render("pages/home/news-detail", {
        post,
        title: post.title,
        layout: "layouts/home/home",
      });
    } catch (error) {
      res.redirect("/news");
    }
  },
};
