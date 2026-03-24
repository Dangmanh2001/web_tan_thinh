module.exports = {
  portfolio: async (req, res) => {
    res.render("pages/home/portfolio", {
      title: "Dịch vụ",
      layout: "layouts/home/home",
    });
  },
};
