module.exports = {
  dashboard: async (req, res) => {
    res.render("pages/admin/index", {
      layout: "layouts/admin/home",
    });
  },
};
