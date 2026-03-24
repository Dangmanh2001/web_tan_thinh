const path = require("path");
const models = require("../../models/index");
const Contact = models.Contact;
module.exports = {
  home: async (req, res) => {
    res.render("pages/home/index", {
      title: "Trang chủ",
      layout: "layouts/home/home",
    });
  },
};
