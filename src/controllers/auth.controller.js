const bcrypt = require("bcryptjs");
const { User } = require("../../models");

module.exports = {
  login: async (req, res) => {
    res.render("pages/login", {
      layout: false,
      error: null,
    });
  },

  postLogin: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.render("pages/login", {
          layout: false,
          error: "Tên đăng nhập hoặc mật khẩu không đúng",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.render("pages/login", {
          layout: false,
          error: "Tên đăng nhập hoặc mật khẩu không đúng",
        });
      }

      req.session.user = {
        id: user.id,
        username: user.username,
        role: user.role,
      };

      return res.redirect("/dashboard");
    } catch (err) {
      console.error(err);
      return res.render("pages/login", {
        layout: false,
        error: "Đã có lỗi xảy ra, vui lòng thử lại",
      });
    }
  },

  logout: (req, res) => {
    req.session.destroy(() => {
      res.redirect("/auth");
    });
  },

  forgotPass: async (req, res) => {
    res.render("pages/forgotPass", {
      layout: false,
    });
  },
};
