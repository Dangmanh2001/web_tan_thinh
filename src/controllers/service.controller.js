const models = require("../../models/index");
const Service = models.Service;
module.exports = {
  service: async (req, res) => {
    try {
      const services = await Service.findAll({
        order: [["id", "ASC"]],
      });

      // Truyền biến 'services' vào file ejs
      res.render("pages/home/service", {
        services: services,
        title: "Dịch vụ",
        layout: "layouts/home/home",
      });
    } catch (error) {
      res.status(500).send("Lỗi truy vấn dịch vụ");
    }
  },
};
