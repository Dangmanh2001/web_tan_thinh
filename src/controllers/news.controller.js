module.exports = {
  news: async (req, res) => {
    res.render("pages/home/news", {
      title: "Tin tức",
      layout: "layouts/home/home",
    });
  },
};
