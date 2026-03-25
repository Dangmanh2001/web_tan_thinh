const models = require("../../../models/index");
const Contact = models.Contact;

module.exports = {
  contact: async (req, res) => {
    try {
      const limit = 10;
      const page = parseInt(req.query.page) || 1;
      const offset = (page - 1) * limit;
      const { count, rows: contacts } = await Contact.findAndCountAll({
        order: [["created_at", "DESC"]],
        limit,
        offset,
      });
      res.render("pages/admin/contact", {
        layout: "layouts/admin/home",
        contacts,
        currentPage: page,
        totalPages: Math.ceil(count / limit),
      });
    } catch (error) {
      console.error("Lỗi:", error);
      res.render("pages/admin/contact", {
        layout: "layouts/admin/home",
        contacts: [],
        currentPage: 1,
        totalPages: 1,
      });
    }
  },

  delete: async (req, res) => {
    try {
      await Contact.destroy({ where: { id: req.params.id } });
      res.redirect("/dashboard/contact");
    } catch (error) {
      console.error("Lỗi:", error);
      res.redirect("/dashboard/contact");
    }
  },
};
