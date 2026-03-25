const models = require("../../../models/index");
const Document = models.Document;

module.exports = {
  index: async (req, res) => {
    try {
      const limit = 5;
      const page = parseInt(req.query.page) || 1;
      const offset = (page - 1) * limit;
      const { count, rows: documents } = await Document.findAndCountAll({
        order: [["created_at", "DESC"]],
        limit,
        offset,
      });
      res.render("pages/home/cong-bo-nang-luc", {
        title: "Công bố năng lực",
        layout: "layouts/home/home",
        documents,
        currentPage: page,
        totalPages: Math.ceil(count / limit),
      });
    } catch (error) {
      console.error(error);
      res.render("pages/home/cong-bo-nang-luc", {
        title: "Công bố năng lực",
        layout: "layouts/home/home",
        documents: [],
        currentPage: 1,
        totalPages: 1,
      });
    }
  },
};
