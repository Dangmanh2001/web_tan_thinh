const models = require("../../../models/index");
const Service = models.Service;
module.exports = {
  detail: async (req, res) => {
    try {
      const service = await Service.findByPk(req.params.id);
      if (!service) return res.redirect("/service");
      res.render("pages/home/service-detail", {
        service,
        title: service.name,
        layout: "layouts/home/home",
      });
    } catch (error) {
      res.redirect("/service");
    }
  },

  service: async (req, res) => {
    try {
      const limit = 10;
      const page = parseInt(req.query.page) || 1;
      const offset = (page - 1) * limit;

      const { count, rows: services } = await Service.findAndCountAll({
        order: [["id", "ASC"]],
        limit,
        offset,
      });

      const totalPages = Math.ceil(count / limit);

      res.render("pages/home/service", {
        services,
        title: "Dịch vụ",
        layout: "layouts/home/home",
        currentPage: page,
        totalPages,
        totalItems: count,
      });
    } catch (error) {
      res.status(500).send("Lỗi truy vấn dịch vụ");
    }
  },
};
