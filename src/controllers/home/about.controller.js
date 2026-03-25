module.exports = {
  about: async (req, res) => {
    res.render("pages/home/about", {
      title: "Giới thiệu",
      layout: "layouts/home/home",
    });
  },
};
