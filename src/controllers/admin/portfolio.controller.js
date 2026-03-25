const models = require("../../../models/index");
const Project = models.Project;
const ProjectImage = models.ProjectImage;
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images"));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + "-" + Math.random().toString(36).slice(2, 7) + ext);
  },
});
const upload = multer({ storage });

function deleteFile(filePath) {
  if (!filePath) return;
  const abs = path.join(__dirname, "../../public", filePath);
  if (fs.existsSync(abs)) fs.unlinkSync(abs);
}

module.exports = {
  upload: upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "images", maxCount: 20 },
  ]),

  list: async (req, res) => {
    try {
      const limit = 10;
      const page = parseInt(req.query.page) || 1;
      const offset = (page - 1) * limit;
      const { count, rows: projects } = await Project.findAndCountAll({
        order: [["created_at", "DESC"]],
        limit,
        offset,
      });
      res.render("pages/admin/portfolio", {
        layout: "layouts/admin/home",
        projects,
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        totalItems: count,
      });
    } catch (error) {
      console.error(error);
      res.render("pages/admin/portfolio", {
        layout: "layouts/admin/home",
        projects: [],
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
      });
    }
  },

  createForm: (req, res) => {
    res.render("pages/admin/portfolio-form", {
      layout: "layouts/admin/home",
      project: null,
      images: [],
    });
  },

  create: async (req, res) => {
    try {
      const { name, description, location } = req.body;
      const thumbnail = req.files?.thumbnail?.[0]
        ? "/images/" + req.files.thumbnail[0].filename
        : null;
      const project = await Project.create({ name, description, location, thumbnail });

      if (req.files?.images) {
        const imageRecords = req.files.images.map((f) => ({
          project_id: project.id,
          image: "/images/" + f.filename,
        }));
        await ProjectImage.bulkCreate(imageRecords);
      }
      res.redirect("/dashboard/portfolio");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/portfolio");
    }
  },

  editForm: async (req, res) => {
    try {
      const project = await Project.findByPk(req.params.id);
      const images = await ProjectImage.findAll({ where: { project_id: req.params.id } });
      res.render("pages/admin/portfolio-form", {
        layout: "layouts/admin/home",
        project,
        images,
      });
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/portfolio");
    }
  },

  edit: async (req, res) => {
    try {
      const { name, description, location, delete_images } = req.body;
      const project = await Project.findByPk(req.params.id);
      const updateData = { name, description, location };

      if (req.files?.thumbnail?.[0]) {
        deleteFile(project.thumbnail);
        updateData.thumbnail = "/images/" + req.files.thumbnail[0].filename;
      }

      await Project.update(updateData, { where: { id: req.params.id } });

      // Xóa ảnh phụ được chọn xóa
      if (delete_images) {
        const toDelete = Array.isArray(delete_images) ? delete_images : [delete_images];
        for (const imgId of toDelete) {
          const img = await ProjectImage.findByPk(imgId);
          if (img) {
            deleteFile(img.image);
            await img.destroy();
          }
        }
      }

      // Thêm ảnh phụ mới
      if (req.files?.images) {
        const imageRecords = req.files.images.map((f) => ({
          project_id: req.params.id,
          image: "/images/" + f.filename,
        }));
        await ProjectImage.bulkCreate(imageRecords);
      }

      res.redirect("/dashboard/portfolio");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/portfolio");
    }
  },

  delete: async (req, res) => {
    try {
      const project = await Project.findByPk(req.params.id, {
        include: [{ model: ProjectImage, as: "images" }],
      });
      if (project) {
        deleteFile(project.thumbnail);
        for (const img of project.images) deleteFile(img.image);
        await ProjectImage.destroy({ where: { project_id: project.id } });
        await project.destroy();
      }
      res.redirect("/dashboard/portfolio");
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard/portfolio");
    }
  },
};
