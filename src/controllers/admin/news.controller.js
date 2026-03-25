const models = require("../../../models/index");
const Post = models.Post;
const Category = models.Category;
const multer = require("multer");
const slugify = require("slugify");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images"));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});
const upload = multer({ storage });

module.exports = {
  upload: upload.single("thumbnail"),

  list: async (req, res) => {
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

      res.render("pages/admin/news", {
        layout: "layouts/admin/home",
        posts,
        currentPage: page,
        totalPages,
        totalItems: count,
      });
    } catch (error) {
      console.error(error);
      res.render("pages/admin/news", {
        layout: "layouts/admin/home",
        posts: [],
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
      });
    }
  },

  createForm: async (req, res) => {
    const categories = await Category.findAll();
    res.render("pages/admin/news-form", {
      layout: "layouts/admin/home",
      post: null,
      categories,
    });
  },

  create: async (req, res) => {
    try {
      const { title, content, category_id } = req.body;
      const slug = slugify(title, { lower: true, locale: "vi" });
      const thumbnail = req.file ? "/images/" + req.file.filename : null;
      await Post.create({ title, slug, content, thumbnail, category_id, author_id: 1 });
      res.redirect("/dashboard/news");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/news");
    }
  },

  editForm: async (req, res) => {
    try {
      const [post, categories] = await Promise.all([
        Post.findByPk(req.params.id),
        Category.findAll(),
      ]);
      res.render("pages/admin/news-form", {
        layout: "layouts/admin/home",
        post,
        categories,
      });
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/news");
    }
  },

  edit: async (req, res) => {
    try {
      const { title, content, category_id } = req.body;
      const slug = slugify(title, { lower: true, locale: "vi" });
      const updateData = { title, slug, content, category_id };
      if (req.file) updateData.thumbnail = "/images/" + req.file.filename;
      await Post.update(updateData, { where: { id: req.params.id } });
      res.redirect("/dashboard/news");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/news");
    }
  },

  delete: async (req, res) => {
    try {
      await Post.destroy({ where: { id: req.params.id } });
      res.redirect("/dashboard/news");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/news");
    }
  },
};
