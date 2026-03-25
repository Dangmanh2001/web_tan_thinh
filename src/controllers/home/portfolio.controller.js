const models = require("../../../models/index");
const Project = models.Project;
const ProjectImage = models.ProjectImage;

module.exports = {
  portfolio: async (req, res) => {
    try {
      const limit = 9;
      const page = parseInt(req.query.page) || 1;
      const offset = (page - 1) * limit;
      const { count, rows: projects } = await Project.findAndCountAll({
        order: [["created_at", "DESC"]],
        limit,
        offset,
      });
      res.render("pages/home/portfolio", {
        title: "Dự án",
        layout: "layouts/home/home",
        projects,
        currentPage: page,
        totalPages: Math.ceil(count / limit),
      });
    } catch (error) {
      console.error(error);
      res.render("pages/home/portfolio", {
        title: "Dự án",
        layout: "layouts/home/home",
        projects: [],
        currentPage: 1,
        totalPages: 1,
      });
    }
  },

  detail: async (req, res) => {
    try {
      const project = await Project.findByPk(req.params.id, {
        include: [{ model: ProjectImage, as: "images" }],
      });
      if (!project) return res.redirect("/portfolio");
      res.render("pages/home/portfolio-detail", {
        title: project.name,
        layout: "layouts/home/home",
        project,
      });
    } catch (error) {
      console.error(error);
      res.redirect("/portfolio");
    }
  },
};
