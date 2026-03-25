const models = require("../../../models/index");
const { Op } = require("sequelize");
const Post = models.Post;
const Project = models.Project;
const Service = models.Service;
const Contact = models.Contact;
const Document = models.Document;

module.exports = {
  search: async (req, res) => {
    const q = (req.query.q || "").trim();
    if (!q) return res.redirect("/dashboard");

    const like = { [Op.like]: `%${q}%` };

    try {
      const [posts, projects, services, contacts, documents] = await Promise.all([
        Post.findAll({ where: { title: like }, order: [["created_at", "DESC"]], limit: 10 }),
        Project.findAll({ where: { [Op.or]: [{ name: like }, { location: like }] }, order: [["created_at", "DESC"]], limit: 10 }),
        Service.findAll({ where: { name: like }, order: [["created_at", "DESC"]], limit: 10 }),
        Contact.findAll({ where: { [Op.or]: [{ name: like }, { email: like }] }, order: [["created_at", "DESC"]], limit: 10 }),
        Document.findAll({ where: { title: like }, order: [["created_at", "DESC"]], limit: 10 }),
      ]);

      res.render("pages/admin/search", {
        layout: "layouts/admin/home",
        q,
        posts,
        projects,
        services,
        contacts,
        documents,
      });
    } catch (error) {
      console.error(error);
      res.redirect("/dashboard");
    }
  },
};
