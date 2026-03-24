module.exports = {
  service: async (req, res) => {
    res.render("pages/home/service", {
      title: "Dịch vụ",
      layout: "layouts/home/home",
    });
  },
};
