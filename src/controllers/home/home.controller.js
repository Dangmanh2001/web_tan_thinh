const path = require("path");
const models = require("../../../models/index");

module.exports = {
  home: async (req, res) => {
    res.render("pages/home/index", {
      title: "Trang chủ",
      layout: "layouts/home/home",
    });
  },
};
