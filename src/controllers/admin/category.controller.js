const models = require("../../../models/index");
const Category = models.Category;
const slugify = require("slugify");

module.exports = {
  list: async (req, res) => {
    try {
      const limit = 10;
      const page = parseInt(req.query.page) || 1;
      const offset = (page - 1) * limit;
      const { count, rows: categories } = await Category.findAndCountAll({
        order: [["id", "ASC"]],
        limit,
        offset,
      });
      res.render("pages/admin/category", {
        layout: "layouts/admin/home",
        categories,
        currentPage: page,
        totalPages: Math.ceil(count / limit),
      });
    } catch (error) {
      console.error(error);
      res.render("pages/admin/category", {
        layout: "layouts/admin/home",
        categories: [],
        currentPage: 1,
        totalPages: 1,
      });
    }
  },

  create: async (req, res) => {
    try {
      const { name, type } = req.body;
      const slug = slugify(name, { lower: true, locale: "vi" });
      await Category.create({ name, slug, type });
      res.redirect("/dashboard/category");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/category");
    }
  },

  edit: async (req, res) => {
    try {
      const { name, type } = req.body;
      const slug = slugify(name, { lower: true, locale: "vi" });
      await Category.update({ name, slug, type }, { where: { id: req.params.id } });
      res.redirect("/dashboard/category");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/category");
    }
  },

  delete: async (req, res) => {
    try {
      await Category.destroy({ where: { id: req.params.id } });
      res.redirect("/dashboard/category");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/category");
    }
  },
};
