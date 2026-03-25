const models = require("../../../models/index");
const Document = models.Document;
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/documents"));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") cb(null, true);
    else cb(new Error("Chỉ chấp nhận file PDF"), false);
  },
});

module.exports = {
  upload: upload.single("pdf_file"),

  list: async (req, res) => {
    try {
      const limit = 10;
      const page = parseInt(req.query.page) || 1;
      const offset = (page - 1) * limit;
      const { count, rows: documents } = await Document.findAndCountAll({
        order: [["created_at", "DESC"]],
        limit,
        offset,
      });
      res.render("pages/admin/document", {
        layout: "layouts/admin/home",
        documents,
        currentPage: page,
        totalPages: Math.ceil(count / limit),
      });
    } catch (error) {
      console.error(error);
      res.render("pages/admin/document", {
        layout: "layouts/admin/home",
        documents: [],
        currentPage: 1,
        totalPages: 1,
      });
    }
  },

  createForm: (req, res) => {
    res.render("pages/admin/document-form", {
      layout: "layouts/admin/home",
      document: null,
    });
  },

  create: async (req, res) => {
    try {
      const { title, published_at } = req.body;
      if (!req.file) return res.redirect("/dashboard/document");
      const file_path = "/documents/" + req.file.filename;
      await Document.create({ title, file_path, published_at: published_at || null });
      res.redirect("/dashboard/document");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/document");
    }
  },

  editForm: async (req, res) => {
    try {
      const document = await Document.findByPk(req.params.id);
      res.render("pages/admin/document-form", {
        layout: "layouts/admin/home",
        document,
      });
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/document");
    }
  },

  edit: async (req, res) => {
    try {
      const { title, published_at } = req.body;
      const updateData = { title, published_at: published_at || null };
      if (req.file) {
        // Xóa file cũ
        const old = await Document.findByPk(req.params.id);
        if (old && old.file_path) {
          const oldPath = path.join(__dirname, "../../public", old.file_path);
          if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
        }
        updateData.file_path = "/documents/" + req.file.filename;
      }
      await Document.update(updateData, { where: { id: req.params.id } });
      res.redirect("/dashboard/document");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/document");
    }
  },

  delete: async (req, res) => {
    try {
      const doc = await Document.findByPk(req.params.id);
      if (doc && doc.file_path) {
        const filePath = path.join(__dirname, "../../public", doc.file_path);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      }
      await Document.destroy({ where: { id: req.params.id } });
      res.redirect("/dashboard/document");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/document");
    }
  },
};
