const models = require("../../../models/index");
const Document = models.Document;

module.exports = {
  home: async (req, res) => {
    let documents = [];
    let totalPages = 1;
    let currentPage = 1;
    const limit = 5;
    try {
      currentPage = parseInt(req.query.docPage) || 1;
      const offset = (currentPage - 1) * limit;
      const { count, rows } = await Document.findAndCountAll({
        order: [["created_at", "DESC"]],
        limit,
        offset,
      });
      documents = rows;
      totalPages = Math.ceil(count / limit);
    } catch (e) {}
    res.render("pages/home/index", {
      title: "Trang chủ",
      layout: "layouts/home/home",
      documents,
      currentDocPage: currentPage,
      totalDocPages: totalPages,
    });
  },
};
