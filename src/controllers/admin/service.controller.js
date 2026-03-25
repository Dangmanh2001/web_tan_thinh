const models = require("../../../models/index");
const Service = models.Service;
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

      const { count, rows: services } = await Service.findAndCountAll({
        order: [["created_at", "DESC"]],
        limit,
        offset,
      });

      const totalPages = Math.ceil(count / limit);

      res.render("pages/admin/service", {
        layout: "layouts/admin/home",
        services,
        currentPage: page,
        totalPages,
        totalItems: count,
      });
    } catch (error) {
      console.error(error);
      res.render("pages/admin/service", {
        layout: "layouts/admin/home",
        services: [],
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
      });
    }
  },

  createForm: (req, res) => {
    res.render("pages/admin/service-form", {
      layout: "layouts/admin/home",
      service: null,
    });
  },

  create: async (req, res) => {
    try {
      const { name, description, content } = req.body;
      const slug = slugify(name, { lower: true, locale: "vi" });
      const thumbnail = req.file ? "/images/" + req.file.filename : null;
      await Service.create({ name, slug, description, content, thumbnail });
      res.redirect("/dashboard/service");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/service");
    }
  },

  editForm: async (req, res) => {
    try {
      const service = await Service.findByPk(req.params.id);
      res.render("pages/admin/service-form", {
        layout: "layouts/admin/home",
        service,
      });
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/service");
    }
  },

  edit: async (req, res) => {
    try {
      const { name, description, content } = req.body;
      const slug = slugify(name, { lower: true, locale: "vi" });
      const updateData = { name, slug, description, content };
      if (req.file) updateData.thumbnail = "/images/" + req.file.filename;
      await Service.update(updateData, { where: { id: req.params.id } });
      res.redirect("/dashboard/service");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/service");
    }
  },

  delete: async (req, res) => {
    try {
      await Service.destroy({ where: { id: req.params.id } });
      res.redirect("/dashboard/service");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/service");
    }
  },
};
